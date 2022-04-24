import { Component, OnInit } from '@angular/core';
import {AgcrudService } from '../../_services/agcrud.service'
import { Router } from '@angular/router';
import {TokenStorageService} from '../../_services/token-storage.service';
@Component({
  selector: 'app-showaggestad',
  templateUrl: './showaggestad.component.html',
  styleUrls: ['./showaggestad.component.scss']
})
export class ShowaggestadComponent implements OnInit {
  listeag:any =[];
  condition: string;
  region: string;
  constructor(private tokenStorage : TokenStorageService, private agcrud : AgcrudService, private router: Router) { }

  ngOnInit(){
    const user = this.tokenStorage.getUser();
    this.region= user.region;
    this.retrieveListag();
  }
  retrieveListag(){
    this.agcrud.findByregion(this.region).subscribe(
      data => {
        this.listeag = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
}

refreshList() {
  this.retrieveListag();

}

removeAllAg() {
  this.agcrud.deleteAll()
    .subscribe(
      response => {
        console.log(response);
        this.retrieveListag();
      },
      error => {
        console.log(error);
      });
}
deleteAg(listeag, index) {
  if(window.confirm('Confirmer Choix')) {
  this.agcrud.delete(listeag.id)
    .subscribe(
      response => {
        this.listeag.splice(index, 1)
        console.log(response);

      },
      error => {
        console.log(error);
      });
}
}

}
