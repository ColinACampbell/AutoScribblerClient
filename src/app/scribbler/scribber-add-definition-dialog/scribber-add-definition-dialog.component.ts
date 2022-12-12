import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import TemplateDefinition from 'src/app/models/TemplateDefinition.model';
import { ScribblerService } from 'src/app/services/scribbler.service';
import { ScribblerComponent } from '../scribbler.component';
import {MatSnackBar} from '@angular/material/snack-bar';
import { FormControl, Validators, FormGroup } from '@angular/forms';

interface InfoType {
  name: string,
  description: string,
  value: InfoTypeEnum
}

enum InfoTypeEnum {
  LONG_TEXT,
  SHORT_TEXT,
  NUMBER,
  None,
}

@Component({
  selector: 'app-scribber-add-definition-dialog',
  templateUrl: './scribber-add-definition-dialog.component.html',
  styleUrls: ['./scribber-add-definition-dialog.component.scss']
})
export class ScribberAddDefinitionDialogComponent implements OnInit {

  public infoTypes: InfoType[] = [];
  public itemName?: string;

  public selectedInfoType: string = "";
  public SHORT_TEXT_TYPE: InfoTypeEnum = InfoTypeEnum.SHORT_TEXT;
  public LONG_TEXT: InfoTypeEnum = InfoTypeEnum.LONG_TEXT;
  public NUMBER: InfoTypeEnum = InfoTypeEnum.NUMBER

  templateDefinitionForm : FormGroup = new FormGroup({});

  constructor(private scribblerService: ScribblerService,private dialogRef:MatDialogRef<ScribblerComponent>) { }

  ngOnInit(): void {
    this.infoTypes = [
      { name: "Number", description: "Description", value: InfoTypeEnum.NUMBER },
      { name: "Short Text", description: "Description", value: InfoTypeEnum.SHORT_TEXT },
      { name: "Long Text", description: "Description", value: InfoTypeEnum.LONG_TEXT }
    ]

    this.templateDefinitionForm = new FormGroup({
      itemDataType: new FormControl('', [Validators.required]),
      itemName: new FormControl('',[Validators.required])
    })
    
  }

  handleTypeSelectionChange($event: any) {
    this.selectedInfoType = $event.value as string
  }


  addItem()
  {
    const templateDefinition : TemplateDefinition = {
      dataType : this.selectedInfoType,
      itemName:this.itemName as string
    }

    if (this.templateDefinitionForm.valid)
    {
      this.scribblerService.addTemplateDefinition(templateDefinition);
      this.dialogRef.close()
    }
  }
}
