import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-added-document',
  templateUrl: './added-document.component.html',
  styleUrls: ['./added-document.component.scss']
})
export class AddedDocumentComponent implements OnInit {

  @Input()
  public document?:File;

  @Input()
  public index?:number;

  @Output()
  public onRemoveItem = new EventEmitter<number>()

  constructor() { }

  ngOnInit(): void {
  }


  removeItem()
  {
    this.onRemoveItem.emit(this.index)
  }
}
