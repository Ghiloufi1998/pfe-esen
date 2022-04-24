import {
  Component,
  OnInit,
  AfterViewInit,
  Renderer2,
  ElementRef,
  ViewChild,
  Output,
  EventEmitter
} from '@angular/core';
import { Router}  from '@angular/router';

import { TokenStorageService } from '../../_services/token-storage.service';

import { AppService } from 'src/app/utils/services/app.service';

@Component({
  selector: 'app-menu-sidebar',
  templateUrl: './menu-sidebar.component.html',
  styleUrls: ['./menu-sidebar.component.scss']
})
export class MenuSidebarComponent implements OnInit, AfterViewInit {
  email: string;
  username: string;
  Bureau: string;
  region:string;

  roles: string[] = [];
  @ViewChild('mainSidebar', { static: false }) mainSidebar;
  @Output() mainSidebarHeight: EventEmitter<any> = new EventEmitter<any>();
  constructor(public appService: AppService,private router: Router,private tokenStorage: TokenStorageService,) {}

  ngOnInit() {    const user = this.tokenStorage.getUser();

    this.username = user.username;
    this.email = user.email;
    this.Bureau = user.Bureau;
    this.region = user.region;
  }


  ngAfterViewInit() {
    this.mainSidebarHeight.emit(this.mainSidebar.nativeElement.offsetHeight);
  }
  Panel(){
    this.roles = this.tokenStorage.getUser().roles;
    this.router.navigate(['/'+this.roles]);
  }
}
