import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiRoutes } from '../../models/ApiRoutes';
import { AppRoutes } from '../../models/AppRoutes';
import { LocallyStoredItemsKeys } from '../../models/LocallyStoredItemsKeys';
import { AuthReq } from '../../models/authReq';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = environment.AuthApiUrl;
  private apiRoute = ApiRoutes.Auth.signIn;
  jwtHelper = new JwtHelperService();
  isLoggedIn = new BehaviorSubject<boolean>(this.isTokenAvailable());

  constructor(private http: HttpClient, private router: Router) {}

  sign(authReq: AuthReq, isSignUp: boolean): Observable<any> {
    if (isSignUp) {
      this.apiRoute = ApiRoutes.Auth.signUp;
    }

    return this.http.post(this.apiUrl + this.apiRoute, authReq).pipe(
      tap((res: any) => {
        // Save access token on local storage
        localStorage.setItem(LocallyStoredItemsKeys.JWT, res.access_token);
        // Set authenticated user flag
        this.setIsLoggedIn(true);
      })
    );
  }

  async logout(): Promise<any> {
    // Clear JWT from localstorage
    await localStorage.clear();
    // Update logged in status
    this.setIsLoggedIn(false);
    // Navigate user back to signIn page
    await this.router.navigate([AppRoutes.Auth.sign.full]);
  }
  private isTokenAvailable(): boolean {
    return !!localStorage.getItem(LocallyStoredItemsKeys.JWT);
  }

  setIsLoggedIn(isLoggedIn: boolean): void {
    this.isLoggedIn.next(isLoggedIn);
  }

  getIsLoggedIn(): BehaviorSubject<boolean> {
    return this.isLoggedIn;
  }
}
