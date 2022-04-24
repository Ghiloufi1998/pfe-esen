import { Component, OnInit } from '@angular/core';
import {ReccrudService} from '../../_services/reccrud.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-showraprecgestad',
  templateUrl: './showraprecgestad.component.html',
  styleUrls: ['./showraprecgestad.component.scss']
})
export class ShowraprecgestadComponent implements OnInit {
  listerec:any =[];
  region:string ;
  condition: string;
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

}
