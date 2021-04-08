import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nave',
  templateUrl: './side-nave.component.html',
  styleUrls: ['./side-nave.component.scss']
})
export class SideNaveComponent implements OnInit {



  // signle open mode
  config = { multi: false };
  options = { multi: false };
  menus = [
   { 
     name: 'Front-end',
     iconClass: 'fa fa-code',
     active: true,
     submenu: [
       { name: 'HTML', url: '#' },
       { name: 'CSS', url: '#' },
       { name: 'Javascript', url: '#' }
     ]
   },
   { 
     name: 'Responsive web',
     iconClass: 'fa fa-mobile',
     active: false,
     submenu: [
       { name: 'Tablets', url: '#' },
       { name: 'Mobiles', url: '#' },
       { name: 'Desktop', url: '#' }
     ]
   },
   { 
     name: 'Web Browser',
     iconClass: 'fa fa-globe',
     active: false,
     submenu: [
       { name: 'Chrome', url: '#' },
       { name: 'Firefox', url: '#' },
       { name: 'Desktop', url: '#' }
     ]
   },
   { 
     name: 'Web Browser',
     iconClass: 'fa fa-globe',
     active: false
   }
 ];

  ngOnInit(): void {
    this.config = this.mergeConfig(this.options);
  }
  mergeConfig(options) {
 
    const config = {
      // selector: '#accordion',
      multi: true
    };

    return { ...config, ...options };
  }

  toggle(index: number) {
   
    if (!this.config.multi) {
      this.menus.filter(
        (menu, i) => i !== index && menu.active
      ).forEach(menu => menu.active = !menu.active);
    }


    this.menus[index].active = !this.menus[index].active;
  }
  constructor() { }
 
}
