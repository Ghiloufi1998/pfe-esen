import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { MatcrudService } from '../../_services/matcrud.service';
import {TokenStorageService} from '../../_services/token-storage.service';
@Component({
  selector: 'app-addmatgestr',
  templateUrl: './addmatgestr.component.html',
  styleUrls: ['./addmatgestr.component.scss']
})
export class AddmatgestrComponent implements OnInit {
  types: any = ['PC Bureau', 'PC portatif', 'Imprimante', 'Automate', 'Écran']
  marques: any = ['Asus', 'Hp', 'Lenovo', 'Dell', 'Epson', 'Brother', 'Canon', 'Ricoh']
  Bureau: string;
  region: string;
  idbur: string;
  errorMessage = '';
  constructor(private router: Router, private matcrud:MatcrudService ,private tokenStorage :TokenStorageService, private toastr: ToastrService) { }
  public addmatFrom: FormGroup;
  ngOnInit(){
    const user = this.tokenStorage.getUser();

    this.idbur = user.idbur;
    this.region= user.region;
    this.Bureau = user.Bureau;

    this.addmatFrom = new FormGroup({
      title: new FormControl("", Validators.required,),
      caracteristiques: new FormControl("", Validators.required),
      marque: new FormControl("", Validators.required),
      serial: new FormControl("", Validators.required),
      type: new FormControl("", Validators.required),
      bureau: new FormControl("", Validators.required),
      region: new FormControl("", Validators.required),
      idbur: new FormControl("", Validators.required),
    });

  }
  Addmat(){
    this.matcrud.create(this.addmatFrom.value).subscribe(
      data => {
        console.log(data);
        this.toastr.success('Matériel ajouté', 'merci');
        this.router.navigate(['/Showmatgestr']);
      },
      err => {
        this.toastr.error('Erreur données!', 'Réssayer!');

        this.errorMessage = err.error.message;

      }
    );
  }
}
