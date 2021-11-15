import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { OperationsService } from 'src/app/Service/operations.service';

@Component({
  selector: 'app-triangle',
  templateUrl: './triangle.component.html',
  styleUrls: ['./triangle.component.css']
})
export class TriangleComponent implements OnInit {
  triangleForm = new FormGroup({
    lado_1: new FormControl(),
    lado_2: new FormControl(),
    base: new FormControl(),
    altura: new FormControl(),
  });
  showResult = false;
  enableButton = false;
  negative=false;
  errorMessage= false;
  area=0;
  perimetro=0;
  constructor(private service:OperationsService) { }

  ngOnInit(): void {
    this.triangleForm.valueChanges.subscribe(value => {
      this.showResult=false
      this.errorMessage=false
      if(value.lado_1==null || value.lado_2==null
        || value.base==null || value.altura==null){
        this.enableButton=false
        this.showResult=false
      }else{
        this.enableButton=true
      }
      if(value.lado_1<=0 || value.lado_2<=0
        || value.base<=0 || value.altura<=0){
          this.negative=true
        }else{
          this.negative=false;
        }
    });
  }

  calculate(){
    if(this.negative){
      this.errorMessage=true
      this.showResult=false
    }else{
      this.errorMessage=false
      this.showResult=true
      this.service.getTriangleData(this.triangleForm.value).subscribe(data=>{
        this.area=data.area;
        this.perimetro=data.perimetro;
      })
    }
  }

}
