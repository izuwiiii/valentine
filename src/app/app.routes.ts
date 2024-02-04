import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { YesPageComponent } from './pages/yes-page/yes-page.component';
import { ValentPageComponent } from './pages/valent-page/valent-page.component';

export const routes: Routes = [
    {path: '', redirectTo: 'Valent', pathMatch: 'full'},
    {path: 'Valent', component: ValentPageComponent},
    {path: 'Yes', component: YesPageComponent}
];
