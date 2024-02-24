import {
  BadRequestException,
  CallHandler,
  ExecutionContext,
  Injectable,
  InternalServerErrorException,
  NestInterceptor,
  NotFoundException,
  Logger,
  UnauthorizedException,
  ForbiddenException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements NestInterceptor {
  private readonly logger = new Logger();

  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    return next.handle().pipe(
      catchError((err) => {
        if (err instanceof NotFoundException) {
          return throwError(() => new NotFoundException(err.message));
        }

        if (err instanceof BadRequestException) {
          return throwError(() => new BadRequestException(err.message));
        }

        if (err instanceof UnauthorizedException) {
          return throwError(() => new UnauthorizedException(err.message));
        }

        if (err instanceof ForbiddenException) {
          return throwError(() => new ForbiddenException(err.message));
        }

        if (err instanceof UnprocessableEntityException) {
          return throwError(() => new UnprocessableEntityException(err.message));
        }

        // log the internal server error
        this.logger.log(err.stack);
        return throwError(() => new InternalServerErrorException(err.message));
      }),
    );
  }
}
