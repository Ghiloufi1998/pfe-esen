import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { MatcrudService } from '../../_services/matcrud.service';
import {TokenStorageService} from '../../_services/token-storage.service';
@Component({
  selector: 'app-addmat',
  templateUrl: './addmat.component.html',
  styleUrls: ['./addmat.component.scss']
})
export class AddmatComponent implements OnInit {
  public addmatFrom: FormGroup;
  types: any = ['PC Bureau', 'PC portatif', 'Imprimante', 'Automate', 'Écran']
  marques: any = ['Asus', 'Hp', 'Lenovo', 'Dell', 'Epson', 'Brother', 'Canon', 'Ricoh']
  regions: any = ['Mannouba', 'Tunis', 'Ariana', 'Nabeul', 'Gabes','Kebili','Medenine','Kasserine','Gafsa','Sfax','Sidi Bouzid','Kairouan','Tozeur','Kef','Siliana','Siliana','Bizerte','	Beja','Jendouba','Mahdia','Zaghouan','Sousse','Monastir','Ben Arous']
  Bureau: any;

  errorMessage = '';
  constructor(private router: Router, private matcrud:MatcrudService ,private tokenStorage :TokenStorageService, private toastr: ToastrService) { }

  ngOnInit(){
    const user = this.tokenStorage.getUser();


    this.Bureau = user.Bureau;

    this.addmatFrom = new FormGroup({
      title: new FormControl("", Validators.required,),
      caracteristiques: new FormControl("", Validators.required),
      marque: new FormControl("", Validators.required),
      serial: new FormControl("", Validators.required),
      type: new FormControl("", Validators.required),
      bureau: new FormControl("", Validators.required),
    });

  }






  Addmat(){
    this.matcrud.create(this.addmatFrom.value).subscribe(
      data => {
        console.log(data);
        this.toastr.success('Matériel ajouté', 'merci');
        this.router.navigate(['/Showmatadmin']);
      },
      err => {
        this.toastr.error('Erreur données!', 'Réssayer!');

        this.errorMessage = err.error.message;

      }
    );
  }
}
