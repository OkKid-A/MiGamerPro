import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Roles} from "../../share/roles";
import {Observable} from "rxjs";
import {ApiUrl} from "../../share/api-url";

@Injectable({
  providedIn: 'root'
})
export class ElectorService {

  constructor(private router:Router,
              private http: HttpClient) { }

  public redirectPorTipo(){

  }

  public redirectUser() {
    let rol = localStorage.getItem("permisoActual");
    console.log(rol);

    if (rol === Roles.CAJERO){
      this.router.navigate(['cajero']);
      console.log(rol);
    } else if (rol === Roles.CLIENTE){
      this.router.navigate(['cliente']);
    } else if (rol === Roles.BODEGA){
      this.router.navigate(['bodega']);
    }
  }

  public identificarTipoDeUsuario(rol : string, codigo : string){
    localStorage.setItem("usuarioActual",codigo);
    localStorage.setItem("permisoActual",rol);
  }

  public revisarUsuario():Observable<boolean>{
    const rol = localStorage.getItem("permisoActual")??"";
    const usuario = localStorage.getItem("usuarioActual")??"";
    return this.http.get<boolean>(ApiUrl.API_URL+"usuario?rol="+rol+"&codigo="+usuario);
  }
}
