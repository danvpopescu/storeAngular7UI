import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	loginForm: FormGroup;
	submitted = false;
	success = false;
	returnUrl: string;
	
	constructor(
		private formBuilder: FormBuilder,
		private router: Router
		) {
	}

	ngOnInit() {
		this.loginForm = this.formBuilder.group({
		username: ['', Validators.required],
		password: ['', Validators.required]
		});		
	}

	onSubmit() {

		this.submitted = true;
		if (this.loginForm.invalid) {
			return;
		}
		
		if (this.loginForm.controls.username.value == 'admin' && this.loginForm.controls.password.value == 'admin'){
			this.returnUrl = '/product';
			//alert('Admin Profile');
		} else if (this.loginForm.controls.username.value == 'user' && this.loginForm.controls.password.value == 'user'){
			this.returnUrl = '/order';
			//alert('User Profile');
		} else {
			this.returnUrl = '/';
			//alert('User or incorect password');
		}			

		this.success = true;
		this.router.navigate([this.returnUrl]);
	}


}
