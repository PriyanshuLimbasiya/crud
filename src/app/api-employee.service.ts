import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiEmployeeService {

  constructor(private _http:HttpClient) { }
  apiUrl="https://65d5ee0df6967ba8e3bcfd4b.mockapi.io/emp/"

  getAll()
  {
    return this._http.get(this.apiUrl);
  }
  getById(id:any)
  {
    return this._http.get(this.apiUrl+id)
  }
  delete(id:any)
  {
    return this._http.delete(this.apiUrl+id);
  }
  insert(form:any)
  {
    return this._http.post(this.apiUrl,form);
  }
  update(form:any,id:any)
  {
    return this._http.put(this.apiUrl+id,form);
  }
}
