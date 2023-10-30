import { Component } from "@angular/core"
import { User } from "src/app/interfaces/user"
import { UserServicesService } from "src/app/services/user-services.service"

@Component({
  selector: "app-grid-users",
  templateUrl: "./grid-users.component.html",
  styleUrls: ["./grid-users.component.css"],
})
export class GridUsersComponent {
  listUsers: User[] = []

  constructor(private _servicesUser: UserServicesService) {}

  ngOnInit(): void {
    this.getUsers()
  }

  getUsers() {
    this._servicesUser.getUser().subscribe(
      (data) => (this.listUsers = data),
      (error) => console.error(error)
    )
  }
}
