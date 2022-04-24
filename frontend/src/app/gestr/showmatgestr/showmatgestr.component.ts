import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatcrudService} from '../../_services/matcrud.service';
import {TokenStorageService} from '../../_services/token-storage.service';
@Component({
  selector: 'app-showmatgestr',
  templateUrl: './showmatgestr.component.html',
  styleUrls: ['./showmatgestr.component.scss']
})
export class ShowmatgestrComponent implements OnInit {
  listemat:any =[];
  idbur:string ;
  condition: string;
  constructor(private matcrud : MatcrudService, private router: Router, private tokenstorage:TokenStorageService) { }

  ngOnInit(){
    const user = this.tokenstorage.getUser();
    this.idbur= user.idbur;
    this.condition='idbur='+this.idbur;
    this.retrieveListmat();
  }
  retrieveListmat(){
    this.matcrud.findByIdbur(this.condition).subscribe(
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

}
