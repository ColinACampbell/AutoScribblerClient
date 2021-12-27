import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { observable } from 'rxjs';
import { ScribblerService } from '../services/scribbler.service';

@Component({
  selector: 'app-scribbler',
  templateUrl: './scribbler.component.html',
  styleUrls: ['./scribbler.component.scss']
})
export class ScribblerComponent implements OnInit {

  addedDocuments: File[] = [];

  constructor(private scribblerService: ScribblerService) { }

  ngOnInit(): void {
    const file = new File([], "test")
    //this.addedDocuments.push(file);
  }

  handleFileDrop($event: any) {
    const files = $event as File[];

    this.addedDocuments.push(...files);
  }

  getFileName(response: HttpResponse<Blob>) {
    let filename: string;
    try {
      const contentDisposition: string | null = response.headers.get('content-disposition');
      const r = /(?:filename=")(.+)(?:;")/
      filename = r.exec(contentDisposition as string)![1];
    }
    catch (e) {
      filename = 'myfile.zip'
    }
    return filename
  }

  async submitDocuments() {
    const observable = await this.scribblerService.submitDocuments(this.addedDocuments);
    observable.subscribe((response: HttpResponse<Blob>) => {
      console.log(response.status)
      let filename: string = this.getFileName(response as HttpResponse<Blob>)
      let binaryData = [];
      binaryData.push(response.body);
      let downloadLink = document.createElement('a');
      downloadLink.href = window.URL.createObjectURL(new Blob(binaryData as BlobPart[], { type: 'blob' }));
      downloadLink.setAttribute('download', filename);
      document.body.appendChild(downloadLink);
      downloadLink.click();
    })
  }
}
