import { Component, ViewChild } from '@angular/core';
import { IonContent, IonPopover } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  @ViewChild('popover', { static: true }) popover!: IonPopover;
  @ViewChild('content', { static: false }) content!: IonContent;

  scrollToTop() {
    this.content.scrollToTop(500); // El número es el tiempo en ms para el scroll
  }

  isOpen = false;

  presentPopover(e: Event){
    this.popover.event = e;
    this.isOpen = true;
  }
  constructor() {}

}
