import { Component, Input } from '@angular/core';
import { UsuariosService } from './Services/usuarios.service'
import { LoginComponent } from './Components/login/login.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'login';
  @Input() auth: any
  @Input() rol: any 
  @Input() usuario: any 

  constructor() {
    this.auth = localStorage.getItem('log');
   }

   ngOnInit(){
    this.rol = localStorage.getItem('rol');
    this.usuario = localStorage.getItem('nombre');
  }


  salir() {
    localStorage.setItem('log', 'false');
    localStorage.setItem('rol', '');
    localStorage.setItem('nombre', '');
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'cerraste secion',
      showConfirmButton: false,
      timer: 1500
    })
    location.reload();
  }


}

