import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

export function handleError(error: HttpErrorResponse) {
  if (error.status === 0) {
    console.error('Se ha producido un error, revisa tu conexión a internet e inténtalo más tarde');
  } else {
    console.error(`Se ha producido un error ${error.status} en el servidor`);
  }
  return throwError('Ha ocurrido algo malo; por favor, inténtalo más tarde');
}
