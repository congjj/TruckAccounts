import {Component, OnInit} from '@angular/core';
import {GlobalConfig} from '../../../services/global.config';
import {HttpClient} from '@angular/common/http';
import {filter, map} from 'rxjs/operators';
import {EditComponent} from './edit/edit.component';
import {NzModalService} from 'ng-zorro-antd';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})
export class RegisterComponent implements OnInit
{
  opts: {
    operType: "add" | "edit"; // 'add' 'edit'
    editId: string; // 要进行编辑的数据的Id
  };
  data: any = [];
  loading = false;


  constructor(public  httpClient: HttpClient, private modalService: NzModalService)
  {
  }

  ngOnInit(): void
  {
    this.reloadUsers();
  }

  editUser(name: string)
  {
    console.log(name);
  }

  addUser()
  {
    const modal = this.modalService.create({
      nzTitle: '新用户注册', // 窗体标题
      nzContent: EditComponent, // 表单组件
      // 要传递给表单组件的参数
      nzComponentParams: {
        opts: {
          operType: "add",
          editInfo: null,
        },
      },
      nzWidth: 400, // 窗体宽度
      nzClosable: false, // 不显示右上角的X按钮
      nzMaskClosable: false, // 不允许点击窗体旁边的空白处关闭
      nzFooter: null, // 不显示自带的底部按钮栏，因为表单组件自己会添加底部按钮栏
      nzOnOk:(a:any)=> {},
    });
    modal.afterClose.asObservable().subscribe(rdata =>
    {
      if (rdata != undefined && rdata.type == 'ok')
      {
        this.reloadUsers();
      }
    });
  }

  reloadUsers()
  {
    this.loading = true;
    const url: string = GlobalConfig.url + 'user/getUserList';
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
          if (mdata.data[i].active == 1)
          {
            ldatas.push({
              id: mdata.data[i].id,
              name: mdata.data[i].name,
              password: mdata.data[i].password,
              active: mdata.data[i].active,
              state: '有效'
            });
          } else
          {
            ldatas.push({
              id: mdata.data[i].id,
              name: mdata.data[i].name,
              password: mdata.data[i].password,
              active: mdata.data[i].active,
              state: '注销'
            });
          }
        }
        return ldatas;
      })
    ).subscribe((data: any) =>
    {
      this.data = data;
      this.loading = false;
    });
  }

}
