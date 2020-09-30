import {Component, OnInit} from '@angular/core';
import {NzMenuItemDirective, NzSubMenuComponent} from 'ng-zorro-antd';
import {ElementSchemaRegistry} from '@angular/compiler';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit
{
  isCollapsed = false;

  breadcrumbitem : any = [];

  constructor()
  {
  }

  ngOnInit(): void
  {
  }

  baseOperationClick(e, baseOp: NzSubMenuComponent)
  {
    this.setBreadHeadItem(e, baseOp);
  }

  setBreadHeadItem(e:any, baseOp:any)
  {
    this.breadcrumbitem =[];
    if (baseOp.nzTitle==e.toElement.innerText)
    {
      this.breadcrumbitem.push(baseOp.nzTitle) ;
    }
    else
    {
      this.breadcrumbitem.push(baseOp.nzTitle) ;
      this.breadcrumbitem.push(e.toElement.innerText) ;
    }
  }



}
