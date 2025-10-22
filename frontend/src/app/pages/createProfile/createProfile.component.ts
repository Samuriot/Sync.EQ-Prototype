import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'create-profile-dashboard',
  imports: [CommonModule],
  templateUrl: './createProfile.component.html',
})
export class CreateProfilePage {
    title = 'create-profile-dashboard';
}