import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { SeriesDataWrapper } from '../bean/series';
import { environment } from '../../../environments/environment';
import { Service } from './service';

const pre_path = '/characters';
const post_path = '/series';
const param_search = 'titleStartsWith';
const param_order = 'orderBy';

@Injectable()
export class SeriesService extends Service {

  constructor(private http: HttpClient) {
    super();
  }

  getSeries(id: Number, filter: string, orderField: string, orderDir: string): Observable<SeriesDataWrapper> {
    return this.http.get<SeriesDataWrapper>(environment.api_url + pre_path + '/' + id + post_path + '?' + param_search + '=' + filter
      + '&' + param_order + '=' + (orderDir === 'asc' ? '' : '-') + orderField + '&' + this.getParamsAuthentication());
  }
}
