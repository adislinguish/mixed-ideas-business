import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';

export const httpInterceptor: HttpInterceptorFn = (req, next) => {

  const authToken = '';//inject(AuthService).getAuthToken();
  
  const clonedReq = req.clone({
    headers: req.headers.append('X-Authentication-Token', authToken),
  });

  return next(clonedReq).pipe(
    catchError((error: HttpErrorResponse) => {
      console.error('HTTP Error:', error);
      return throwError(() => error);
    })
  );
};
