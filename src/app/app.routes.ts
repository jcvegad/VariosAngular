import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';


const APP_ROUTES: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: 'home', component: HomeComponent }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);