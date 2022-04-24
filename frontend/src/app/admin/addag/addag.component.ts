import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AgcrudService} from '../../_services/agcrud.service';
import { TokenStorageService } from '../../_services/token-storage.service';
import { UsercrudService } from '../../_services/usercrud.service';
@Component({
  selector: 'app-addag',
  templateUrl: './addag.component.html',
  styleUrls: ['./addag.component.scss']
})
export class AddagComponent implements OnInit {
  public addAgFrom: FormGroup;
  errorMessage = '';
  responsables: any[];
  Userbyregion:String;
  region:String;
  regions: any = ['Mannouba', 'Tunis', 'Ariana', 'Nabeul', 'Gabes','Kebili','Medenine','Kasserine','Gafsa','Sfax','Sidi Bouzid','Kairouan','Tozeur','Kef','Siliana','Siliana','Bizerte','	Beja','Jendouba','Mahdia','Zaghouan','Sousse','Monastir','Ben Arous']
  constructor(private router: Router, private agcrud: AgcrudService ,private toastr: ToastrService, private tokenStorage:TokenStorageService, private usercrud : UsercrudService) { }

  ngOnInit(){
 

    this.addAgFrom = new FormGroup({
      title: new FormControl("", Validators.required,),
      adresse: new FormControl("", Validators.required),
      tel: new FormControl("", Validators.required),
      email: new FormControl("", Validators.required),
      responsable: new FormControl("", Validators.required),
      region: new FormControl("", Validators.required),

    });

  }
  AddAg(){
    this.agcrud.create(this.addAgFrom.value).subscribe(
      data => {
        console.log(data);
        this.toastr.success('Agence ajoutée', 'merci');
        this.router.navigate(['/Showagadmin']);
      },
      err => {
        this.toastr.error('Erreur données!', 'Réssayer!');

        this.errorMessage = err.error.message;

      }
    );
  }
}


