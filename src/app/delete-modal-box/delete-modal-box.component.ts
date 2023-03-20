import { Component, ViewEncapsulation, ElementRef, Input, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';

import { ModalService } from './modal.service';
@Component({
  selector: 'app-delete-modal-box',
  templateUrl: './delete-modal-box.component.html',
  styleUrls: ['./delete-modal-box.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DeleteModalBoxComponent implements OnInit, OnDestroy {

  @Input() id: number = 0;
  private element: any;
  @Output() deleteTeamEvent = new EventEmitter();

  constructor(private modalService: ModalService, private el: ElementRef) {
    this.element = el.nativeElement;
  }

  ngOnInit(): void {
    if (!this.id) {
      console.error('modal must have an id');
      return;
    }

  //   // move element to bottom of page (just before </body>) so it can be displayed above everything else
     document.body.appendChild(this.element);

  //   // close modal on background click
    this.element.addEventListener('click', (el: any) => {
      if (el.target.className === 'jw-modal') {
        this.close();
      }
    });

  //   // add self (this modal instance) to the modal service so it's accessible from controllers
     this.modalService.add(this);
  //  }
   
  }
  
   // remove self from modal service when component is destroyed
   ngOnDestroy(): void {
    this.modalService.remove(this.id);
    this.element.remove();
}

  open() {
    this.element.style.display = 'block';
    document.body.classList.add('jw-modal-open');
}

close() {
  this.element.style.display = 'none';
    document.body.classList.remove('jw-modal-open');
}
  //deleteTeam
  deleteTeam(){
    this.deleteTeamEvent.emit();
  }
}