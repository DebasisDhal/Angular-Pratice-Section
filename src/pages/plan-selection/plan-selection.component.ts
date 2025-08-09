import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-plan-selection',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './plan-selection.component.html',
  styleUrl: './plan-selection.component.css'
})
export class PlanSelectionComponent {

  selectedOption:string ='';

  showMore(option:string){
    this.selectedOption = option;

  }

}
