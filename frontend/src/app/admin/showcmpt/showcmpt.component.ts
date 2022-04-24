import { Component, OnInit } from '@angular/core';
import {UsercrudService } from '../../_services/usercrud.service'
import { Router } from '@angular/router';
import {TokenStorageService} from '../../_services/token-storage.service'
@Component({
  selector: 'app-showcmpt',
  templateUrl: './showcmpt.component.html',
  styleUrls: ['./showcmpt.component.scss']
})
export class ShowcmptComponent implements OnInit {
  listecmpt:any =[];

  constructor(private usercrud : UsercrudService, private router: Router ) { }

  ngOnInit(){
    this.retrieveListcmpt();
  }
  retrieveListcmpt(){
    this.usercrud.getAll().subscribe(
      data => {
        this.listecmpt = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
}

refreshList() {
  this.retrieveListcmpt();

}

removeAllusers() {
  this.usercrud.deleteAll()
    .subscribe(
      response => {
        console.log(response);
        this.retrieveListcmpt();
      },
      error => {
        console.log(error);
      });
}
deleteUser(listecmpt, index) {
  if(window.confirm('Confirmer Choix')) {
  this.usercrud.delete(listecmpt._id)
    .subscribe(
      response => {
        this.listecmpt.splice(index, 1)
        console.log(response);

      },
      error => {
        console.log(error);
      });
}
}

}
