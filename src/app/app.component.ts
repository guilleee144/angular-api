import { Component } from '@angular/core';
import { Data, RouterLink, RouterOutlet } from '@angular/router';
import { DataService } from './data.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NgFor,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'api-firebase';
  posts: any[] = [];
  constructor(private servicio:DataService){}

  ngOnInit(){
    this.servicio.getPosts().subscribe((data: any[]) => {
      this.posts = data;
    });
  }
}
function ngOnInit() {
  throw new Error('Function not implemented.');
}

