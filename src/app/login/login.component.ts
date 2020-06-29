import { AuthenticationService } from '../_services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  
  login: FormGroup;
  username = new FormControl();
  password = new FormControl();
  snackbar: any;

  returnUrl: string;


  constructor(
     private router: Router,
     private fb: FormBuilder,
     private authenticationService: AuthenticationService,
     private route: ActivatedRoute
     ) {
      if (this.authenticationService.currentUserValue) { 
        this.router.navigate(['/']);
    }
      }
  ngOnInit() {
    this.login = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
  get f() { return this.login.controls; }
  log() {
    debugger;
    this.authenticationService.login(this.f.username.value, this.f.password.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.router.navigate(['/home']);
                });
    
  }


  forget(): void {
    this .router.navigate(['/forgot']);
  }


}
