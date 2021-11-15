import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { OperationsService } from 'src/app/Service/operations.service';

@Component({
  selector: 'app-rectangle',
  templateUrl: './rectangle.component.html',
  styleUrls: ['./rectangle.component.css']
})
export class RectangleComponent implements OnInit {

  rectangleForm = new FormGroup({
    alto: new FormControl(),
    largo: new FormControl()
  });
  negative=false;
  errorMessage=false;
  showResult = false;
  enableButton=false;
  area=0;
  perimetro=0;

  constructor(private service:OperationsService) { }

  ngOnInit(): void {
    this.rectangleForm.valueChanges.subscribe(value => {
      this.showResult=false
      this.errorMessage=false
      if(value.alto==null || value.largo==null){
        this.enableButton=false
        this.showResult=false
      }else{
        this.enableButton=true
      }
      if(value.largo<=0 || value.alto<=0){
          this.negative=true
          this.showResult=false
        }else{
          this.negative=false;
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
      this.service.getRectangleData(this.rectangleForm.value).subscribe(data=>{
        this.area=data.area;
        this.perimetro=data.perimetro
      })
    }
  }

}
