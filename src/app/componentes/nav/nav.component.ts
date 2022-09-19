import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  
  // Array que contiene los items del menu de navegacion superior
  public menu_items = [
    {
      label: 'Location',
      href: 'location'
    },
    {
      label: 'Blog',
      href: 'blog'
    },
    {
      label: 'Services',
      href: 'services'
    },
    {
      label: 'About Us',
      href: 'about'
    },
    {
      label: 'Franchise with Us',
      href: 'franchise'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
