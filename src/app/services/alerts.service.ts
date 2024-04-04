import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class AlertsService {
  constructor(private snackBar: MatSnackBar) {}

  showMessage(msg: string, typeClass: string, timer: number = 3): void {
    timer *= 1000;
    this.snackBar.open(msg, '', {
      duration: timer,
      panelClass: [typeClass],
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }
}
