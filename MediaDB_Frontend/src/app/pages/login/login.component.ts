import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public myForm: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private userservice: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.myForm = this._fb.group({
      name: ['', [<any>Validators.required, <any>Validators.minLength(5)]],
      password: ['', [<any>Validators.required, <any>Validators.minLength(5)]],
    });
  }


  login (value, valid) {
    if (valid) {

      this.userservice.getUser(value).subscribe(
        (data) => {
          if (data !== null) {
            this.router.navigate(['/search-anime']);
          }
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
}
