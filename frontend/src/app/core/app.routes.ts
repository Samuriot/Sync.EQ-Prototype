import { Routes } from '@angular/router';
import { HomePage } from '../pages/home/home.component';
import { DashboardPage } from '../pages/dashboard/dashboard.component';
import { ProfilePage } from '../pages/profile/profile.component';
import { CreateProfilePage } from '../pages/createProfile/createProfile.component';

export const routes: Routes = [
    {
        path: '',
        component: HomePage
    },
    {
        path: 'welcome',
        component: DashboardPage
    },
    {
        path: 'profile',
        component: ProfilePage
    },
    {
        path: 'create',
        component: CreateProfilePage
    },
];