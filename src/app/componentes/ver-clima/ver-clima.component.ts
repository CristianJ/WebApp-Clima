import { ModalClimaComponent } from "./../modal-clima/modal-clima.component";
import { Ciudades } from "./../../modelos/Ciudades";
import { ClimaService } from "./../../servicios/clima.service";
import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Paises } from "src/app/modelos/Paises";
import { Client } from "src/app/modelos/Client";
import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: "app-ver-clima",
  templateUrl: "./ver-clima.component.html",
  styleUrls: ["./ver-clima.component.css"],
})
export class VerClimaComponent implements OnInit {
  constructor(private climaService: ClimaService, public dialog: MatDialog) {}

  public paises: Paises[];
  public ciudades: Ciudades[];
  public pais_escogido: string;
  public ciudad_escogida: string;
  public clima_actual: Client;
  public clima_pasado: Client[] = [];
  public defaultValue: string;
  public loading:boolean=false;

  ngOnInit() {
    this.getPaises();
  }

  public getPaises() {
    this.climaService.getPaises().subscribe((paises) => {
      this.paises = paises;
    });
  }

  public pais_select(event) {
    let id = event.value;
    this.defaultValue='x'
    let query = this.paises.filter((x) => x.id == id);
    query.map((ciudad) => {
      this.ciudades = ciudad.ciudades;
      this.pais_escogido = ciudad.sigla;
    });
  }

  public ciudad_select(event) {
    let id = event.value;
    let query2 = this.ciudades.filter((x) => x.id == id);
    query2.map((ciudad) => (this.ciudad_escogida = ciudad.nombre));
    this.datos(this.ciudad_escogida, this.pais_escogido);
  }

  public datos(ciudad, pais) {
    this.climaService.consultar(ciudad, pais).subscribe((response) => {
      console.log(response);
      let lat = response.coord.lat;
      let lng = response.coord.lon;
      this.pronosticoPosterior(lat, lng);
    });
  }

  public pronosticoPosterior(lat: number, lng: number) {
    this.climaService.onecall(lat, lng).subscribe((res) => {
      this.pronosticoAnterior(lat, lng);

      this.clima_actual = res;
    });
  }

  public pronosticoAnterior(lat: number, lng: number) {
    this.clima_pasado = [];
    let fecha = new Date();
    let ms = fecha.getTime();
    let timestamp;
    for (let i = 0; i <= 5; i++) {
      fecha.setTime(ms - i * 86400000);

      timestamp = Math.floor(fecha.getTime() / 1000);

      this.climaService.onecall_back(lat, lng, timestamp).subscribe((x) => {
        this.clima_pasado.push(x);
        this.clima_pasado.sort((a, b) => a.current.dt - b.current.dt);

        if (this.clima_pasado.length == 6) {
          this.clima_pasado.pop();
        }
      });
    }
  }

  public ver_clima(dt: number, accion: string) {
    if (accion == "fechaPasada") {
      this.clima_pasado.filter((x) => {
        if (x.current.dt == dt) {
          this.dialog.open(ModalClimaComponent, { data: x });
        }
      });
    } else if (accion == "fechaFutura") {
      this.clima_actual.daily.map((x) => {
        if (x.dt == dt) {
          this.dialog.open(ModalClimaComponent, { data: x });
        }
      });
    }
  }
}
