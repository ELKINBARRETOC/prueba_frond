import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  // Array que contiene los items del menu de navegacion inferior
  public menu_items = [
    {
      label: 'About',
      submenu:[
                {label: 'Locations', href: 'location'}, 
                {label: 'Franchise With Us', href: 'franchise'},
                {label: 'Partners', href: ''},
                {label: 'About Us', href: 'about'},
                {label: 'Make Fetch Happen!', href: ''},
              ]
    },
    {
      label: 'Resources',
      submenu:[
                {label: 'Reviews', href: ''}, 
                {label: 'Pet Resource Center', href: ''},
                {label: 'Media Fact Sheet', href: ''},
                {label: 'Blog', href: 'blog'},
                {label: 'News', href: ''},
              ]
    },
    {
      label: '',
      submenu:[
                {label: 'Gift Cards', href: ''}, 
                {label: 'Services', href: 'services'},
                {label: 'Franchisee Login', href: 'franchise'},
                {label: 'Terms of Use', href: ''},
                {label: 'Privacy Policy', href: ''},
              ]
    },
    {
      label: 'NewsLetter',
      submenu:[
                {label: 'Sign up to receive the Fetch! Family Newsletter', href: ''}, 
                {label: '@', href: ''},
                {label: '.', href: ''},
              ]
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
