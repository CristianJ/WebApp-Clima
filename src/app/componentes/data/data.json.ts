import { Paises } from "./../../modelos/Paises";

export const PAISES: Paises[] = [
  {
    id: 1,
    nombre: "Argentina",
    sigla: "ARG",
    ciudades:[
      {
        id: 1,
        nombre: "Buenos Aires"
      },
      {
        id: 2,
        nombre: "Mendoza"
      },
      {
        id: 3,
        nombre: "Rosario"
      }
    ]
  },
  {
    id: 2,
    nombre: "Brasil",
    sigla: "BRA",
    ciudades:[
      {
        id: 1,
        nombre: "Brasilia"
      },
      {
        id: 2,
        nombre: "Rio de Janeiro"
      },
      {
        id: 3,
        nombre: "Sao Paulo"
      }
    ]
  },

  {
    id: 3,
    nombre: "Ecuador",
    sigla: "EC",
    ciudades:[
      {
        id: 1,
        nombre: "Quito"
      },
      {
        id: 2,
        nombre: "Guayaquil"
      },
      {
        id: 3,
        nombre: "Cuenca"
      }
    ]
  },

  {
    id: 4,
    nombre: "Mexico",
    sigla: "MX",
    ciudades:[
      {
        id: 1,
        nombre: "Acapulco"
      },
      {
        id: 2,
        nombre: "Cancun"
      },
      {
        id: 3,
        nombre: "Guadalajara"
      }
    ]
  },
];
