import {HttpClient, HttpHeaders} from '@angular/common/http';

export class GlobalConfig
{
  static url = '';
  static HttpOptions ={headers: new HttpHeaders({'Content-Type': 'application/json'})};

  constructor(private http: HttpClient) {}



  static getHttpOptions(param:any)
  {
    return  {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
      params:param
    }
  }

  static loginInfo ={
    id:null,
    username:null,
    password:null
  };
}


