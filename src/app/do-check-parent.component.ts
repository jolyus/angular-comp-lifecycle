import { Component, ViewChild } from '@angular/core';

import { DoCheckComponent } from './do-check.component';
import { Hero } from './hero';

@Component({
  selector: 'do-check-parent',
  templateUrl: './do-check-parent.component.html',
  styles: ['.parent {background: Lavender}']
})
export class DoCheckParentComponent {
  hero: Hero;
  power: string;
  title = 'DoCheck';
  @ViewChild(DoCheckComponent) childView: DoCheckComponent;

  constructor() {
    this.reset();
  }

  reset() {
    this.hero = new Hero('Windstorm');
    this.power = 'sing';
    if (this.childView) {
      this.childView.reset();
    }
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/