import { Directive, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[appDnd]'
})
export class DndDirective {


  @HostBinding('class.drop-zone')
  active = false;

  @Output() fileDrop = new EventEmitter<File[]>();
  @Input() preventBodyDrop = true;

  constructor() { }

  @HostListener('drop', ['$event'])
  onDropFile(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.active = false;
    const files :File[] = [];

    if (event.dataTransfer?.items) {
      for (let i = 0; i < event.dataTransfer.items.length; i++) {
        // If dropped items aren't files, reject them
        if (event.dataTransfer.items[i].kind === 'file') {
          files.push(event.dataTransfer.items[i].getAsFile() as File);
        }
      }

      event.dataTransfer.items.clear();
      this.fileDrop.emit(files);
    } else {
      /**const files = event.dataTransfer.files;
      dataTransfer.clearData();
      this.fileDrop.emit(Array.from(files));**/
    }
  }

  @HostListener('dragover', ['$event'])
  onDragOver(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    this.active = true;
  }

  @HostListener('dragleave', ['$event'])
  onDragLeave(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    this.active = false;
  }


}
