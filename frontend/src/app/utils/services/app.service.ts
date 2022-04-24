import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from '../../_services/token-storage.service';
@Injectable({
  providedIn: 'root'
})
export class AppService {


  constructor(private router: Router, private tokenStorageService: TokenStorageService) {}

  logout() {
    this.tokenStorageService.signOut();
    this.router.navigate(['/login']);
  }
}
