import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth/auth.service';

import { SignComponent } from './sign.Component';

describe('SignComponent', () => {
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

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
