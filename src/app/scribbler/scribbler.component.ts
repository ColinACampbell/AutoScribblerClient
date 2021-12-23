import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scribbler',
  templateUrl: './scribbler.component.html',
  styleUrls: ['./scribbler.component.scss']
})
export class ScribblerComponent implements OnInit {

  addedDocuments : File[] = [];

  constructor() { }

  ngOnInit(): void {
    const file = new File([],"test")
    this.addedDocuments.push(file);
  }

  handleFileDrop($event:any) {
    const files = $event as File[];


    this.addedDocuments.push(...files);
  
    console.log(this.addedDocuments);
  }
}
