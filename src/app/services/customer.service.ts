import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../actualizar-personajes';

@Injectable({
  providedIn: 'root'
})
export class PersonajeService {

  constructor(private http:HttpClient) { }



  getCustomers():Observable<Customer []>{ ///return observable of type Customer []
      return this.http.get<Customer []>('http://localhost:4200/customers');
  }

  postCustomers(customer:Customer):Observable<Customer> {
    return this.http.post<Customer>('http://localhost:4200/customers',PersonajeService);
  }

  deleteCustomer(id:(string | undefined) ):Observable<any>{
    return this.http.delete(`http://localhost:4200/customers/${id}`);
  }

}
