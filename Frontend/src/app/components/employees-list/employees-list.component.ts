import { Component, OnInit } from '@angular/core';
import { Boss } from 'src/app/models/boss.model'
import { Employee } from 'src/app/models/employee.model';
import { EmployeeService } from 'src/app/services/employee.service'

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {

  employees?: Boss[];
  currentEmployee?: Boss;
  currentIndex = -1;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.retrieveEmployees();
  }

  retrieveEmployees(): void{
    this.employeeService.getAll()
    .subscribe(
      data => {
        this.employees = data;
        console.log(data)
      },
      error => {
        console.log(error)
      });
  }

  refreshList(): void{
    this.retrieveEmployees();
    this.currentEmployee = new Boss;
    this.currentIndex = -1;
  }

  
  setActiveEmployee(employee: Boss, index: number): void {
    this.currentEmployee = employee;
    console.log(this.currentEmployee)
    this.currentIndex = index;
  }

}
