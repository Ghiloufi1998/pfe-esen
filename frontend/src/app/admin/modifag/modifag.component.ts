import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ToastrService } from 'ngx-toastr';
import { AgcrudService} from '../../_services/agcrud.service';
import {TokenStorageService} from '../../_services/token-storage.service';
@Component({
  selector: 'app-modifag',
  templateUrl: './modifag.component.html',
  styleUrls: ['./modifag.component.scss']
})
export class ModifagComponent implements OnInit {
  public modifAg: FormGroup;
  regions: any = ['Mannouba', 'Tunis', 'Ariana', 'Nabeul', 'Gabes']
  currentag:any =[];
  region: string;
  constructor(private route: ActivatedRoute,
    private router: Router,private agcrud : AgcrudService, private toastr: ToastrService ,private tokenStorage :TokenStorageService) { }

    ngOnInit() {
      const user = this.tokenStorage.getUser();
      this.region= user.region;
      
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
            this.router.navigate(['/Showagadmin']);
            console.log(response);

          },
          error => {
            this.toastr.error('Erreur modification! ', 'Réssayer!');
            console.log(error);
          });
    }

  }
