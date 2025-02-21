import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { AdminService } from '../../services/admin.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-viewtest',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './viewtest.component.html',
  styleUrls: ['./viewtest.component.scss']  // ✅ Corrected `styleUrls`
})
export class ViewtestComponent implements OnInit {  // ✅ Implement OnInit
  questions: any[] = [];
  testId: number | null = null;  // ✅ Explicitly define type

  constructor(
    private adminService: AdminService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      const idParam = params.get('id');
      this.testId = idParam ? Number(idParam) : null;  // ✅ Safer conversion

      if (this.testId !== null) {  // ✅ Ensure testId is valid
        this.adminService.getTestQuestions(this.testId).subscribe(
          res => {
            if (res && res.questions) {
              this.questions = res.questions;
              console.log(this.questions);
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
}
