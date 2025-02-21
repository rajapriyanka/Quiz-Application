import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CreatetestComponent } from './components/createtest/createtest.component';
import { AddQuestionInTestComponent } from './components/add-question-in-test/add-question-in-test.component';
import { ViewtestComponent } from './components/viewtest/viewtest.component';
import { ViewTestResultsComponent } from './components/view-test-results/view-test-results.component';

const routes: Routes = [
  {path:'dashboard',component:DashboardComponent},
  {path:'create-test',component:CreatetestComponent},
  {path:'add-question/:id',component:AddQuestionInTestComponent},
  {path:'view-test/:id',component: ViewtestComponent},
  {path:'view-test-results',component: ViewTestResultsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
