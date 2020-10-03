import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router, NavigationExtras} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {GlobalConfig} from '../../services/global.config';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit
{

  validateForm!: FormGroup;

  constructor(private fb: FormBuilder, public router: Router, public  httpClient: HttpClient)
  {
  }

  ngOnInit(): void
  {
    this.validateForm = this.fb.group({
      userId: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });

  }

  submitForm(): void
  {
    for (const i in this.validateForm.controls)
    {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }

    let parm: NavigationExtras = {
      queryParams: {
        userId: this.validateForm.value.userId,
        password: this.validateForm.value.password,
      }
    };

    console.log(parm);
    if (parm.queryParams.userId == null || parm.queryParams.password == null || parm.queryParams.userId.trim().length == 0 || parm.queryParams.password.trim().length == 0)
    {
      alert('输入用户名或密码！');
      return;
    }

    const url: string = GlobalConfig.url + 'user/userLogin';
    let bodys =parm.queryParams;

    const httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
    this.httpClient.post(url, bodys, httpOptions).subscribe((data: any) =>
    {
      console.log(data);
      if (data.code == 200)
      {
        GlobalConfig.loginInfo.id=  data.data.id;
        GlobalConfig.loginInfo.username=data.data.name;
        GlobalConfig.loginInfo.password=data.data.password;
        this.router.navigate(['/account']);
      } else
      {
        alert(data.msg);
      }
    });

  }


}
