import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgIfComponent } from "../pages/ng-if/ng-if.component";
import { CommonModule } from '@angular/common';
import { NgForComponent } from "../pages/ng-for/ng-for.component";
import { NgClassComponent } from "../pages/ng-class/ng-class.component";
import { NgFormsComponent } from "../pages/ng-forms/ng-forms.component";
import { PlanSelectionComponent } from '../pages/plan-selection/plan-selection.component';
import { TrainBookingComponent } from "../pages/train-booking/train-booking.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIfComponent, CommonModule, NgForComponent, NgClassComponent, NgFormsComponent, PlanSelectionComponent, TrainBookingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

    visibleComponent: string = '';

  onShow(component: string) {
    this.visibleComponent = component;
  }


}
