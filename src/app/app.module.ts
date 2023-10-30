import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"
import { HttpClientModule } from "@angular/common/http"
import { AppRoutingModule } from "./app-routing.module"
import { AppComponent } from "./app.component"
import { GridUsersComponent } from "./components/grid-users/grid-users.component"
import { FormUsersComponent } from "./components/form-users/form-users.component"
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component"
import { ReactiveFormsModule } from "@angular/forms"

@NgModule({
  declarations: [
    AppComponent,
    GridUsersComponent,
    FormUsersComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
