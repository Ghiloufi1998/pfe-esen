import { Component, OnInit } from '@angular/core';
import { ReccrudService } from '../../_services/reccrud.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-showlrecproc',
  templateUrl: './showlrecproc.component.html',
  styleUrls: ['./showlrecproc.component.scss']
})
export class ShowlrecprocComponent implements OnInit {
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
}