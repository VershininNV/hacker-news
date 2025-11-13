import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AppRoutes } from '@core/constants';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorInterceptor implements HttpInterceptor {
  private router = inject(Router)


 intercept(req: HttpRequest<any>, handler: HttpHandler): Observable<HttpEvent<any>> {
    return handler.handle(req).pipe(
                catchError((error: HttpErrorResponse) => {
                    switch (error.status.toString()) {
                      case '401': {
                        this.router.navigateByUrl(AppRoutes.NotAuthorized)
                        break
                      }
                      case '404': {
                        this.router.navigateByUrl(AppRoutes.NotFound)
                        break
                      }
                      default: {
                        this.router.navigateByUrl(AppRoutes.ServerError)
                        break
                      }
                    } 
                    return throwError(`Error: ${error.statusText}`)
                })
            )

  }
}
