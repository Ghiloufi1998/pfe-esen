import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AgcrudService} from '../../_services/agcrud.service';
import { TokenStorageService} from '../../_services/token-storage.service';
import { UsercrudService} from '../../_services/usercrud.service';
@Component({
  selector: 'app-addaggestad',
  templateUrl: './addaggestad.component.html',
  styleUrls: ['./addaggestad.component.scss']
})
export class AddaggestadComponent implements OnInit {
public addAgFrom: FormGroup;
  errorMessage = '';
  region: string;
  listeresponsable : any;
  condition: String;
  constructor(private usercrud : UsercrudService ,private router: Router, private agcrud: AgcrudService ,private toastr: ToastrService, private tokenStorage :TokenStorageService) { }

  ngOnInit(){
    const user = this.tokenStorage.getUser();
    this.region= user.region;
    this.condition= this.region;
   this.usercrud.getByregion(this.region).subscribe(
     data => {
      this.listeresponsable= data;
      console.log(data);
     }
   )
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
        this.router.navigate(['/Showaggestad']);
      },
      err => {
        this.toastr.error('Erreur données!', 'Réssayer!');

        this.errorMessage = err.error.message;

      }
    );
  }
}



