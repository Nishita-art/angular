import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile-app',
  templateUrl: './mobile-app.component.html',
  styleUrls: ['./mobile-app.component.css']
})
export class MobileAppComponent implements OnInit
 {
    private id:string;
    private name:string;
    private salary:string;
    private department:string;
  constructor() { }

  ngOnInit(): void {
  }
Save(arg1:any,arg2:any,arg3:any,arg4:any){
  this.id=(<HTMLInputElement>arg1).value;
  this.name=(<HTMLInputElement>arg2).value;
  this.salary=(<HTMLInputElement>arg3).value;
  this.department=(<HTMLInputElement>arg4).value;
  alert(this.id+" "+this.name+" "+this.salary+" "+this.department);
  }
}
