import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ProfileState } from '../../ngrx/profile/profile.state';
import { Store } from '@ngrx/store';
import { AsyncPipe } from '@angular/common';
import { ProfileCardComponent } from '../../components/profile-card/profile-card.component';
import * as ProfileActions from '../../ngrx/profile/profile.action';
import { ProfileService } from '../../services/profile.service';
import { profileModel } from '../../models/profile.model';

@Component({
  selector: 'app-list-profiles',
  standalone: true,
  imports: [
    AsyncPipe,
    ProfileCardComponent
  ],
  templateUrl: './list-profile.component.html',
  styleUrls: ['./list-profile.component.scss']
})
export class ListProfilesComponent {
  profile$: Observable<ProfileState>;

  constructor(private store: Store<{ profile: ProfileState }>, private profileService: ProfileService) {
    this.profile$ = this.store.select('profile');
    this.store.dispatch(ProfileActions.getAllProfiles());
  }
}
