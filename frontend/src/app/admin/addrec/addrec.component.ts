import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { Router } from '@angular/router';
import { ReccrudService} from '../../_services/reccrud.service'
import { FormGroup, FormControl, Validators } from "@angular/forms";
import {TokenStorageService} from '../../_services/token-storage.service';
@Component({
  selector: 'app-addrec',
  templateUrl: './addrec.component.html',
  styleUrls: ['./addrec.component.scss']
})
export class AddrecComponent implements OnInit {
  public addRecFrom: FormGroup;
  methodes: any = ['Sous garantie', 'Par facture', 'Par contrat', 'Partenaraiat', 'Locale', 'Atelier']
  regions: any = ['Mannouba', 'Tunis', 'Ariana', 'Nabeul', 'Gabes','Kebili','Medenine','Kasserine','Gafsa','Sfax','Sidi Bouzid','Kairouan','Tozeur','Kef','Siliana','Siliana','Bizerte','	Beja','Jendouba','Mahdia','Zaghouan','Sousse','Monastir','Ben Arous']
  Bureau: any;
  errorMessage = '';
  constructor(private router: Router, private reccrudService: ReccrudService,private toastr: ToastrService ,private tokenStorage :TokenStorageService) { }

  ngOnInit(){
    const user = this.tokenStorage.getUser();


    this.Bureau = user.Bureau;
    this.addRecFrom = new FormGroup({
      title: new FormControl("", Validators.required,),
      description: new FormControl("", Validators.required),
      bureau: new FormControl("", Validators.required),
      materiels: new FormControl("", Validators.required),
      methode : new FormControl("", Validators.required),
      region: new FormControl("", Validators.required),
    });
  }

  Addrec(){
    this.reccrudService.create(this.addRecFrom.value).subscribe(
      data => {
        console.log(data);
        this.toastr.success('Réclamation ajoutéé', 'merci');
        this.router.navigate(['/Showlistrecadmin']);
      },
      err => {
        this.toastr.error('Erreur données!', 'Réssayer!');

        this.errorMessage = err.error.message;

      }
    );
  }
}
