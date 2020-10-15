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
    operType: 'add' | 'edit'; // 'add' 'edit'
    args: {}
  };
  value: any;
  formGroup: any;
  submitting = false;
  subjectList: any[] = [{label: 'Lucy', value: 'lucy', age: 20},
    {label: 'Jack', value: 'jack', age: 22}];
  subjectValue = {label: 'Jack', value: 'jack', age: 22};
  customValue: any;


  constructor(private formBuilder: FormBuilder, private modal: NzModalRef, public router: Router, public  httpClient: HttpClient)
  {
  }

  ngOnInit(): void
  {
    this.formGroup = this.formBuilder.group({
      accountDate: [new Date(), [Validators.required]],
      price: ['', [Validators.required]],
      count: ['', [Validators.required]],
      total: ['', [Validators.required]],
      subjectValue: ['', [Validators.required]],
      customValue:['', [Validators.required]],
      remarkValue:['', [Validators.required]],
    });
  }

  submit()
  {

  }

  cancel()
  {

  }

  subjectChange(e: any)
  {

  }
}
