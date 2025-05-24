import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { Title } from '@angular/platform-browser';
import { mangaPageFlip } from './animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  animations: [mangaPageFlip]
})
export class AppComponent implements OnInit {

   @ViewChild('outlet') outlet!: RouterOutlet;

  constructor(private titleService: Title) { }

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
