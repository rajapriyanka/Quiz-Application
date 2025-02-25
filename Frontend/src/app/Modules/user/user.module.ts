import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { UserRoutingModule } from "./user-routing.module"
import { SharedModule } from "../shared/shared.module"

import { DashboardComponent } from "./components/dashboard/dashboard.component"


@NgModule({
  imports: [CommonModule, UserRoutingModule, SharedModule, DashboardComponent],
})
export class UserModule {}

