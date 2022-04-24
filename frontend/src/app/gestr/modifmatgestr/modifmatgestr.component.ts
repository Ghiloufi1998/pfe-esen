import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ToastrService } from 'ngx-toastr';
import { MatcrudService} from '../../_services/matcrud.service';
import {TokenStorageService} from '../../_services/token-storage.service';
@Component({
  selector: 'app-modifmatgestr',
  templateUrl: './modifmatgestr.component.html',
  styleUrls: ['./modifmatgestr.component.scss']
})
export class ModifmatgestrComponent implements OnInit {
  public modifMat: FormGroup;
  currentmat:any =[];
  types: any = ['PC Bureau', 'PC portatif', 'Imprimante', 'Automate', 'Écran']
  marques: any = ['Asus', 'Hp', 'Lenovo', 'Dell', 'Epson', 'Brother', 'Canon', 'Ricoh']
  Bureau: any;

  constructor(private route: ActivatedRoute,
    private router: Router,private matcrud : MatcrudService, private toastr: ToastrService, private tokenStorage :TokenStorageService,) { }

    ngOnInit() {
      const user = this.tokenStorage.getUser();



    this.Bureau = user.Bureau;
      this.modifMat = new FormGroup({
        title: new FormControl(""),
        caracteristiques: new FormControl(""),
        marque: new FormControl(""),
        serial: new FormControl(""),
        type: new FormControl(""),
        bureau: new FormControl(""),
        idbur: new FormControl(""),

      });
      this.getMat(this.route.snapshot.paramMap.get('id'));

    }
    getMat(id) {
      this.matcrud.get(id)
        .subscribe(
          data => {
            this.currentmat = data;
            console.log(data);
          },
          error => {
            console.log(error);
          });
    }
    updateMat() {
      this.matcrud.update(this.currentmat.id, this.modifMat.value)
        .subscribe(
          response => {
            this.toastr.success('Agence modifiée avec succès','Merci')
            this.router.navigate(['/Showmatadmin']);
            console.log(response);

          },
          error => {
            this.toastr.error('Erreur modification! ', 'Réssayer!');
            console.log(error);
          });
    }

  }
