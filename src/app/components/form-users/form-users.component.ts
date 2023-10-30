import { Component } from "@angular/core"
import { FormBuilder, FormGroup, Validators } from "@angular/forms"
import { ActivatedRoute } from "@angular/router"
import { type User } from "src/app/interfaces/user"
import { UserServicesService } from "src/app/services/user-services.service"

@Component({
  selector: "app-form-users",
  templateUrl: "./form-users.component.html",
  styleUrls: ["./form-users.component.css"],
})
export class FormUsersComponent {
  formAddUser: FormGroup
  id: string | null
  user: User | undefined

  constructor(
    private _formBuilder: FormBuilder,
    private _aroute: ActivatedRoute,
    private _servicesUser: UserServicesService
  ) {
    this.formAddUser = this._formBuilder.group({
      id: [""],
      user: ["", Validators.required],
      firstName: ["", Validators.required],
      secondName: [""],
      lastName: ["", Validators.required],
    })

    this.id = this._aroute.snapshot.paramMap.get("id")
    if (this.id !== null) {
      this.getById(this.id)
    }
  }

  add() {
    const {
      value: { firstName, secondName, lastName, user },
    } = this.formAddUser
    const id = "33482ee9-a5b1-4b20-9cbf-08dbd49bddc0"
    const newUser: User = { id, firstName, secondName, lastName, user }
    this._servicesUser.addUser(newUser).subscribe(
      (data) => console.log(data),
      (error) => console.error(error)
    )
  }

  update() {
    const {
      value: { id, firstName, secondName, lastName, user },
    } = this.formAddUser
    const newUser: User = { id, firstName, secondName, lastName, user }
    this._servicesUser.updateUser(newUser).subscribe(
      (data) => console.log(data),
      (error) => console.error(error)
    )
  }

  getById(id: string) {
    this._servicesUser.getUser(id).subscribe(
      (data) => {
        const [user] = data
        this.formAddUser.setValue(user)
      },
      (error) => console.error(error)
    )
  }
}
