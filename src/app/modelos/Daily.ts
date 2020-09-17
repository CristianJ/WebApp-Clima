import {Weather} from './Weather';
import {FeelsLike} from './FeelsLike';
import {Temp} from './Temp';

export class Daily {
  dt:         number;
  sunrise:    number;
  sunset:     number;
  temp:       Temp;
  feels_like: FeelsLike;
  pressure:   number;
  humidity:   number;
  dew_point:  number;
  wind_speed: number;
  wind_deg:   number;
  weather:    Weather[];
  clouds:     number;
  pop:        number;
  uvi:        number;
}
