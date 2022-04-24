import { Component, OnInit } from '@angular/core';
import {ReccrudService} from '../../_services/reccrud.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {TokenStorageService} from '../../_services/token-storage.service';

@Component({
  selector: 'app-showrecnowad',
  templateUrl: './showrecnowad.component.html',
  styleUrls: ['./showrecnowad.component.scss']
})
export class ShowrecnowadComponent implements OnInit {
  listerec:any =[];
  region:string ;
  condition: string;
  constructor(private reccrud: ReccrudService,private router: Router,private toastr: ToastrService, private tokenStorage :TokenStorageService) { }
  ngOnInit() {

    const user = this.tokenStorage.getUser();
    this.region= user.region;
    this.condition='region='+this.region;
    this.retrieveListrec();
  }
  retrieveListrec(){
    this.reccrud.findByregion(this.condition).subscribe(
      data => {
        this.listerec = data;
        console.log(data);
      },  
      error => {
        console.log(error);
      });
}
refreshList() {
  this.retrieveListrec();

}

removeAllrecs() {
  this.reccrud.deleteAll()
    .subscribe(
      response => {
        console.log(response);
        this.retrieveListrec();
      },
      error => {
        console.log(error);
      });
}
deleterec(listerec, index) {
  if(window.confirm('Confirmer Choix')) {
  this.reccrud.delete(listerec.id)
    .subscribe(
      response => {
        this.listerec.splice(index, 1)
        console.log(response);
      },
      error => {
        console.log(error);
      });
}

}
updatePublishedtrue(listerec, index) {
  if(window.confirm('Confirmer Choix')) {
   const data={
      published : this.listerec.published=true
    }
  this.reccrud.update(listerec.id, data)
    .subscribe(
      response => {
        this.toastr.success('Réclamation accepté avec succès','Merci')
        this.listerec.splice(index, 1);
        console.log(response);
        this.retrieveListrec();
      },
      error => {
        this.toastr.error('erreur','Merci')
        console.log(error);
      });
}
}
updateraptrue(listerec, index) {
  if(window.confirm('Confirmer Choix')) {
   const data={
      rap : this.listerec.rap=true
    }
  this.reccrud.update(listerec.id, data)
    .subscribe(
      response => {
        this.toastr.success('Réclamation ajoutée au rapport avec succès','Merci')
        this.listerec.splice(index, 1);
        console.log(response);
        this.retrieveListrec();
      },
      error => {
        this.toastr.error('erreur','Merci')
        console.log(error);
      });
}
}
}
