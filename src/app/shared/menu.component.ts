import { Component } from '@angular/core';

@Component({
    selector: 'app-menu',
    // tslint:disable-next-line: max-line-length
    template: '<app-navbar></app-navbar><div class="d-flex bd-highlight"><app-sidebar></app-sidebar><router-outlet></router-outlet></div>'
})
export class MenuComponent {

}

