import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ScribberAddDefinitionDialogComponent } from '../scribber-add-definition-dialog/scribber-add-definition-dialog.component';

@Component({
  selector: 'app-scribber-template-definition',
  templateUrl: './scribber-template-definition.component.html',
  styleUrls: ['./scribber-template-definition.component.scss']
})
export class ScribberTemplateDefinitionComponent implements OnInit {

  constructor(private matDialog:MatDialog) { }

  ngOnInit(): void {
  }


  openAddDefinitionDialog()
  {
    this.matDialog.open(ScribberAddDefinitionDialogComponent,{
      //width:"500px"
    })
  }
}
