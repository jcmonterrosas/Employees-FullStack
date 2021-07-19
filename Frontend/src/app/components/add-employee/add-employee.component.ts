import { Component, IterableDiffers, OnInit } from '@angular/core';
import { Boss } from 'src/app/models/boss.model';
import { EmployeeService } from 'src/app/services/employee.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  fullname?: string;
  function?: string;
  submitted = false;
  isAlreadyExists = false;
  employee = new Boss;

  constructor(private EmployeeService: EmployeeService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.employee.fullname = this.fullname;
    this.employee.function = this.function;

    this.EmployeeService.create(this.employee)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = response[1];
          this.isAlreadyExists = !response[1];
        },
        error => {
          console.log(error);
        });

  }
}
