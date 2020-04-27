import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-lab3',
  templateUrl: './lab3.component.html',
  styleUrls: ['./lab3.component.css']
})
export class Lab3Component implements OnInit
 {
  
  constructor()
   { 
   }

  ngOnInit(): void
   {
   }
  option:any;
  id:any;
  value:any;

    productAvailable=[
      { id:1,value:'Yes'},
      { id:2,value:'No'}
    ]
    default:string="Mobile"
   onSubmit(form:NgForm){
     console.log(form)
  }
}