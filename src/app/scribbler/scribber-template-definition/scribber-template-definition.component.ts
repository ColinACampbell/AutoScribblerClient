import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import TemplateDefinition from 'src/app/models/TemplateDefinition.model';
import { ScribblerService } from 'src/app/services/scribbler.service';
import { ScribberAddDefinitionDialogComponent } from '../scribber-add-definition-dialog/scribber-add-definition-dialog.component';

@Component({
  selector: 'app-scribber-template-definition',
  templateUrl: './scribber-template-definition.component.html',
  styleUrls: ['./scribber-template-definition.component.scss']
})
export class ScribberTemplateDefinitionComponent implements OnInit {


  public templateDefinitions: TemplateDefinition[] = [];

  constructor(private matDialog: MatDialog, private scribblerService: ScribblerService) { }

  ngOnInit(): void {
    /** 
    this.scribblerService.addTemplateDefinition({
      itemName: "Test",
      dataType: "Short Text",
    })
    this.scribblerService.addTemplateDefinition({
      itemName: "Test",
      dataType: "Short Text",
    })
    this.scribblerService.addTemplateDefinition({
      itemName: "Test",
      dataType: "Short Text",
    })
    this.scribblerService.addTemplateDefinition({
      itemName: "Test",
      dataType: "Short Text",
    })
    this.scribblerService.addTemplateDefinition({
      itemName: "Test",
      dataType: "Short Text",
    })**/
    this.scribblerService.templateDefinitionsObservable.subscribe((templateDefinitions: TemplateDefinition[]) => {
      this.templateDefinitions = templateDefinitions;
    })
  }

  openAddDefinitionDialog() {
    this.matDialog.open(ScribberAddDefinitionDialogComponent, {
      width: "400px"
    })
  }
}
