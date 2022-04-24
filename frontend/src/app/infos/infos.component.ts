import { Component, OnInit } from '@angular/core';
import { AgcrudService } from '../_services/agcrud.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrls: ['./infos.component.scss']
})
export class InfosComponent implements OnInit {
  public registerForm: FormGroup;
  regions: any = ['Mannouba', 'Tunis', 'Ariana', 'Nabeul', 'Gabes','Kebili','Medenine','Kasserine','Gafsa','Sfax','Sidi Bouzid','Kairouan','Tozeur','Kef','Siliana','Siliana','Bizerte','	Beja','Jendouba','Mahdia','Zaghouan','Sousse','Monastir','Ben Arous']
  selectedregion= this.regions[1];
  listeag: any= [];

  constructor(private agcrud: AgcrudService) { }

  onChange(newValue){
    this.selectedregion= newValue;
    console.log(newValue);

    this.agcrud.findByregion(this.selectedregion).subscribe(
      data =>{

          this.listeag = data;
          console.log(data);

    })

  }

  ngOnInit(){

    this.registerForm = new FormGroup({
      
      region: new FormControl("", Validators.required),
    });
      this.agcrud.findByregion(this.selectedregion).subscribe(
        data =>{
  
            this.listeag = data;
            console.log(data);
  
      })
    
  }
}
