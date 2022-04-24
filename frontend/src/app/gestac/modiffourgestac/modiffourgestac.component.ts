import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { FourcrudService} from '../../_services/fourcrud.service';
@Component({
  selector: 'app-modiffourgestac',
  templateUrl: './modiffourgestac.component.html',
  styleUrls: ['./modiffourgestac.component.scss']
})
export class ModiffourgestacComponent implements OnInit {

  public modifFour: FormGroup;
  currentfour:any =[];
  constructor(private route: ActivatedRoute,
    private router: Router, private fourcrud: FourcrudService,private toastr: ToastrService) { }

    ngOnInit() {
      this.modifFour = new FormGroup({
        title: new FormControl("", Validators.required,),
        adresse: new FormControl("", Validators.required),
        matfisc: new FormControl("", Validators.required),
        tel: new FormControl("", Validators.required),
        responsable: new FormControl("", Validators.required),
        email: new FormControl("", Validators.required),
      });
      this.getFour(this.route.snapshot.paramMap.get('id'));

    }
    getFour(id) {
      this.fourcrud.get(id)
        .subscribe(
          data => {
            this.currentfour = data;
            console.log(data);
          },
          error => {
            console.log(error);
          });
    }
    updateFour() {
      this.fourcrud.update(this.currentfour.id, this.modifFour.value)
        .subscribe(
          response => {
            this.toastr.success('Fournisseur modifié avec succès','Merci')
            this.router.navigate(['/Showfourgestac']);
            console.log(response);

          },
          error => {
            this.toastr.error('Erreur modification! ', 'Réssayer!');
            console.log(error);
          });
    }

  }
