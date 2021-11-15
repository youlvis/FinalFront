import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { OperationsService } from 'src/app/Service/operations.service';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.css']
})
export class CircleComponent implements OnInit {

  radio = new FormControl();
  showResult = false;
  negative= false;
  errorMessage= false;
  area=0;
  perimetro=0;
  constructor(private service:OperationsService) { }

  ngOnInit(): void {
    this.radio.valueChanges.subscribe(value => {
      this.showResult=false
      this.errorMessage=false
      if(value==null){
        this.showResult=false
      }
      if(value<=0){
        this.showResult=false
        this.negative=true
      }else{
        this.negative=false
      }
    });
  }

  calculate(){
    if(this.negative){
      this.showResult = false;
      this.errorMessage = true;
    }else{
      this.errorMessage = false;
      this.showResult = true;
      this.service.getCircleData(this.radio.value).subscribe(data=>{
        this.area=data.area
        this.perimetro=data.perimetro
      })
    }
  }

}