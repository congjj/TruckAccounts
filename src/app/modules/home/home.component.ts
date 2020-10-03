import {Component, OnInit} from '@angular/core';
import {NzMenuItemDirective, NzSubMenuComponent} from 'ng-zorro-antd';
import {ElementSchemaRegistry} from '@angular/compiler';
import {NavigationExtras, Router} from '@angular/router';
import {GlobalConfig} from '../../services/global.config';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit
{
  isCollapsed = false;
  loginUser: string;
  breadcrumbitem: any[] = [];

  constructor(public router: Router)
  {
  }

  ngOnInit(): void
  {
    console.log(GlobalConfig.loginInfo);
    if (GlobalConfig.loginInfo.username ==null || GlobalConfig.loginInfo .username .trim().length==0)
    {
      this.router.navigate(['/login']);
    }
    else
    {
      this.loginUser ='欢迎使用：' +GlobalConfig.loginInfo.username ;
    }
  }

  baseOperationClick(e, baseOp: NzSubMenuComponent)
  {
    let isUpdate:Boolean= this.setBreadHeadItem(e, baseOp);
    if (isUpdate)
    {
      let parm: NavigationExtras = {
        queryParams: {

        }
      };

        this.router.navigate(['/account/'+e.toElement.id],parm);
    }
  }

  setBreadHeadItem = (e: any, baseOp: any): Boolean =>
  {
    if (baseOp.nzTitle == e.toElement.innerText)
    {
      if (this.breadcrumbitem.length<= 1)
      {
        this.breadcrumbitem = [];
        this.breadcrumbitem.push(baseOp.nzTitle);
      }
      return false;
    } else
    {
      if (this.breadcrumbitem[0]!=baseOp.nzTitle || this.breadcrumbitem[0]!=e.toElement.innerText)
      {
        this.breadcrumbitem = [];
        this.breadcrumbitem.push(baseOp.nzTitle);
        this.breadcrumbitem.push(e.toElement.innerText);
        return true;
      }else
      {
        return false;
      }
    }
  };



}
