import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saham',
  templateUrl: './saham.component.html',
  styleUrls: ['./saham.component.scss']
})
export class SahamComponent implements OnInit {
  title="Mon-titre";
  constructor() { 
    console.log('constructor');
  }

  ngOnInit(): void {
    console.log('OnInit');
  }

}
