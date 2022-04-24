import { Component, OnInit } from '@angular/core';
import { FourcrudService } from '../../_services/fourcrud.service';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from '@angular/router';
@Component({
  selector: 'app-addfour',
  templateUrl: './addfour.component.html',
  styleUrls: ['./addfour.component.scss']
})
export class AddfourComponent implements OnInit {
  public addfourFrom: FormGroup;
  errorMessage = '';
  constructor(private router: Router, private fourcrud:FourcrudService ,private toastr: ToastrService) { }

  ngOnInit(){

    this.addfourFrom = new FormGroup({
      title: new FormControl("", Validators.required,),
      adresse: new FormControl("", Validators.required),
      matfisc: new FormControl("", Validators.required),
      tel: new FormControl("", Validators.required),
      responsable: new FormControl("", Validators.required),
      email: new FormControl("", Validators.required),
    });
  }

  Addfour(){
    this.fourcrud.create(this.addfourFrom.value).subscribe(
      data => {
        console.log(data);
        this.toastr.success('Fournisseur ajouté', 'merci');
        this.router.navigate(['/Showfouradmin']);
      },
      err => {
        this.toastr.error('Erreur données!', 'Réssayer!');

        this.errorMessage = err.error.message;

      }
    );
  }
}
