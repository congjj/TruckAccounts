import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NZ_I18N, zh_CN} from 'ng-zorro-antd/i18n';
import {registerLocaleData} from '@angular/common';
import zh from '@angular/common/locales/zh';
import {GlobalConfig} from './services/global.config';


registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule
{
  constructor(private http: HttpClient)
  {
    ///从配置文件中读取url地址赋值给 ClobalConfig.url
    const jsonFile = "assets/config/conf.json";
    console.log(jsonFile);
    this.http.get(jsonFile).subscribe((data:any)=>{
      let url :string=data.apiServer.url;
      console.log(url);
      if (url.endsWith('/'))
      {
        GlobalConfig.url=url;
      }
      else
      {
        GlobalConfig.url=url+'/';
      }
      console.log(GlobalConfig.url);
    });
  }

}
