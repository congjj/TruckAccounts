import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {NzModalRef} from 'ng-zorro-antd';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.less']
})
export class EditComponent implements OnInit
{
  loading = false;

  opts: {
    operType:'add' | 'edit'; // 'add' 'edit'
    args: {}
  };
  value: any;
  formGroup: any;
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
  }

  submit()
  {

  }

  cancel()
  {

  }
}
