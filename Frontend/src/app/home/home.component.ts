import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  data:any=[]

  getData(d:any){
    this.data=d
    console.log(this.data)
  }

  constructor(private ds:DataService, private r:Router){
    this.ds.emplist().then(res=>res.json()).then(res=>this.getData(res))
  }

  editEmp(e:any){
    let id=e.target.id
    this.r.navigate(['editemp',id])
  }

  deleteEmp(e:any){
    this.ds.deleteemp(e.target.id).then(res=>res.json()).then(res=>{
      if(res['msg']=='deleted'){
        alert("Employee deleted successfully")
        this.r.navigateByUrl('addemp',{skipLocationChange:true}).then(res=>this.r.navigate(['']))
      }
      else{
        alert("Employee deleted failed")        
      }
    })
  }

}
