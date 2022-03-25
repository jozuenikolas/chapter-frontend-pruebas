import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

@Injectable()
export class EmployeeDataService {
  empDetails = [
    {
      id: 1,
      userName: "John",
      technology: "java/spring-boot",
      exp: "7 years"
    },
    {
      id: 2,
      userName: "Maria",
      technology: "Angular",
      exp: "5 years"
    },
    {
      id: 3,
      userName: "Avinash",
      technology: "java/spring-boot",
      exp: "5 years"
    },
    {
      id: 4,
      userName: "Smith",
      technology: ".Net",
      exp: "6 years"
    },
    {
      id: 5,
      userName: "Niti",
      technology: "Angular",
      exp: "9 years"
    },
  ];

  constructor() {}

  getEmployees(): Observable<Emp[]> {
    return of(this.empDetails);
  }
}

export interface Emp {
  id: number;
  userName: string;
  technology: string;
  exp: string;
}
