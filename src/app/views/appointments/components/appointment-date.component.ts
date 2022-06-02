import { DayWithSlots } from 'src/app/models/day-with-slots';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'ac-appointment-date',
  template: `
    <div class="w-full p-4">
      <mat-form-field class="w-full" appearance="fill">
        <mat-label>Scegli una data</mat-label>
        <input
          matInput
          [matDatepickerFilter]="bookableFilter"
          [matDatepicker]="picker"
          (dateChange)="selectDate($event)"
        />
        <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
        <mat-datepicker #picker></mat-datepicker>
      </mat-form-field>
      <mat-list *ngFor="let bookableHour of bookableHours">
        <h3>Orari disponibili</h3>
        <mat-list-item
          class="hover:bg-gray-100"
          *ngFor="let bookable of bookableHour"
          (click)="openDialog()"
        >
          <mat-icon
            class="text-gray-400 mr-4"
            aria-hidden="false"
            aria-label="schedule icon"
            >schedule</mat-icon
          >
          {{ bookable }}
        </mat-list-item>
      </mat-list>
    </div>
  `,
  styles: [],
})
export class AppointmentDateComponent implements OnInit {
  selectDate(date: MatDatepickerInputEvent<Date>) {
    this.selectedDay = this.dateToString(date.value!);
    return (this.bookableHours = this.bookableSlots
      .filter((slot) => slot.day == this.selectedDay)
      .map((hours) => hours.slots));
  }

  bookableDays: any[] = [];
  bookableHours: any[] = [];
  selectedDay: any = '';

  bookableSlots: DayWithSlots[] = [
    {
      day: '06/06/2022',
      slots: [10, 11, 12],
    },
    {
      day: '06/08/2022',
      slots: [14, 15, 16],
    },
    {
      day: '06/10/2022',
      slots: [16, 17, 18],
    },
  ];

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openDialog() {
    this.dialog.open(DialogDataExampleDialog, {
      data: {
        selectedDay: this.selectedDay,
      },
    });
  }

  bookableFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getTime();
    this.bookableDays = this.bookableSlots.map((slot) => new Date(slot.day));
    return this.bookableDays.find((slot) => slot.getTime() == day);
  };

  dateToString(d: Date) {
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    let year = d.getFullYear();

    if (month.length < 2) {
      month = '0' + month;
    }
    if (day.length < 2) {
      day = '0' + day;
    }
    return [month, day, year].join('/');
  }
}

@Component({
  selector: 'dialog-data-example-dialog',
  template: `
    <div mat-dialog-title> Confermi l'appuntamento? </div>
    <div mat-dialog-content>
      {{msg}}
    </div>
    <div mat-dialog-actions align="end">
      <button mat-raised-button mat-dialog-close color="warn">Annulla</button>
      <button mat-raised-button cdkFocusInitial color="primary">Conferma</button>
    </div>
  `,
})
export class DialogDataExampleDialog {

  msg: string = `L'appuntamento è fissato per il giorno ${this.data.selectedDay} alle ${11}`;

  constructor(@Inject(MAT_DIALOG_DATA) public data: AppointmentDateComponent) {}
}
