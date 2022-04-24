import { Component, OnInit } from '@angular/core';
import {FourcrudService } from '../../_services/fourcrud.service';
import { Router } from '@angular/router';
import {TokenStorageService} from '../../_services/token-storage.service'
@Component({
  selector: 'app-showfour',
  templateUrl: './showfour.component.html',
  styleUrls: ['./showfour.component.scss']
})
export class ShowfourComponent implements OnInit {
  listefour:any =[];

  constructor(private fourcrud : FourcrudService, private router: Router, tokenStorage:TokenStorageService) { }

  ngOnInit(){
    this.retrieveListfour();
  }
  retrieveListfour(){
    this.fourcrud.getAll().subscribe(
      data => {
        this.listefour = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
}

refreshList() {
  this.retrieveListfour();

}

removeAllfour() {
  this.fourcrud.deleteAll()
    .subscribe(
      response => {
        console.log(response);
        this.retrieveListfour();
      },
      error => {
        console.log(error);
      });
}
deleteFour(listefour, index) {
  if(window.confirm('Confirmer Choix')) {
  this.fourcrud.delete(listefour.id)
    .subscribe(
      response => {
        this.listefour.splice(index, 1)
        console.log(response);

      },
      error => {
        console.log(error);
      });
}
}

}
