import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeDataService, Emp } from '../employee-data.service';

@Component({
  selector: 'app-empleados-detalles',
  templateUrl: './empleados-detalles.component.html',
  styleUrls: ['./empleados-detalles.component.css']
})
export class EmpleadosDetallesComponent implements OnInit {

  emps$: Observable<Emp[]>;

  constructor(private empService: EmployeeDataService) {}

  ngOnInit() {
    this.emps$ = this.empService.getEmployees();
  }

}
