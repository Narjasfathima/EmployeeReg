import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import {FormBuilder,Validators} from '@angular/forms'
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-addemp',
  templateUrl: './addemp.component.html',
  styleUrls: ['./addemp.component.css']
})
export class AddempComponent {


  imgfile:any=""
  select_gender:any=""

  constructor(private ds:DataService,private fb:FormBuilder,private r:Router){}

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
    profile:['',Validators.required],
  })

  fileSubmit(e:any){
    this.imgfile=e.target.files[0]
  }

  submitted(){
    var first_name:any=this.empform.value.first_name    
    var last_name:any=this.empform.value.last_name    
    var dob:any=this.empform.value.dob    
    var place:any=this.empform.value.place    
    var phone:any=this.empform.value.phone    
    var email:any=this.empform.value.email    
    var dept:any=this.empform.value.dept    
    var job_title:any=this.empform.value.job_title
    
    var formd=new FormData()
    formd.append('first_name',first_name)
    formd.append('last_name',last_name)
    formd.append('gender',this.select_gender)
    formd.append('dob',dob)
    formd.append('place',place)
    formd.append('phone',phone)
    formd.append('email',email)
    formd.append('dept',dept)
    formd.append('job_title',job_title)
    formd.append('profile',this.imgfile,this.imgfile.filename)
    
    this.ds.addemp(formd).then(res=>res.json()).then(res=>{
      if(res['msg']=='created'){
        alert("Employee added!")
        this.r.navigateByUrl('')
      }
      else{
        alert("Employee adding is failed!")
      }
    })

  }
}
