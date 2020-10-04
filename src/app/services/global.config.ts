import {HttpHeaders} from '@angular/common/http';

export class GlobalConfig
{
  static url = 'http://localhost:9091/';
  static HttpOptions ={headers: new HttpHeaders({'Content-Type': 'application/json'})};

  static loginInfo ={
    id:null,
    username:null,
    password:null
  };
}
