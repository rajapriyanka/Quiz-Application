import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { ActivatedRoute, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { TestService } from '../../services/test.service';
import { UserStorageService } from '../../../auth/services/user-storage.service';

@Component({
  selector: 'app-take-test',
  imports: [SharedModule],
  templateUrl: './take-test.component.html',
  styleUrl: './take-test.component.scss'
})
export class TakeTestComponent {
  questions: any[] = [];
  testId: any;

  selectedAnswers:{[key : number]: String}={};
  timeRemaining: number = 0;
  interval: any;

  constructor(
    private testService: TestService,
    private activatedRoute: ActivatedRoute,
    private message: NzMessageService,
    private router: Router
  ) {}
  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      const idParam = params.get('id');
      this.testId = idParam ? Number(idParam) : null;  // ✅ Safer conversion

      if (this.testId !== null) {  // ✅ Ensure testId is valid
        this.testService.getTestQuestions(this.testId).subscribe(
          res => {
            if (res && res.questions) {
              this.questions = res.questions;
              console.log(this.questions);
              this.timeRemaining=res.testDTO.time || 0;
              this.startTimer();
            } else {
              console.error("Invalid response format:", res);
            }
          },
          error => {
            console.error("Error fetching questions:", error);
          }
        );
      }
    });
  }
  startTimer(){
    this.interval=setInterval(()=>{

      if(this.timeRemaining>0){
        this.timeRemaining--;
      }
      else{
        clearInterval(this.interval);
        this.submitAnswers();
      }
    },1000)
  }
  getFormattedTime(): string {
    const minutes = Math.floor(this.timeRemaining / 60);
    const seconds = this.timeRemaining % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }
  onAnswerChange(questionId: number, selectedOption: string) {
    this.selectedAnswers[questionId] = selectedOption;
    console.log(this.selectedAnswers);
  }
  submitAnswers() {
    const answerList = Object.keys(this.selectedAnswers).map(questionId => {
        return {
            questionId: Number(questionId),
            selectedOption: this.selectedAnswers[Number(questionId)]
        };
    });

    const data = {
        testId: this.testId,
        userId: UserStorageService.getUserId(),
        responses: answerList
    };

    this.testService.submitTest(data).subscribe(res => {

      this.message
      .success(
        'Test submitted successfully',
        {nzDuration:5000}
      );
      this.router.navigateByUrl("/user/view-test-results");
    }, error=>{
      this.message
      .error(
        '${error.error}',
        {nzDuration:5000}
      )
    }
  );
}
}

