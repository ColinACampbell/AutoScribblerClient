import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScribblerComponent } from './scribbler/scribbler.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { DndDirective } from './directives/dnd.directive';
import { AddedDocumentComponent } from './scribbler/added-document/added-document.component';
import { HttpClientModule } from '@angular/common/http';
import { ScribblerService } from './services/scribbler.service';
import { ScribberTemplateDefinitionComponent } from './scribbler/scribber-template-definition/scribber-template-definition.component';
import { ScribberAddDefinitionDialogComponent } from './scribbler/scribber-add-definition-dialog/scribber-add-definition-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    ScribblerComponent,
    DndDirective,
    AddedDocumentComponent,
    ScribberTemplateDefinitionComponent,
    ScribberAddDefinitionDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    MatDialogModule,
    MatSelectModule,
    MatInputModule
  ],
  providers: [ScribblerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
