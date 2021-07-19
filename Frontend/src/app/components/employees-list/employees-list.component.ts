import { Component, OnInit } from '@angular/core';
import { Boss } from 'src/app/models/boss.model'
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
  hasEmployees?= 0;

  constructor(private EmployeeService: EmployeeService) { }

  ngOnInit(): void {
    this.retrieveEmployees();
  }

  retrieveEmployees(): void {
    this.EmployeeService.getAll()
      .subscribe(
        data => {
          this.employees = data;
          // console.log(data)
        },
        error => {
          console.log(error)
        });
  }

  refreshList(): void {
    this.retrieveEmployees();
    this.currentEmployee = new Boss;
    this.currentIndex = -1;
    this.hasEmployees = 0;
  }


  setActiveEmployee(employee: Boss, index: number): void {
    this.currentEmployee = employee;
    console.log(this.currentEmployee)
    this.hasEmployees = this.currentEmployee.employees?.length;
    this.currentIndex = index;
  }

  setBoss(id: any, boss: any): void {
    console.log(id, { bossId: Number(boss) })
    this.EmployeeService.setBoss(id, { bossId: boss }).subscribe(
      data => {
        console.log(data)
        this.refreshList();
      },
      error => {
        console.log(error)
      });
  }

}
