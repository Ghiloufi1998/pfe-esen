import {ReccrudService} from '../../_services/reccrud.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Component, ViewChild, ElementRef ,OnInit} from '@angular/core';  
import * as jsPDF from 'jspdf';  
  


@Component({
  selector: 'app-showlrecnowgestac',
  templateUrl: './showlrecnowgestac.component.html',
  styleUrls: ['./showlrecnowgestac.component.scss']
})
export class ShowlrecnowgestacComponent implements OnInit {
  listerec:any =[];
  condition:string;
  region: string;
  constructor(private reccrud: ReccrudService,private router: Router,private toastr: ToastrService) { }

  ngOnInit() {
    this.retrieveListrec();


  }
  retrieveListrec(){
    this.reccrud.findByRepara().subscribe(
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



updateEtatFalse(listerec, index) {
  if(window.confirm('Confirmer Choix')) {
   const data={
      etat : this.listerec.etat=false
    }
  this.reccrud.update(listerec.id, data)
    .subscribe(
      response => {
        this.toastr.success('Réparation annulée avec succès','Merci')
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

updateReparaFalse(listerec, index) {
  if(window.confirm('Confirmer Choix')) {
   const data={
      repara : this.listerec.repara=false
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
@ViewChild('content') content: ElementRef;  
  public SavePDF(): void {  
    let content=this.content.nativeElement;  
    let doc = new jsPDF('landscape','pt');    
    let _elementHandlers =  
    {  
      '#editor':function(element,renderer){  
        return true;  
      }  
    };  
    doc.fromHTML(content.innerHTML,30,15,{  
  
      'width':190,  
      'elementHandlers':_elementHandlers  
    });  
  
    doc.save('test.pdf');  
  }  
}
