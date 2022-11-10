import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent implements OnInit {

  @Input() auth: any

  constructor() { }

  ngOnInit(){
    this.authorize();
  }

  authorize() {
    this.auth = localStorage.getItem('log');
    console.log(this.auth)
  }

}
