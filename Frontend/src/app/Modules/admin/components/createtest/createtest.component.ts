import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { AdminService } from '../../services/admin.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createtest',
  imports: [SharedModule],
  templateUrl: './createtest.component.html',
  styleUrl: './createtest.component.scss'
})
export class CreatetestComponent {

  constructor(private fb: FormBuilder,
    private deviceService: AdminService,
    private notification: NzNotificationService,
    private router: Router
  ){}
  testForm!: FormGroup;

  ngOnInit(){
    this.testForm = this.fb.group({
      title:[null,Validators.required],
      description:[null,[Validators.required]],
      time: [null,[Validators.required]]
    })
  }
  submitForm(){
    if(this.testForm.valid){
      this.deviceService.createTest(this.testForm.value).subscribe(res=>{
        this.notification
        .success(
          'SUCCESS',
          'Test Creted Successfully',
          {nzDuration: 5000}
        );
        this.router.navigateByUrl('admin/dashboard');

      }, error=>{
        this.notification
        .error(
        'ERROR',
        '${error.error}',
        {nzDuration:5000}
      );
      })
    }
  }
}
