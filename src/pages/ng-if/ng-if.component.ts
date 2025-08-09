import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ng-if',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ng-if.component.html',
  styleUrl: './ng-if.component.css'
})
export class NgIfComponent implements OnInit{


    title = 'pratice';
  gender:String ='';
  p1:String = ''
  p2:String = ''
  p3:String = ''
  p4:String = ''
  div1:boolean = true;
  div2:boolean = true;
 
  num1:number=0;
  num2:number=0;
  fName:String ='';
  sName:String='';
  teacher:boolean=false;
  Musician:boolean=false;
  sportPerson:boolean = false;
  working:boolean = false;
  
  ngOnInit() {
   
    this.addData();

  }

  items:String[] =[];
  setItems(value:string[]){
    this.items = value;
  }
  get div3(): boolean {
    return this.num1 !== null && this.num2 !== null && this.num1 === this.num2;
  }

  selectOnly(role:String){
    this.teacher = role ==='teacher';
    this.sportPerson = role === 'sportPerson';
    this.Musician = role === 'Musician';
  }


  student:Students[]=[];
  addData(){
  this.student =[
    {
      name: 'John',
      age:20,
      attendance: 'Present',
      gender: 'm',
      isIndian: 'No'
    },
      {
    name: 'Rahul',
    age: 20,
    attendance: 'Present',
    gender: 'm',
    isIndian: 'Yes'
  },
  {
    name: 'Priya',
    age: 22,
    attendance: 'Absent',
    gender: 'F',
    isIndian: 'Yes'
  }

  ]
}
 
}
  interface Students{
  name:String;
  age:number;
  attendance:String;
  gender:String;
  isIndian:String;
}
