import { Component, OnInit } from '@angular/core';
import {AgcrudService } from '../../_services/agcrud.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-showag',
  templateUrl: './showag.component.html',
  styleUrls: ['./showag.component.scss']
})
export class ShowagComponent implements OnInit {
  listeag:any =[];

  constructor(private agcrud : AgcrudService, private router: Router) { }

  ngOnInit(){
    this.retrieveListag();
  }
  retrieveListag(){
    this.agcrud.getAll().subscribe(
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
