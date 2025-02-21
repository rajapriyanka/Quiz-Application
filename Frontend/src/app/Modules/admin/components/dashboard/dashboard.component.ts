import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { AdminService } from '../../services/admin.service';

// Define Test interface
export interface Test {
  id: number;
  title: string;
  description: string;
  time: number;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  tests: Test[] = []; // Explicitly define tests as an array of Test objects

  constructor(
    private notificationService: NzNotificationService,
    private testService: AdminService
  ) {}

  ngOnInit(): void {
    this.getAllTests();
  }

  getAllTests(): void {
    this.testService.getAllTest().subscribe(
      (res: Test[]) => {
        this.tests = res; // Ensure response is correctly typed

        // Show success message
        this.notificationService.success(
          'SUCCESS',
          'Tests fetched successfully',
          { nzDuration: 3000 }
        );
      },
      (error) => {
        this.notificationService.error(
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
