import {Component, Input} from '@angular/core';
import {profileModel} from "../../models/profile.model";

@Component({
  selector: 'app-profile-card',
  standalone: true,
  imports: [],
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.scss'
})
export class ProfileCardComponent {
  @Input() profile!: profileModel;
}
