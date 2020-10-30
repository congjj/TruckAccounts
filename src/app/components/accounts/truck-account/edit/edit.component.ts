import {Component, OnInit, ElementRef, ViewChild, ViewEncapsulation} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {NzModalRef} from 'ng-zorro-antd';
import {Params, Router} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {GlobalConfig} from '../../../../services/global.config';
import {filter, map} from 'rxjs/operators';

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
  subjectList: any[] = [];
  subjectValue :any;//{label: 'Jack', value: 'jack', age: 22};
  customValue: any;
  customList:any[]=[];
  totallMoney: number;
  price: number;
  count: number;

  constructor(private formBuilder: FormBuilder, private modal: NzModalRef, public router: Router, public  httpClient: HttpClient)
  {
  }

  ngOnInit(): void
  {
    console.log(this.opts);
    if (this.opts.operType=='add')
    {
      this.loadAdd();
    }
    else if (this.opts.operType=='edit')
    {

    }
  }

  loadAdd()
  {
    this.formGroup = this.formBuilder.group({
      accountDate: [new Date(), [Validators.required]],
      price: [0, [Validators.required]],
      count: [1, [Validators.required]],
      total: ['', [Validators.required]],
      subjectValue: ['', [Validators.required]],
      customValue: ['', [Validators.required]],
      remarkValue: ['', [Validators.required]],
    });
    this.price = this.formGroup.value.price;
    this.count = this.formGroup.value.count;
    this.totallMoney = this.price * this.count;

    const getSubjectUrl:string =GlobalConfig.url + 'subjects/getSubjectByUserAndTruckId';
    const param:Params = {userId:GlobalConfig.loginInfo.id,truckId:this.opts.args['truck'].id};
    this.httpClient.get(getSubjectUrl,GlobalConfig.getHttpOptions(param))
      .pipe(
        filter((fdata:any)=>{
          return  fdata.code == 200;
        }),
        map((fdata:any)=>{
          return fdata.data;
        })
      )
      .subscribe(data=>{
        this.subjectList = data;
    });

    const getCustomUrl:string =GlobalConfig.url + 'custom/getCustomByUserId';
    this.httpClient.post(getCustomUrl, GlobalConfig.loginInfo.id, GlobalConfig.HttpOptions)
      .pipe(
        filter((fdata:any)=>{
          return  fdata.code == 200;
        }),
        map((fdata:any)=>{
          return fdata.data;
        })
      )
      .subscribe(data=>{
        this.customList = data;
      });
  }


  submit()
  {

  }

  subjectChange(e: any)
  {

  }

  customChange(e: any)
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
    this.modal.destroy({type: 'cancel'});
  }


}
