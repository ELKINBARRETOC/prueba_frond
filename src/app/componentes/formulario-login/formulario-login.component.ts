import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiciosApiService } from 'src/app/servicios/servicios-api.service';

@Component({
  selector: 'app-formulario-login',
  templateUrl: './formulario-login.component.html',
  styleUrls: ['./formulario-login.component.css']
})
export class FormularioLoginComponent implements OnInit {

  public cargando = false;
  public error_login = false;

  public formulario: FormGroup;

  // Inyectamos los servicios FormBuilder y el sevicio Api creado
  constructor(private fb:FormBuilder, private servicio_api:ServiciosApiService, private router:Router) { 

    this.formulario = this.crearFormulario();
  }

  ngOnInit(): void {
  }


  login(){

    this.cargando = true;

    this.servicio_api.login({}).
    subscribe({

      next: (resp)=>{
        console.log(resp);
        this.cargando = false;
        this.error_login = false;

        this.router.navigate(['/home']);

      },

      error:(e)=>{
        console.log(e.message)
        this.cargando = false;
        this.error_login = true;
        //alert("Error al actualizar el Empleado:"+e);
      }
    });
  }

  // Medodo para crear un formulario en blanco.
  crearFormulario(){

    return this.fb.group({
      //id      :   [{value:'', disabled:this.id!=='nuevo'},[Validators.required]],
      email      :   ['',[Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      contrasena  :   ['',[Validators.required]]
    });
  }

  // Metodo para verificar si hay error en el correo
  get emailInvalido(){
    return (this.formulario.get('email')?.invalid) && (this.formulario.get('email')?.touched)
  }

  // Metodo para verificar si hay error en la contraseña
  get contrasenaInvalido(){
    return (this.formulario.get('contrasena')?.invalid) && (this.formulario.get('contrasena')?.touched)
  }

}
