import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { GridUsersComponent } from "./components/grid-users/grid-users.component"
import { FormUsersComponent } from "./components/form-users/form-users.component"
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component"

const routes: Routes = [
  {
    path: "",
    component: GridUsersComponent,
  },
  {
    path: "user",
    component: FormUsersComponent,
  },
  {
    path: "user/:id",
    component: FormUsersComponent,
  },
  {
    path: "**",
    pathMatch: "full",
    component: PageNotFoundComponent,
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
