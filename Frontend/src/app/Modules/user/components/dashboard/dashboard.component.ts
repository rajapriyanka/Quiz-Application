import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { TestService } from '../../services/test.service';
import { Test } from '../../../admin/components/dashboard/dashboard.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  tests: Test[] = [];

  constructor(
    private notification: NzNotificationService,
    private testService: TestService
  ) {}
   ngOnInit(): void {
      this.getAllTests();
    }

    getAllTests(): void {
      this.testService.getAllTest().subscribe(
        (res: Test[]) => {
          this.tests = res; // Ensure response is correctly typed

          // Show success message
          this.notification.success(
            'SUCCESS',
            'Tests fetched successfully',
            { nzDuration: 3000 }
          );
        },
        (error) => {
          this.notification.error(
            'ERROR',
            'Something went wrong while fetching tests',
            { nzDuration: 5000 }
          );
          console.error('Error fetching tests:', error);
        }
      );
    }

    getFormattedTime(time: number): string {
      const minutes = Math.floor(time / 60);
      const seconds = time % 60;
      return `${minutes}m ${seconds}s`;
    }
  }


