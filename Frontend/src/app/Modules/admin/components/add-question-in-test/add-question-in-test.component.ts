import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../../services/admin.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-add-question-in-test',
  imports: [SharedModule],
  templateUrl: './add-question-in-test.component.html',
  styleUrl: './add-question-in-test.component.scss'
})
export class AddQuestionInTestComponent{


  constructor(
    private fb: FormBuilder,
    private adminService: AdminService,
    private notification: NzNotificationService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}
  id: number | null | undefined;
  questionForm!: FormGroup;

  ngOnInit() {
    this.questionForm = this.fb.group({
      questionText: [null, Validators.required],
      optionA: [null, Validators.required],
      optionB: [null, Validators.required],
      optionC: [null, Validators.required],
      optionD: [null, Validators.required],
      correctOption:[null,[Validators.required]],
    });
    this.id = Number(this.activatedRoute.snapshot.params["id"]);
  }
  submitForm(){
    const questionDto= this.questionForm.value;
    questionDto.id=this.id;

    this.adminService.addQuestionInTest(questionDto).subscribe(res=>{

      this.notification
      .success(
        'SUCCESS',
        'Question added successfully',
        {nzDuration:5000}
      );
      this.router.navigateByUrl("/admin/dashboard")

    }, error=>{
      this.notification.error('Error','Something went wrong while adding question',
        {nzDuration:5000});

    });


  }

}
