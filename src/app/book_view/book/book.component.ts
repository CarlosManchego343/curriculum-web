import { Component, ElementRef, Inject, PLATFORM_ID, ViewChild } from '@angular/core';
import { FrontPageComponent } from '../front-page/front-page.component';
import { PageFlip } from 'page-flip';
import { isPlatformBrowser } from '@angular/common';
import { IndexComponent } from '../index/index.component';
import { PresentationFirstPageComponent } from '../presentation-first-page/presentation-first-page.component';
import { PresentationSecondPageComponent } from '../presentation-second-page/presentation-second-page.component';
import { TimelineExpLabFirstPageComponent } from '../timeline-exp-lab-first-page/timeline-exp-lab-first-page.component';
import { TimelineExpLabSecondPageComponent } from '../timeline-exp-lab-second-page/timeline-exp-lab-second-page.component';
import { ProyectosFirstPageComponent } from '../proyectos-first-page/proyectos-first-page.component';
import { ProyectosSecondPageComponent } from '../proyectos-second-page/proyectos-second-page.component';

@Component({
  selector: 'app-book',
  imports: [FrontPageComponent, IndexComponent, PresentationFirstPageComponent, PresentationSecondPageComponent, TimelineExpLabFirstPageComponent, TimelineExpLabSecondPageComponent, ProyectosFirstPageComponent, ProyectosSecondPageComponent],
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }
  @ViewChild('book') bookContainer!: ElementRef;
  pageFlip!: any;

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.pageFlip = new PageFlip(this.bookContainer.nativeElement, {
        width: 800,
        height: 900,
        showCover: true,
        maxShadowOpacity: 0.1,
        useMouseEvents: true,
        mobileScrollSupport: false,
      });

      const pages = document.querySelectorAll('.my-page') as NodeListOf<HTMLElement>;
      this.pageFlip.loadFromHTML(pages);

      setTimeout(() => {
        this.pageFlip.updateFromHtml(pages); // opcional pero útil
      }, 0);

      this.bookContainer.nativeElement
        .querySelectorAll('.my-page app-indice, .my-page app-indice *')
        .forEach((el: HTMLElement) => {
          el.addEventListener('mousedown', (e) => e.stopPropagation());
          el.addEventListener('touchstart', (e) => e.stopPropagation());
        });

      // 🔹 Bloquear propagación dentro del carrusel
      this.bookContainer.nativeElement.addEventListener(
        'mousedown',
        (event: MouseEvent) => {
          if ((event.target as HTMLElement).closest('.carousel')) {
            event.stopPropagation();
          }
        },
        true // captura en fase temprana
      );

      this.bookContainer.nativeElement.addEventListener(
        'touchstart',
        (event: TouchEvent) => {
          if ((event.target as HTMLElement).closest('.carousel')) {
            event.stopPropagation();
          }
        },
        true
      );

    }
  }

  goToPage(page: number) {
    console.log('Ir a página:', page); // debug
    if (this.pageFlip) {
      const totalPages = this.pageFlip.getPageCount();
      console.log('Total de páginas:', totalPages);
      if (page < totalPages) {
        this.pageFlip.flip(page);
      } else {
        console.warn('Página fuera de rango');
      }
    }
  }

}
