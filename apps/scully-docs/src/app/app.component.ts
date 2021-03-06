import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  encapsulation: ViewEncapsulation.None,
  template: `
    <input type="checkbox" id="mobile-toggle" />
    <nav class="scullyio-nav-header" theme="dark"></nav>

    <div class="page-content">
      <section class="nav-container" [class.hidden]="hideNavlist">
        <div class="scullyio-lang-select"></div>
        <ul class="scullyio-nav-list"></ul>
      </section>

      <section class="router-container">
        <router-outlet></router-outlet>
      </section>
    </div>
  `,
})
export class AppComponent {
  constructor(private router: Router) {}
  get hideNavlist() {
    return this.router.url === '/';
  }
}
