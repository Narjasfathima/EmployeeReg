import { Component } from '@angular/core';

import { DataService } from '../services/data.service';
import {FormBuilder,Validators} from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router'; 

@Component({
  selector: 'app-editemp',
  templateUrl: './editemp.component.html',
  styleUrls: ['./editemp.component.css']
})
export class EditempComponent {


  imgfile:any=""
  select_gender:any=""
  eid:any

  constructor(private ds:DataService,private fb:FormBuilder,private r:Router,private ar:ActivatedRoute){

    this.ar.params.subscribe(res=>this.eid=res['id'])
    this.ds.specemp(this.eid).then(res=>res.json()).then(res=>{
      this.empform=this.fb.group({
        first_name:[`${res.first_name}`,Validators.required],
        last_name:[`${res.last_name}`,Validators.required],
        gender:[`${res.gender}`,Validators.required],
        dob:[`${res.dob}`,Validators.required],
        place:[`${res.place}`,Validators.required],
        phone:[`${res.phone}`,Validators.required],
        email:[`${res.email}`,Validators.required],
        dept:[`${res.dept}`,Validators.required],
        job_title:[`${res.job_title}`,Validators.required],
      })
    })
  }

  empform=this.fb.group({
    first_name:['',Validators.required],
    last_name:['',Validators.required],
    gender:['',Validators.required],
    dob:['',Validators.required],
    place:['',Validators.required],
    phone:['',Validators.required],
    email:['',Validators.required],
    dept:['',Validators.required],
    job_title:['',Validators.required],
  })

 submitted(){
  console.log(this.empform.value)
  this.ds.updateemp(this.empform.value,this.eid).then(res=>res.json()).then(res=>
    {
    if(res['msg']=="updated"){
      alert("Employee updated!")
      this.r.navigateByUrl('')
    }
    else{
      alert("Failed")
    }
  })
 }


}
