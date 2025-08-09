import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-ng-forms',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './ng-forms.component.html',
  styleUrl: './ng-forms.component.css'
})
export class NgFormsComponent implements OnInit {
  angForm!:FormGroup;
  formObj:any;
  hide:boolean=false;

  constructor(private fb:FormBuilder){

  }
  ngOnInit() {
   
    this.init();
  }

  init(){
    this.angForm = this.fb.group({
      name: ['',[Validators.required]],
      activity:[''],
      gender:[''],
      age:[0]

    })
  }

  setActivity(value:String){
    this.angForm.patchValue({activity: value})
  }

  setGender(value: string) {
  this.angForm.patchValue({ gender: value });
}

changeAge(delta: number) {
  const currentAge = this.angForm.get('age')?.value || 1;
  this.angForm.patchValue({ age: Math.max(1, currentAge + delta) });
}

  onSubmit(){
    debugger;
    this.formObj = this.angForm.value;
  }

  


}
