import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { OperationsService } from 'src/app/Service/operations.service';

@Component({
  selector: 'app-fibonacci',
  templateUrl: './fibonacci.component.html',
  styleUrls: ['./fibonacci.component.css']
})
export class FibonacciComponent implements OnInit {

  number = new FormControl();
  showNumbers = false;
  negative=false;
  errorMessage=false;
  result=[];
  constructor(private service:OperationsService) { }

  ngOnInit(): void {
    this.number.valueChanges.subscribe(value => {
      this.showNumbers=false
      this.errorMessage=false
      if(value==null){
        this.showNumbers=false
      }
      if(value<=0){
        this.showNumbers=false
        this.negative=true
      }else{
        this.negative=false
      }
    });
  }

  generate(){
    if(this.negative){
      this.showNumbers = false;
      this.errorMessage = true;
    }else{
      this.errorMessage = false;
      this.showNumbers = true;
      this.service.getFibonacci(this.number.value).subscribe(value=>{
        this.result=value.serie
      })
    }
  }

}
