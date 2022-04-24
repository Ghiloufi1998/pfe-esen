import { Component, OnInit } from '@angular/core';
import {ReccrudService} from '../../_services/reccrud.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-showlrecnow',
  templateUrl: './showlrecnow.component.html',
  styleUrls: ['./showlrecnow.component.scss']
})
export class ShowlrecnowComponent implements OnInit {
  listerec:any =[];
  constructor(private reccrud: ReccrudService,private router: Router,private toastr: ToastrService) { }

  ngOnInit() {
    this.retrieveListrec();

  }
  retrieveListrec(){
    this.reccrud.findByPublished().subscribe(
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
updateRaptrue(listerec, index) {
  if(window.confirm('Confirmer Choix')) {
   const data={
      rap : this.listerec.rap=true
    }
  this.reccrud.update(listerec.id, data)
    .subscribe(
      response => {
        this.toastr.success('Réclamation ajouté au rapport avec succès','Merci')
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
