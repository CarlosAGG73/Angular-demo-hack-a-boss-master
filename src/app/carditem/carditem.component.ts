import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Employee } from 'src/models/employee';


@Component({
  selector: 'app-carditem',
  templateUrl: './carditem.component.html',
  styleUrls: ['./carditem.component.css']
})
export class CarditemComponent {
  @Input() employee: any; 
  @Input() indice: any;
  @Output() 
  employeeSelected = new EventEmitter<Employee>();
  
  constructor(){
    console.log('constructor');
    console.log(this.employee);
    
  }

  onEmployeeChecked(currentEmployee: Employee){
    this.employeeSelected.emit(currentEmployee);//con esto el hijo le pasa al padre el empleado clicado. ahor el padre se tiene que enterar.
  }

  onCheckRank(rank: string){
    if (rank==="senior"){
      return {'text-decoration': "underline"}
    }
    else{
      return null;
    }

  }

}
