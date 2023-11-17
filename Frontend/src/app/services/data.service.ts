import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  emplist(){
    return fetch('http://127.0.0.1:8000/empv/', {
             method: 'GET',
          headers: {
             'Content-type': 'application/json; charset=UTF-8',
           },
     })
  }

  addemp(data:any){
    return fetch('http://127.0.0.1:8000/empv/', {
             method: 'POST',
             body:data,
          headers: {
             'Accept':'*/*',
            //  'Authorization':`Token ${localStorage.getItem('token')}`
           },
     })
  }

  deleteemp(id:any){
    return fetch(`http://127.0.0.1:8000/empv/${id}/`, {
             method: 'DELETE',
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
           },
     })
  }

  specemp(id:any){
    return fetch(`http://127.0.0.1:8000/empv/${id}/`, {
             method: 'GET',
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
           },
     })
  }

  updateemp(data:any,id:any){
    return fetch(`http://127.0.0.1:8000/empv/${id}/`, {
             method: 'PATCH',
             body:JSON.stringify(data),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
            //  'Authorization':`Token ${localStorage.getItem('token')}`
           },
     })
  }
}
