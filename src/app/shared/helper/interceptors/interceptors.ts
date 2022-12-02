import { HttpInterceptor, HttpEvent, HttpRequest, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LocallyStoredItemsKeys } from '../../models/LocallyStoredItemsKeys';



@Injectable()
export class JwtInterceptors implements HttpInterceptor {

   constructor() { }

   intercept(request: HttpRequest<any>, handler: HttpHandler): Observable<HttpEvent<any>> {

      // Add Authorization header with the Jwt to all request if it is available
      const Jwt = localStorage.getItem(LocallyStoredItemsKeys.JWT);
      if (Jwt) {
         request = request.clone({
            setHeaders: {
              // Comment cuz when I send in header of request give me error Not allow from api
              // Authorization: 'Bearer ' + Jwt
            }
         });
      }

      // Handle the request and move into next interceptors if available
      return handler.handle(request);

   }
}
