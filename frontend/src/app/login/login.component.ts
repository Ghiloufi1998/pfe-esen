import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';

import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Router}  from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  rolelogin :string;
  welcome : "";
  public loginForm: FormGroup;
  constructor( private router: Router,
    private authService: AuthService, private tokenStorage: TokenStorageService,
    private toastr: ToastrService
  ) {}

ngOnInit() {
  this.loginForm = new FormGroup({
    password: new FormControl(null, Validators.required),
    email: new FormControl(null, Validators.required),


  });

    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }

  logIn() {
    this.authService.login(this.loginForm.value).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        this.rolelogin=this.roles.toString();
        switch ((this.roles).toString()) {
          case "GESTR":{
            this.rolelogin="Gestionnaire Agence Régionale";
              break;
          }
          case "GESTAC": {
            this.rolelogin="Gestionnaire Administration Centrale";
              break;
          }
          case "GESTAD": {
            this.rolelogin="Gestionnaire Administration Régionale";
            break;

        }
        case "ADMIN": {
          this.rolelogin="Administrateur";
          break;

      }

        }


        this.toastr.success('Authentification avec succès', "Bienvenue "+ this.rolelogin);
        this.router.navigate(['/']);
      },
      err => {
        this.toastr.error('Erreur données! ', 'Réssayer!');
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }


}
