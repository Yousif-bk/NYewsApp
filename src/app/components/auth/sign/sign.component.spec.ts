import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthReq } from 'src/app/shared/models/authReq';
import { UnitTestName } from 'src/app/shared/models/UnitTestName';
import { AuthService } from 'src/app/shared/services/auth/auth.service';

import { SignComponent } from './sign.Component';

describe(UnitTestName.Auth.componentName, () => {
  let component: SignComponent;
  let fixture: ComponentFixture<SignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignComponent],
      imports:[
        HttpClientTestingModule,
        ReactiveFormsModule
      ],
      providers:[
        AuthService
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(SignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it(UnitTestName.Auth.create, () => {
    expect(component).toBeTruthy();
  });

  it(UnitTestName.Auth.isFromEmpty, () => {
    expect(component.signInFormGroup.valid).toBeFalsy();
  });

  it(UnitTestName.Auth.submitingForm, () => {
    expect(component.signInFormGroup.valid).toBeFalsy();
    component.f['emailCtrl'].setValue("test@test.com")
    component.f['passwordCtrl'].setValue("123456789")
    expect(component.signInFormGroup.valid).toBeTruthy();

    let authReq: AuthReq = {
      email:"test@test.com",
      password: "123456789"
    }

    // Trigger the login function
    component.sign();

    // Now we can check to make sure the emitted value is correct
    expect(authReq.email).toBe("test@test.com");
    expect(authReq.password).toBe("123456789");
  });
});
