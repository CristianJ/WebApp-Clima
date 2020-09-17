import { PAISES } from "./../componentes/data/data.json";

import { environment } from "./../../environments/environment";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { Paises } from "../modelos/Paises";

@Injectable({
  providedIn: "root",
})
export class ClimaService {
  constructor(private http: HttpClient) {}

  private apiKey = "edfefa55f10b73d84b92a9959c6855b4";
  private url;

  public consultar(ciudad: string, pais: string) {
    this.url = `${environment.url}/weather?q=${ciudad},${pais}&appid=${this.apiKey}`;

    return this.http.get<any>(this.url);
  }

   //Endpoint para el pronostico de los 7 dias siguientes
  public onecall(lat: number, lng: number) {
    this.url = `${environment.url}/onecall?lat=${lat}&lon=${lng}&exclude=minutely,hourly&units=metric&appid=${this.apiKey}`;
    return this.http.get<any>(this.url);
  }

  //Endpoint para el pronostico de los 5 dias anteriores
  public onecall_back(lat: number, lng: number,timestamp:number) {



      this.url=`${environment.url}/onecall/timemachine?lat=${lat}&lon=${lng}&dt=${timestamp}&units=metric&appid=${this.apiKey}`

      return this.http.get<any>(this.url);




  }

  public getPaises(): Observable<Paises[]> {
    return of(PAISES);
  }
}
