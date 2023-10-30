import { HttpClient, HttpHeaders } from "@angular/common/http"
import { HttpParams } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { environment } from "src/environments/environment"
import { type User } from "../interfaces/user"
import { Observable } from "rxjs"

@Injectable({
  providedIn: "root",
})
export class UserServicesService {
  gatewayUrl = environment.gatewayUrl || environment
  apiUrl = "/User/User"

  constructor(private _client: HttpClient) {}

  getUser(id?: string): Observable<User[]> {
    if (id !== null && id) {
      const options = { params: new HttpParams().set("id", id) }
      return this._client.get(
        `${this.gatewayUrl}${this.apiUrl}`,
        options
      ) as Observable<User[]>
    } else {
      return this._client.get(`${this.gatewayUrl}${this.apiUrl}`) as Observable<
        User[]
      >
    }
  }

  addUser(newUser: User): Observable<User> {
    const options = {
      headers: new HttpHeaders().set("Content-Type", "application/json"),
    }
    return this._client.post(
      `${this.gatewayUrl}${this.apiUrl}`,
      newUser,
      options
    ) as Observable<User>
  }

  updateUser(newUser: User): Observable<User> {
    const options = {
      headers: new HttpHeaders().set("Content-Type", "application/json"),
    }
    return this._client.put(
      `${this.gatewayUrl}${this.apiUrl}`,
      newUser,
      options
    ) as Observable<User>
  }
}
