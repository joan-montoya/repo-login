import { Component, Input, OnInit } from '@angular/core';
import Swal from 'sweetalert2'
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { RickserviceService } from 'src/app/Services/rickservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Input() personajes: any 
  usuari= Array<any>;
  vals = [0];
  

  constructor(public PersonajesService: RickserviceService) { }

  ngOnInit(): void {
    this.obtenerPersonajes();
  } 

  obtenerPersonajes() {
    
    this.PersonajesService.obtenerPersonajes().then((data: any) =>{
      console.log(data);
      this.personajes=data;
    }).catch((err) =>{
      console.log(err);
    })
    console.log(this.personajes);
  }



}
