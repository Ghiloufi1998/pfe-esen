import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsercrudService} from '../../_services/usercrud.service';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ToastrService } from 'ngx-toastr';
import { AgcrudService} from '../../_services/agcrud.service';
import * as bcrypt from 'bcryptjs';
@Component({
  selector: 'app-modifcmpt',
  templateUrl: './modifcmpt.component.html',
  styleUrls: ['./modifcmpt.component.scss']
})
export class ModifcmptComponent implements OnInit {
  public modifCmpt: FormGroup;
currentuser:any =[];
Bureaux: any =['Administration Centrale', 'Administration Régionale', 'Agence Régionale']
regions: any = ['Mannouba', 'Tunis', 'Ariana', 'Nabeul', 'Gabes','Kebili','Medenine','Kasserine','Gafsa','Sfax','Sidi Bouzid','Kairouan','Tozeur','Kef','Siliana','Siliana','Bizerte','	Beja','Jendouba','Mahdia','Zaghouan','Sousse','Monastir','Ben Arous']
selectedregion= this.regions[1];
idbur: any;
  constructor(private route: ActivatedRoute,private agcrud : AgcrudService ,
    private router: Router, private UsercrudService: UsercrudService,private toastr: ToastrService) { }
    onChange(newValue){
  this.selectedregion= newValue;
  console.log(newValue);

  this.agcrud.findByregion(this.selectedregion).subscribe(
    data =>{
        this.idbur = data;
        

  })
}
  ngOnInit() {
    this.modifCmpt = new FormGroup({
      username: new FormControl(""),
      password: new FormControl(""),
      email: new FormControl("", [

        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),

      nom: new FormControl(""),
      cin: new FormControl(""),
      prenom: new FormControl(""),
      adresse: new FormControl(""),
      Bureau: new FormControl(""),
      region: new FormControl(""),
      idbur: new FormControl(""),
    });
    this.agcrud.findByregion(this.selectedregion).subscribe(
      data =>{

          this.idbur = data;
          console.log(data);

    })
    this.getUser(this.route.snapshot.paramMap.get('id'));

  }

  getUser(id) {
    this.UsercrudService.get(id)
      .subscribe(
        data => {
          this.currentuser = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  updateUser() {

    this.modifCmpt.value.password = bcrypt.hashSync(this.modifCmpt.value.password,8)

    this.UsercrudService.update(this.currentuser._id, this.modifCmpt.value)
      .subscribe(
        response => {
          this.toastr.success('Utilisateur modifié avec succès','Merci')
          this.router.navigate(['/Showcmptadmin']);
          console.log(response);

        },
        error => {
          this.toastr.error('Erreur modification! ', 'Réssayer!');
          console.log(error);
        });
  }
}
