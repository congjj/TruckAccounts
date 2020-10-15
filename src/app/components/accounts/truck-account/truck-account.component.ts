import {Component, OnInit} from '@angular/core';
import {GlobalConfig} from '../../../services/global.config';
import {filter, map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {NzModalService, NzTableFilterFn, NzTableFilterList, NzTableSortFn, NzTableSortOrder} from 'ng-zorro-antd';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import {EditComponent} from './edit/edit.component';




interface Columns {
  key: string;
  name: string;
  age: number;
  address: string;
}



@Component({
  selector: 'app-truck-account',
  templateUrl: './truck-account.component.html',
  styleUrls: ['./truck-account.component.less']
})

export class TruckAccountComponent implements OnInit
{
  trucks: any[] = [];
  truck: any;
  private loading = false;
  listOfData: Columns[] = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park'
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park'
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park'
    }
  ];
  //
  dateYearMonth: Date;
  dataLoading = false;


  constructor(public  httpClient: HttpClient, private modalService: NzModalService)
  {
  }

  ngOnInit(): void
  {
    let  today :Date = new Date ();
    this.dateYearMonth = today;
    this.loadTrucks();
  }


  loadTrucks()
  {
    this.loading = true;
    const url: string = GlobalConfig.url + 'truck/getTruckList';
    this.httpClient.post(url, {}, GlobalConfig.HttpOptions).pipe(
      filter((fdata: any) =>
      {
        return fdata.code == 200;
      }),
      map((mdata: any) =>
      {
        let ldatas: any[] = [];
        for (let i = 0; i < mdata.data.length; i++)
        {
          ldatas.push({
            id: mdata.data[i].id,
            truckCode: mdata.data[i].areaNumber + '•' + mdata.data[i].code,
            areaNum: mdata.data[i].areaNumber,
            code: mdata.data[i].active,
            driverId: mdata.data[i].driverId,
            driverName: mdata.data[i].driverName,
            active: mdata.data[i].active,
            state: mdata.data[i].active == 1 ? '有效' : '注销'
          });
        }
        return ldatas;
      })
    ).subscribe((data: any) =>
    {
      this.trucks = data;
      if (data.length>0)
        this.truck=data[0];
      this.loading = false;
    });
  }

  onDateChange(date: Date)
  {
    console.log(date);
  }


  delAccountItem()
  {

  }

  cancelAccountItem()
  {

  }

  tabChaged(tab: any)
  {
    console.log(tab);
  }

  doAccount(date: Date)
  {
    console.log(date);
    const modal = this.modalService.create({
      nzTitle: this.truck.truckCode + '【记账】', // 窗体标题
      nzContent: EditComponent, // 表单组件
      // 要传递给表单组件的参数
      nzComponentParams: {
        opts: {
          operType: 'add',
          args: {
            accountDate:this.dateYearMonth,
            truck:this.truck,
            account:null
          },
        },
      },
      nzWidth: 600, // 窗体宽度
      nzClosable: false, // 不显示右上角的X按钮
      nzMaskClosable: false, // 不允许点击窗体旁边的空白处关闭
      nzFooter: null, // 不显示自带的底部按钮栏，因为表单组件自己会添加底部按钮栏
      nzOnOk: (a: any) =>
      {
      },
    });
    modal.afterClose.asObservable().subscribe(rdata =>
    {
      if (rdata != undefined && rdata.type == 'ok')
      {
        this.reloadTruckAccount();
      }
    });
  }

  private reloadTruckAccount()
  {

  }


}
