import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ToastrService } from 'ngx-toastr';
import { AgcrudService} from '../../_services/agcrud.service';
import {TokenStorageService} from '../../_services/token-storage.service';
import { UsercrudService} from '../../_services/usercrud.service';

@Component({
  selector: 'app-modifaggestad',
  templateUrl: './modifaggestad.component.html',
  styleUrls: ['./modifaggestad.component.scss']
})
export class ModifaggestadComponent implements OnInit {

  public modifAg: FormGroup;
  currentag:any =[];
  region: string;
  listeresponsable : any;
  condition: String;
  constructor(private usercrud : UsercrudService ,private route: ActivatedRoute,private router: Router, private agcrud: AgcrudService ,private toastr: ToastrService, private tokenStorage :TokenStorageService) { }

  ngOnInit() {
      const user = this.tokenStorage.getUser();
      this.region= user.region;
      this.condition= this.region;
     this.usercrud.getByregion(this.region).subscribe(
       data => {
        this.listeresponsable= data;
        console.log(data);
       }
     )

      this.modifAg = new FormGroup({
        title: new FormControl("", Validators.required,),
        adresse: new FormControl("", Validators.required),
        tel: new FormControl("", Validators.required),
        email: new FormControl("", Validators.required),
        responsable: new FormControl("", Validators.required),
        region: new FormControl("", Validators.required)
      });

      this.getAg(this.route.snapshot.paramMap.get('id'));

    }

    getAg(id) {
      this.agcrud.get(id)
        .subscribe(
          data => {
            this.currentag = data;
            console.log(data);
          },
          error => {
            console.log(error);
          });
    }
    updateAg() {
      this.agcrud.update(this.currentag.id, this.modifAg.value)
        .subscribe(
          response => {
            this.toastr.success('Agence modifiée avec succès','Merci')
            this.router.navigate(['/Showaggestad']);
            console.log(response);

          },
          error => {
            this.toastr.error('Erreur modification! ', 'Réssayer!');
            console.log(error);
          });
    }

  }
