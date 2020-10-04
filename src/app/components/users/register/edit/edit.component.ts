import {Component, OnInit, TemplateRef} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NzModalRef, NzSafeAny} from 'ng-zorro-antd';
import {GlobalConfig} from '../../../../services/global.config';
import {NavigationExtras, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.less']
})
export class EditComponent implements OnInit
{
  opts: {
    operType: 'add' | 'edit'; // 'add' 'edit'
    editInfo: any; // 要进行编辑的数据的Id
  };

  loading = false;
  formGroup: FormGroup;
  submitting = false;

  constructor(private formBuilder: FormBuilder, private modal: NzModalRef, public router: Router, public  httpClient: HttpClient)
  {
  }

  ngOnInit(): void
  {
    this.formGroup = this.formBuilder.group({
      id: ['', [Validators.required]],
      name: ['', [Validators.required]],
      password: ['', [Validators.required]],
      password1: ['', [Validators.required]],
      oldPassword: ['', [Validators.required]],
      active: ['', [Validators.required]],
    });
    //console.log(this.opts.operType);
  }


  submit()
  {
    for (const i in this.formGroup.controls)
    {
      this.formGroup.controls[i].markAsDirty();
      this.formGroup.controls[i].updateValueAndValidity();
    }
    if (this.formGroup.value.id == null || this.formGroup.value.name == null || this.formGroup.value.password == null || this.formGroup.value.id.trim().length == 0 || this.formGroup.value.name.trim().length == 0 || this.formGroup.value.password.trim().length == 0)
    {
      return;
    } else if (this.formGroup.value.password != this.formGroup.value.password1)
    {
      alert('密码和确认密码不同！');
      return;
    }
    const url: string = GlobalConfig.url + 'user/insertUser';
    let bodys = {
      id: this.formGroup.value.id,
      name: this.formGroup.value.name,
      active: 0,
      password: this.formGroup.value.password,
    };
    this.loading = true;
    this.httpClient.post(url, bodys, GlobalConfig.HttpOptions).subscribe((data: any) =>
    {
      if (data.code == 200)
      {
        this.modal.destroy({type: 'ok'});
      } else
      {
        alert(data.msg);
      }
      this.loading = false;
    });
   // this.modal.close({type: 'ok'});
    //this.modal.destroy(a);
  }



  cancel()
  {
    this.modal.close({type: 'cancel'});
  }

}
