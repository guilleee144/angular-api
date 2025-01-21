import { Component } from '@angular/core';
import { Hero } from '../hero';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-primero',
  imports: [NgModule,NgModel],
  templateUrl: './primero.component.html',
  styleUrl: './primero.component.css'
})
export class PrimeroComponent {
heroe:Hero={
  id:1,
  name:'Superman',
  city:'Metropolis'
}
}
