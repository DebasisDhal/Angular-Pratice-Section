import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ng-for',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './ng-for.component.html',
  styleUrl: './ng-for.component.css'
})
export class NgForComponent implements OnInit {

  AddCity:string[] =[];
  Ad:String=''
  languages:{ id:number; name:String}[]=[];
  selectedId: number =0;
  videoUrl:any[] = [];
  city:any[] = [];
  state:any[] = [];
  dist:any[] = [];
  selectedStateId:number | null = null;
  selectedCityId: number = 0;

  ngOnInit(): void {
this.languages = [
  { id: 1, name: 'TS' },
  { id: 2, name: 'Java' },
  { id: 3, name: 'Python' },
  { id: 4, name: 'JavaScript' }
];

this.videoUrl = [
  { pageUrl: 'https://angular.io/guide/structural-directives#ngif', linkText: 'ngIf' },
  { pageUrl: 'https://angular.io/guide/structural-directives#ngfor', linkText: 'ngFor' },
  { pageUrl: 'https://angular.io/guide/structural-directives#ngfor', linkText: 'ngClass' },
  { pageUrl: 'https://angular.io/guide/structural-directives#ngfor', linkText: 'ngStyle' },
];

this.state = [
  {id:1, states:'punjab'},
  {id:2, states:'Odisha'},
  {id:3, states:'UP'},
]
this.city = [
  {id:1, states:'Mathura'},
  {id:2, states:'Ludiana'},
  {id:3, states:'Bhubaneswar'},
]


  }

  selction(id:number){
    this.selectedId = id;

  }

  addCity(){
    if(!this.AddCity.includes(this.Ad.trim())){
    this.AddCity.push(this.Ad.trim());
    this.Ad ='';
    }else{
      alert("City is Already");
    }

  }
inTable:number[]=[];
table:number=0;

onTable(){
  if(this.table != 0){
     this.inTable = Array.from({length:10}, (_, i) => i+1);
  }else{
    alert("Enter data");
  }
}


getSelectedData(value:String){
  this.selectedCityId = Number(value);
}

}
