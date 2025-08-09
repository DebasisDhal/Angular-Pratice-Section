import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ng-class',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './ng-class.component.html',
  styleUrl: './ng-class.component.css'
})
export class NgClassComponent implements OnInit {

    appliedClass:String ='';
    language:any[]=[];
    selectLang: string ='';
    languagess:{ id:number; name:String}[]=[];


  ngOnInit() {
    
    this.appliedClass = 'highlight';
    this.language=['Html','css','java','angular']
    
  this.languagess = [
  { id: 1, name: 'TS' },
  { id: 2, name: 'Java' },
  { id: 3, name: 'Python' },
  { id: 4, name: 'JavaScript' }
];
  }

  colourChange: string = 'green-bg';
  colourChanges: string = 'green-bg';


  toggleColour() {
    this.colourChange = this.colourChange === 'green-bg' ? 'red-bg' : 'green-bg';
  }
  toggleColours(data:any){
      this.colourChanges =data;
  }

selectedId: number | null = null;

selectItem(id: number): void {
  this.selectedId = id;
}
searchTerm = '';
  width: string = '200px';
  height: string = '100px';
  borderRadius: string = '10px';
  backgroundColor: string = 'skyblue';
  progressValue:number = 0;
  get filteredLanguages() {
    return this.languagess.filter(lang =>
      lang.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }


  boxStyle(){
      return {
          width: this.width,
      height: this.height,
      'border-radius': this.borderRadius,
      'background-color': this.backgroundColor,
      color: 'white',
      border: '2px solid black',
      display: 'flex',
      'align-items': 'center',
      'justify-content': 'center'
      }
  };

}
