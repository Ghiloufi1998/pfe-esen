import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReccrudService} from '../../_services/reccrud.service';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-modifrec',
  templateUrl: './modifrec.component.html',
  styleUrls: ['./modifrec.component.scss']
})
export class ModifrecComponent implements OnInit {
  public modifRec: FormGroup;
  currentrec:any =[];
  methodes: any = ['Sous garantie', 'Par facture', 'Par contrat', 'Partenaraiat', 'Locale', 'Atelier']
  constructor(private route: ActivatedRoute,
    private router: Router, private reccrud: ReccrudService,private toastr: ToastrService) { }
    ngOnInit() {
    this.modifRec = new FormGroup({
      title: new FormControl(""),
      description: new FormControl(""),
      materiels: new FormControl(""),
      Bureau: new FormControl(""),
      methode: new FormControl("")

    });
    this.getRec(this.route.snapshot.paramMap.get('id'));

  }
  getRec(id) {
    this.reccrud.get(id)
      .subscribe(
        data => {
          this.currentrec = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  updateRec() {
    this.reccrud.update(this.currentrec.id, this.modifRec.value)
      .subscribe(
        response => {
          this.toastr.success('Réclamation modifiée avec succès','Merci')
          this.router.navigate(['/Showlistrecadmin']);
          console.log(response);

        },
        error => {
          this.toastr.error('Erreur modification! ', 'Réssayer!');
          console.log(error);
        });
  }

}
