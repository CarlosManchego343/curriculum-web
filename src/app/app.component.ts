import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './phone_view/navbar/navbar.component';
import { Title } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { mangaPageFlip } from './animations';
import { BookComponent } from './book_view/book/book.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, CommonModule, BookComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  animations: [mangaPageFlip]
})
export class AppComponent implements OnInit {

  isPequeno = false;
  isGrande = false;

  @ViewChild('outlet') outlet!: RouterOutlet;

  constructor(private titleService: Title, private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver.observe([
      '(max-width: 767px)',       // Pantalla pequeña
      '(min-width: 768px)'       // Pantalla grande
    ]).subscribe((state: BreakpointState) => {
      this.isPequeno = state.breakpoints['(max-width: 767px)'] ?? false;
      this.isGrande = state.breakpoints['(min-width: 768px)'] ?? false;
    });
  }

  ngOnInit() {
    this.titleService.setTitle('Portafolio Profesional | Carlos Manchego');
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet?.activatedRouteData?.['animation'];
  }

  @HostListener('@pageFlip.start')
  onAnimationStart() {
    const sound = new Audio('/assets/sounds/pageflip.mp3');
    sound.volume = 0.3;
    sound.play();
  }

}
