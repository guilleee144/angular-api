import { Routes } from '@angular/router';
import { PrimeroComponent } from './primero/primero.component';
import { SegundoComponent } from './segundo/segundo.component';
import { TerceroComponent } from './tercero/tercero.component';

export const routes: Routes = [
    {path: '', redirectTo: 'primero', pathMatch: 'full'},
    {path: 'primero', component: PrimeroComponent},
    {path: 'segundo', component: SegundoComponent},
    {path: 'tercero', component: TerceroComponent}
];
