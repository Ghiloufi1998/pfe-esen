import { Component, OnInit } from '@angular/core';
import { ReccrudService } from '../../_services/reccrud.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-showlrec',
  templateUrl: './showlrec.component.html',
  styleUrls: ['./showlrec.component.scss']
})
export class ShowlrecComponent implements OnInit {
  listerec:any =[];
  constructor(private reccrud: ReccrudService,private router: Router,private toastr: ToastrService) { }

  ngOnInit() {
    this.retrieveListrec();

  }
  retrieveListrec(){
    this.reccrud.getAll().subscribe(
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
updateRapporttrue(listerec, index) {
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
updateReparatrue(listerec, index) {
  if(window.confirm('Confirmer Choix')) {
   const data={
      repara : this.listerec.repara=true
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
updateMethodesupp(listerec, index) {
  if(window.confirm('Confirmer Choix')) {
   const data={
      methode : this.listerec.methode=''
    }
  this.reccrud.update(listerec.id, data)
    .subscribe(
      response => {
        this.toastr.success('Methode supprimé avec succès','Merci')
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
updateetattrue(listerec, index) {
  if(window.confirm('Confirmer Choix')) {
   const data={
      etat : this.listerec.etat=true
    }
  this.reccrud.update(listerec.id, data)
    .subscribe(
      response => {
        this.toastr.success('Etat modifié avec succès','Merci')
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
updateetatfalse(listerec, index) {
  if(window.confirm('Confirmer Choix')) {
   const data={
      etat : this.listerec.etat=false
    }
  this.reccrud.update(listerec.id, data)
    .subscribe(
      response => {
        this.toastr.success('Etat modifié avec succès','Merci')
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
