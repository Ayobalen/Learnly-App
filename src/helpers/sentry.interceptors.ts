import {
  ExecutionContext,
  Injectable,
  NestInterceptor,
  CallHandler,
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import * as Sentry from '@sentry/core';
import { SentryException } from './sentry.exceptions';
import { AxiosError } from 'axios';

@Injectable()
export class SentryInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    const payload = request.body;
    const routePath = request.route.path;
    const routeParams = context.getArgs()[0].params;

    return next.handle().pipe(
      catchError((exception) => {
        Sentry.withScope((scope) => {
          if (user) {
            scope.setUser({ email: user.email });
          }

          if (payload) {
            scope.setContext('Request Payload', { body: JSON.stringify(payload) });
          }

          if (exception instanceof AxiosError) {
            const errorMessage = exception.response.data.message;
            scope.setExtra('axiosErrorMessage', errorMessage);
          }

          scope.setExtra('path', routePath);
          for (const key of Object.keys(routeParams)) {
            scope.setExtra(key, routeParams[key]);
          }
          Sentry.captureException(exception);
        });

        if (
          exception instanceof InternalServerErrorException ||
          exception instanceof SentryException ||
          exception instanceof AxiosError
        ) {
          let message =
            'An unexpected error occurred. Please try again later or contact support if the issue persists.';

          if (exception instanceof SentryException && exception.message) {
            message = exception.message;
          }

          return throwError(() => new BadRequestException(message));
        } else {
          return throwError(() => exception);
        }
      }),
    );
  }
}
