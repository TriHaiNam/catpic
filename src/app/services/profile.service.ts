import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { profileModel } from '../models/profile.model';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  profileURL = 'http://localhost:3000/profile';

  constructor(private http: HttpClient, private AuthService : AuthService) {}

  getAllProfiles(): Observable<profileModel[]> {
    return this.http.get<profileModel[]>(`${this.profileURL}/all`,{headers: {Authorization: `Bearer ${this.AuthService.idToken}`}});
  }
}
