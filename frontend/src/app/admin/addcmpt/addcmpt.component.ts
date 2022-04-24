import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../_services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router}  from '@angular/router';
import { AgcrudService} from '../../_services/agcrud.service';
@Component({
  selector: 'app-addcmpt',
  templateUrl: './addcmpt.component.html',
  styleUrls: ['./addcmpt.component.scss']
})
export class AddcmptComponent implements OnInit {
  public registerForm: FormGroup;
  Bureaux: any =['Administration Centrale', 'Administration Régionale', 'Agence Régionale']
  regions: any = ['Mannouba', 'Tunis', 'Ariana', 'Nabeul', 'Gabes','Kebili','Medenine','Kasserine','Gafsa','Sfax','Sidi Bouzid','Kairouan','Tozeur','Kef','Siliana','Siliana','Bizerte','	Beja','Jendouba','Mahdia','Zaghouan','Sousse','Monastir','Ben Arous']

  selectedregion= this.regions[1];
  idbur: any= [];

  constructor( private agcrud : AgcrudService ,private router: Router,private renderer: Renderer2, private authService: AuthService, private toastr: ToastrService) {}


  onChange(newValue){
    this.selectedregion= newValue;
    console.log(newValue);

    this.agcrud.findByregion(this.selectedregion).subscribe(
      data =>{

          this.idbur = data;
          console.log(data);

    })

  }

  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  roles: Array<any>;
  ngOnInit() {


        this.renderer.addClass(document.body, 'register-page');

    this.registerForm = new FormGroup({
      username: new FormControl("", Validators.required,),
      password: new FormControl("", Validators.required),
      email: new FormControl("", [
        Validators.required,
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
      roles: new FormControl("", Validators.required),
      nom: new FormControl("", Validators.required),
      cin: new FormControl("", Validators.required),
      prenom: new FormControl("", Validators.required),
      adresse: new FormControl("", Validators.required),
      Bureau: new FormControl("", Validators.required),
      region: new FormControl("", Validators.required),
      idbur: new FormControl(""),
    });
  }

  SignUp(){
    this.authService.register(this.registerForm.value).subscribe(
      data => {

        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.toastr.success('Utilisateur ajouté', 'merci');
        this.router.navigate(['/ADMIN']);
      },
      err => {
        this.toastr.error('Erreur données!', 'Réssayer!');

        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
}
