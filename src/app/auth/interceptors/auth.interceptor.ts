import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor, HttpParams, HttpResponse, HttpErrorResponse,
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    public intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        // const token = 'AIzaSyAG9ee9rHfwYGaVyTNRCug18Igviz7NzyM';
        const token = 'AIzaSyBuhrQSxesvy-yxDey_4W0YW2OW0Jn0ouA';
        // const token = '';
        const modifiedReq = request.clone({
            url: `https://www.googleapis.com/youtube/v3/${request.url}`,
            params: (request.params ? request.params
                : new HttpParams()).append('key', `${token}`),
        });
        return next.handle(modifiedReq)
            .pipe(
            tap(
                (event) => {
                    if (event instanceof HttpResponse) {
                        console.log('Server successful response');
                    }
                },
                (err) => {
                    if (err instanceof HttpErrorResponse) {
                        if (err.status === 401) {
                            console.log('Unauthorized');
                        }
                    }
                },
            ),
        );
    }
}
