import { Component, OnInit, Renderer2, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../_services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit, OnDestroy {
  public registerForm: FormGroup;
  constructor(private renderer: Renderer2, private authService: AuthService, private toastr: ToastrService) {}
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  roles: Array<any>;
  ngOnInit() {
        this.renderer.addClass(document.body, 'register-page');

    this.registerForm = new FormGroup({
      username: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required),
      email: new FormControl("", Validators.required),
      roles: new FormControl("", Validators.required),
      nom: new FormControl("", Validators.required),
      cin: new FormControl("", Validators.required),
      prenom: new FormControl("", Validators.required),
      adresse: new FormControl("", Validators.required),
    });
  }

  SignUp(){
    this.authService.register(this.registerForm.value).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.toastr.success('Utilisateur ajouté', 'merci');
      },
      err => {
        this.toastr.error('Erreur données!', 'Réssayer!');

        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }


  ngOnDestroy() {

  }
}
