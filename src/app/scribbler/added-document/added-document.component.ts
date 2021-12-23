import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-added-document',
  templateUrl: './added-document.component.html',
  styleUrls: ['./added-document.component.scss']
})
export class AddedDocumentComponent implements OnInit {

  @Input()
  public document?:File;

  constructor() { }

  ngOnInit(): void {
  }

}
