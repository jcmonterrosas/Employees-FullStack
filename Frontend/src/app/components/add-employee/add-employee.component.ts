import { Component, IterableDiffers, OnInit } from '@angular/core';
import { Boss } from 'src/app/models/boss.model';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  
  fullname?: string;
  function?: string;
  // boss: string;
  response = new Boss;
  
  constructor(private EmployeeService: EmployeeService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const employee = new Boss;
    employee.fullname = this.fullname;
    employee.function = this.function;
    // employee.bossId = Number(this.boss);

    this.EmployeeService.create(employee)
      .subscribe(
        response => {
          console.log(response);
          this.response = response;
        },
        error => {
          console.log(error);
        });
  }
}
