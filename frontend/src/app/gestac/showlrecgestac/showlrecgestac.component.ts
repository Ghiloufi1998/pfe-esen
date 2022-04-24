import { Component, OnInit } from '@angular/core';
import { ReccrudService } from '../../_services/reccrud.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-showlrecgestac',
  templateUrl: './showlrecgestac.component.html',
  styleUrls: ['./showlrecgestac.component.scss']
})
export class ShowlrecgestacComponent implements OnInit {
  listerec:any =[];
  condition:String;

  constructor(private reccrud: ReccrudService,private router: Router,private toastr: ToastrService) { }

  ngOnInit() {

  
    this.retrieveListrec();
  }
  retrieveListrec(){
    this.reccrud.findByRap().subscribe(
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
updateMethodesupp(listerec, index) {
  if(window.confirm('Confirmer Choix')) {
    const data={
       methode : this.listerec.methode=''
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

updatePublishedfalse(listerec, index) {
  if(window.confirm('Confirmer Choix')) {
   const data={
      published : this.listerec.published=false
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

}


