import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { MatcrudService} from '../../_services/matcrud.service';
import { TokenStorageService} from '../../_services/token-storage.service';
@Component({
  selector: 'app-modifmatgestad',
  templateUrl: './modifmatgestad.component.html',
  styleUrls: ['./modifmatgestad.component.scss']
})
export class ModifmatgestadComponent implements OnInit {
  public ModifmatForm: FormGroup;
  currentmat: any =[];
  types: any = ['PC Bureau', 'PC portatif', 'Imprimante', 'Automate', 'Écran']
  marques: any = ['Asus', 'Hp', 'Lenovo', 'Dell', 'Epson', 'Brother', 'Canon', 'Ricoh']
  Bureau: string;
  region: any;
  errorMessage = '';
  constructor(private route : ActivatedRoute, private router: Router, private matcrud:MatcrudService ,private tokenStorage :TokenStorageService, private toastr: ToastrService) { }
  ngOnInit(){
    const user = this.tokenStorage.getUser();
    this.region= user.region;
    this.Bureau = user.Bureau;
    this.ModifmatForm = new FormGroup({
      title: new FormControl("", Validators.required,),
      caracteristiques: new FormControl("", Validators.required),
      marque: new FormControl("", Validators.required),
      serial: new FormControl("", Validators.required),
      type: new FormControl("", Validators.required),
      bureau: new FormControl("", Validators.required),
      region: new FormControl("", Validators.required),
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
  Modif() {
    this.matcrud.update(this.currentmat.id, this.ModifmatForm.value)
      .subscribe(
        response => {
          this.toastr.success('Matériel modifié avec succès','Merci')
          this.router.navigate(['/Showmatgestad']);
          console.log(response);

        },
        error => {
          this.toastr.error('Erreur modification! ', 'Réssayer!');
          console.log(error);
        });
  }

}
