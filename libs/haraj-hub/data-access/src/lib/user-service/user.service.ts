import { Injectable, inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { IUser } from "../models/user.interface";

@Injectable({providedIn:"root"})
export class UsersService {
    private http = inject(HttpClient);

    public getUsers(): Observable<IUser[]> {
      return this.http.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
    }
}