import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatcrudService} from '../../_services/matcrud.service';
@Component({
  selector: 'app-showmat',
  templateUrl: './showmat.component.html',
  styleUrls: ['./showmat.component.scss']
})
export class ShowmatComponent implements OnInit {
  listemat:any =[];

  constructor(private matcrud : MatcrudService, private router: Router) { }

  ngOnInit(){
    this.retrieveListmat();
  }
  retrieveListmat(){
    this.matcrud.getAll().subscribe(
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
