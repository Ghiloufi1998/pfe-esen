import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatcrudService} from '../../_services/matcrud.service';
import {TokenStorageService} from '../../_services/token-storage.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-showmatgestad',
  templateUrl: './showmatgestad.component.html',
  styleUrls: ['./showmatgestad.component.scss']
})
export class ShowmatgestadComponent implements OnInit {
  listemat:any =[];
  condition: string;
  region : string;

  constructor(private matcrud : MatcrudService, private router: Router, private tokenstorage:TokenStorageService,private toastr: ToastrService) { }

  ngOnInit(){
    const user = this.tokenstorage.getUser();
    this.region= user.region;

    this.condition = '?bureau=Administration Régionale&region='+this.region+'';

    this.retrieveListmat();
  }
  retrieveListmat(){
    this.matcrud.findByBureg(this.condition).subscribe(
      data => {
        this.listemat = data;
        console.log(data);

      },
      error => {
        console.log(error);
      });
}

refreshList() {
  this.retrieveListmat();

}

removeAllmat() {
  this.matcrud.deleteAll()
    .subscribe(
      response => {
        console.log(response);
        this.retrieveListmat();
      },
      error => {
        console.log(error);
      });
}
deleteMat(listemat, index) {
  if(window.confirm('Confirmer Choix')) {
  this.matcrud.delete(listemat.id)
    .subscribe(
      response => {
        this.listemat.splice(index, 1)
        console.log(response);

      },
      error => {
        console.log(error);
      });
}
}
updateActivetrue(listemat, index) {
  if(window.confirm('Confirmer Choix')) {
   const data={
      active : this.listemat.active=true
    }
  this.matcrud.update(listemat.id, data)
    .subscribe(
      response => {
        this.toastr.success('Matériel mis en service avec succès','Merci')
        this.listemat.splice(index, 1);
        console.log(response);
        this.retrieveListmat();
      },
      error => {
        this.toastr.error('erreur','Merci')
        console.log(error);
      });
}

}
updateActivefalse(listemat, index) {
  if(window.confirm('Confirmer Choix')) {
   const data={
      active : this.listemat.active=false
    }
  this.matcrud.update(listemat.id, data)
    .subscribe(
      response => {
        this.toastr.success('Matériel mis Hors service avec succès','Merci')
        this.listemat.splice(index, 1);
        console.log(response);
        this.retrieveListmat();
      },
      error => {
        this.toastr.error('erreur','Merci')
        console.log(error);
      });
}

}
}
