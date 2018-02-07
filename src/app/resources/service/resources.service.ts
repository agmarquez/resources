import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { CharacterDataWrapper } from '../bean/character';
import { Service } from './service';
import { environment } from '../../../environments/environment';

const path = '/characters';
const param_search = 'nameStartsWith';
const param_order = 'orderBy';

@Injectable()
export class ResourcesService extends Service {

  constructor(private http: HttpClient) {
    super();
  }

  getResources(filter: string, orderField: string, orderDir: string): Observable<CharacterDataWrapper> {
    return this.http.get<CharacterDataWrapper>(environment.api_url + path + '?' + param_search + '=' + filter
      + '&' + param_order + '=' + (orderDir === 'asc' ? '' : '-') + orderField + '&' + this.getParamsAuthentication());
  }
}

