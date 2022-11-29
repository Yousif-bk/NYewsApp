import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AppRoutes } from 'src/app/shared/models/AppRoutes';
import { AuthReq } from 'src/app/shared/models/authReq';
import { AuthService } from 'src/app/shared/services/auth/auth.service';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.scss'],
})
export class SignComponent implements OnInit {
  // Global UI State
  uiState = {
    isSignUp: false,
    isLoading: false,
    isSubmitting: false,
    errorAlert: false,
    errorMessage: '',
  };

  /* Forms */
  signInFormGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initForms();
  }

  initForms() {
    // Construct signIn form
    this.signInFormGroup = this.formBuilder.group({
      emailCtrl: [
        null,
        Validators.compose([
          Validators.required,
          Validators.pattern(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/),
        ]),
      ],
      passwordCtrl: [null, Validators.required],
    });
  }

  // Form Controls
  get f(): { [key: string]: AbstractControl } {
    return this.signInFormGroup.controls;
  }

  signIn(): void {
    // Set submission state to true (used for form validation)
    this.uiState.isSubmitting = true;
    // Display loader
    this.uiState.isLoading = true;
    // Validate form
    if (this.signInFormGroup.invalid) {
      this.uiState.isLoading = false;
      return;
    }

    // Construct signIn data
    let authReq: AuthReq = {
      email: this.signInFormGroup.get('emailCtrl')?.value,
      password: this.signInFormGroup.get('passwordCtrl')?.value,
    };
    // Send signIn request
    this.authService.sign(authReq, this.uiState.isSignUp).subscribe({
      next: (res) => {
        this.uiState.isLoading = false;
        this.uiState.isSubmitting = false;
        // Navigate to home
        this.router.navigate([AppRoutes.news.full]);
      },
      error: (err) => {
        // Stop the loader
        this.uiState.isLoading = false;
        this.uiState.isSubmitting = false;
        // Display alert
        this.uiState.errorAlert = true;
        this.uiState.errorMessage = err.error.message;
        // Hide after timeout
        setTimeout(() => (this.uiState.errorAlert = false), 5000);
      },
    });
  }

  showSignUpForm() {
    return (this.uiState.isSignUp = !this.uiState.isSignUp);
  }


}
