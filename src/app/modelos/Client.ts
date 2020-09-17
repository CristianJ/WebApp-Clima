import {Current} from './Current';
import {Daily} from './Daily';

export class Client {
  lat:             number;
  lon:             number;
  timezone:        string;
  timezone_offset: number;
  current:         Current;
  hourly:          Current[];
  daily:           Daily[];



}


