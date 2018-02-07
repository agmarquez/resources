import { environment } from '../../../environments/environment';

const param_key = 'apikey';
const param_hash = 'hash';

export class Service {

  getParamsAuthentication(): string {
    return param_key + '=' + environment.api_key
      + '&' + param_hash + '=' + environment.api_hash;
  }
}
