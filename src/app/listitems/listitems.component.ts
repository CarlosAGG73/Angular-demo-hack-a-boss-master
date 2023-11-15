import { Component } from '@angular/core';
import {employees} from 'src/assets/fixtures/employees';
import { Employee } from 'src/models/employee';

@Component({
  selector: 'app-listitems',
  templateUrl: './listitems.component.html',
  styleUrls: ['./listitems.component.css']
})
export class ListitemsComponent {
  selectedEmployee: any;
  employees = employees;

  today = new Date();


 /* firstEmployee = employees[0];
  secondEmployee = employees[1];
  thirtEmployee = employees[2];
  fourthEmployee = employees[3];*/
  

  onEmployeeChecked(employee: Employee){
    this.selectedEmployee = employee;
  }


}
