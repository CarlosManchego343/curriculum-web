import { Component, ElementRef, Inject, PLATFORM_ID, ViewChild } from '@angular/core';
import { FrontPageComponent } from '../front-page/front-page.component';
import { PageFlip } from 'page-flip';
import { isPlatformBrowser } from '@angular/common';
import { IndexComponent } from '../index/index.component';
import { PresentationFirstPageComponent } from '../presentation-first-page/presentation-first-page.component';
import { PresentationSecondPageComponent } from '../presentation-second-page/presentation-second-page.component';

@Component({
  selector: 'app-book',
  imports: [FrontPageComponent, IndexComponent, PresentationFirstPageComponent, PresentationSecondPageComponent],
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
    }
  }

  goToPage(page: number) {
    console.log('Ir a página:', page); // debug
    if (this.pageFlip) {
      this.pageFlip.getPageCount(); // Total de páginas
      this.pageFlip.flipController.flipToPage(page);
    }
  }
}
