import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  public description: string = "Esta es la descripcion";
  public precio: number = 69.69;
  constructor() { }

  ngOnInit() {
  }

}
