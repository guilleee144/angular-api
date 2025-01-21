import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HijoComponent } from "./hijo/hijo.component";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HijoComponent,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tour-of-heroes';
  autor:string= 'Juan López';
}
