import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { TestService } from '../../services/test.service';
import { UserStorageService } from '../../../auth/services/user-storage.service';


@Component({
  selector: 'app-view-my-test-results',
  imports: [SharedModule],
  templateUrl:'./view-my-test-results.component.html',
  styleUrls: ['./view-my-test-results.component.scss'],

})
export class ViewMyTestResultsComponent {
  dataSet: any;


  constructor(private testService: TestService) {}

  ngOnInit() {
    const userId = Number(UserStorageService.getUserId());
    this.getTestResults(userId);
  }
  getTestResults(id: number) {
    this.testService.getMyTestResults(id).subscribe(res=>{

      this.dataSet=res;
      console.log(this.dataSet);
    })
  }
}
