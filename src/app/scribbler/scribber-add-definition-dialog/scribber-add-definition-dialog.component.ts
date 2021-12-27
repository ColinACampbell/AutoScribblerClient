import { Component, OnInit } from '@angular/core';

interface InfoType {
  name: string,
  description: string
}

@Component({
  selector: 'app-scribber-add-definition-dialog',
  templateUrl: './scribber-add-definition-dialog.component.html',
  styleUrls: ['./scribber-add-definition-dialog.component.scss']
})
export class ScribberAddDefinitionDialogComponent implements OnInit {

  public infoTypes: InfoType[] = [];
  public selectedInfoType: string = "";

  constructor() { }

  ngOnInit(): void {
    this.infoTypes = [
      { name: "Number", description: "Description" },
      { name: "Short Text", description: "Description" },
      { name: "Long Text", description: "Description" }
    ]
  }

  handleTypeSelectionChange($event:any)
  {
    this.selectedInfoType = $event.value as string
  }

}
