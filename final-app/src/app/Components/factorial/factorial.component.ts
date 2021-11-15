import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { OperationsService } from 'src/app/Service/operations.service';

@Component({
  selector: 'app-factorial',
  templateUrl: './factorial.component.html',
  styleUrls: ['./factorial.component.css']
})
export class FactorialComponent implements OnInit {

  number = new FormControl();
  showResult = false;
  negative= false;
  errorMessage= false;
  result=0;

  constructor(private service:OperationsService) { }

  ngOnInit(): void {
    this.number.valueChanges.subscribe(value => {
      this.showResult=false
      this.errorMessage=false
      if(value==null){
        this.showResult=false
      }
      if(value<0){
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
      this.service.getFactorial(this.number.value).subscribe(data=>{
        this.result = data.factorial
      })
    }
  }

}
