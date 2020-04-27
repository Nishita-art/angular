import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  id:number;
  name:string;
  salary:number;
  department:string;
  status:boolean=false;
  result:string;

  constructor() { }

  ngOnInit(): void {
  }
  employee:Array<{id:number,name:string,salary:number,department:string}>=[
    {id:101,name:"Ram",salary:7000,department:"IT"},
    {id:102,name:"Shyam",salary:9000,department:"AI"},
    {id:103,name:"Mohan",salary:10000,department:"IT"},
    {id:104,name:"Sohan",salary:20000,department:"AI"},
  ];
  deleteUser(arg1)
  {
    console.log("Delete Employee");
    for(let i=0;i<this.employee.length;i++)
    {
      if(i==arg1)
      {
        this.employee.pop();
        this.result="Data Deleted";
      }
    }
  }
  Nid:number;
  Nname:string;
  Nsal:number;
  Ndept:string;
  updateUser(id:number,name:string,salary:number,department:string)
  {
    this.Nid=id;
    this.Nname=name;
    this.Nsal=salary;
    this.Ndept=department;


  }

  editrow(id:number,name:string,salary:number,department:string)
  {
    for(let i=0;i<this.employee.length;i++)
    {
      let em=this.employee[i];
      if(em.id==id)
      {
        console.log(name);
        this.employee.splice(i,1);
        this.employee.push({id,name,salary,department});
        console.log(em.name);
        break;
      }
    }
  }
      save(arg1:any,arg2:any,arg3:any,arg4:any)
      {
        this.employee.push({id:parseInt((<HTMLInputElement>arg1).value),name:(<HTMLInputElement>arg2).value,salary:parseInt((<HTMLInputElement>arg3).value),department:(<HTMLInputElement>arg4).value});
        this.status=true;
        if(this.status==true)
        {
          this.result="Data inserted";
        }
        else
        {
          this.result="";
        }
      }

    }