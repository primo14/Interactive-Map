import { Component, inject, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

interface DialogData {
  countryC: string;
  countryN: string;
  capital: string;
  Longitude: string;
  Latitude: string;
  region: string;
}


@Component({
  selector: 'app-info-component',
  standalone: true,
  template:"info-component.component.html",
  styleUrl: './info-component.component.scss'
})

export class InfoComponent implements OnInit {
  input:any;
  constructor(@Inject (MAT_DIALOG_DATA) public data:DialogData,public dialogRef: MatDialogRef<InfoComponent>) { }

ngOnInit(): void {
  this.input = this.data;
}
}
