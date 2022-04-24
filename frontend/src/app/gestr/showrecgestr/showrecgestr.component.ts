import { Component, OnInit } from '@angular/core';
import { ReccrudService } from '../../_services/reccrud.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {TokenStorageService} from '../../_services/token-storage.service';
@Component({
  selector: 'app-showrecgestr',
  templateUrl: './showrecgestr.component.html',
  styleUrls: ['./showrecgestr.component.scss']
})
export class ShowrecgestrComponent implements OnInit {
  listerec:any =[];
  idbur: string;
  constructor(private reccrud: ReccrudService,private router: Router,private toastr: ToastrService, private tokenStorage :TokenStorageService) { }

  ngOnInit() {
    const user = this.tokenStorage.getUser();
    this.idbur = user.idbur;
    this.retrieveListrec();

  }
  retrieveListrec(){
    this.reccrud.findByidbur(this.idbur).subscribe(
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
}
