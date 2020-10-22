import {Component, OnInit, ElementRef, ViewChild, ViewEncapsulation} from '@angular/core';
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
  @ViewChild('inputCountElement', { static: false }) inputCountElement?: ElementRef;
  @ViewChild('inputPriceElement', { static: false }) inputPriceElement?: ElementRef;
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
  totallMoney: number;
  price: number;
  count: number;

  constructor(private formBuilder: FormBuilder, private modal: NzModalRef, public router: Router, public  httpClient: HttpClient)
  {
  }

  ngOnInit(): void
  {
    this.formGroup = this.formBuilder.group({
      accountDate: [new Date(), [Validators.required]],
      price: [1, [Validators.required]],
      count: [0, [Validators.required]],
      total: ['', [Validators.required]],
      subjectValue: ['', [Validators.required]],
      customValue: ['', [Validators.required]],
      remarkValue: ['', [Validators.required]],
    });
    this.price = this.formGroup.value.price;
    this.count = this.formGroup.value.count;
    this.totallMoney = this.price * this.count;
  }

  submit()
  {

  }

  subjectChange(e: any)
  {

  }

  onPriceChange(e: any)
  {
    const reg = /^-?(0|[1-9][0-9]*)(\.[0-9]*)?$/;
    if ((!isNaN(+e) && reg.test(e)) || e === '' || e === '-')
    {
      this.price = e;
      this.totallMoney = this.price * this.count;
    }
    this.inputPriceElement!.nativeElement.value = this.price;
  }


  onCountChange(e: any)
  {
    const reg = /^-?(0|[1-9][0-9]*)(\.[0-9]*)?$/;
    if ((!isNaN(+e) && reg.test(e)) || e === '' || e === '-')
    {
      this.count = e;
      this.totallMoney = this.price * this.count;
    }
    this.inputCountElement!.nativeElement.value = this.count;
  }


  cancel()
  {

  }

}
