import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SignComponent } from './sign/sign.Component';

@NgModule({
  declarations: [SignComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule, RouterModule],
})
export class AuthModule {}
