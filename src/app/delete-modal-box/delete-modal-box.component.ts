import { Component, ViewEncapsulation, ElementRef, Input, OnInit, OnDestroy, SimpleChanges } from '@angular/core';

import { ModalService } from './modal.service';

@Component({
  selector: 'app-delete-modal-box',
  templateUrl: './delete-modal-box.component.html',
  styleUrls: ['./delete-modal-box.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DeleteModalBoxComponent implements OnInit, OnDestroy {
  @Input() id: number = 0;
  @Input() closeTeam: boolean = false;
  private element: any;

  constructor(private modalService: ModalService, private el: ElementRef) {
    this.element = el.nativeElement;
  }

  ngOnInit(): void {
    if (!this.id) {
      console.error('modal must have an id');
      return;
    }
    document.body.appendChild(this.element);
    this.element.addEventListener('click', (el: any) => {
      if (el.target.className === 'jw-modal') {
        this.close();
      }
    });
    this.modalService.add(this);

  }

  open() {
    this.element.style.display = 'block';
    // document.body.classList.add('jw-modal-open');
  }

  ngOnDestroy(): void {
    this.modalService.remove(this.id);
    this.element.remove();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['closeTeam'].currentValue) {
      this.close();
    }
  }

  close() {
    this.element.style.display = 'none';
    document.body.classList.remove('jw-modal-open');
  }

}