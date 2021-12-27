import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import TemplateDefinition from '../models/TemplateDefinition.model';

@Injectable({
  providedIn: 'root'
})
export class ScribblerService {

  private templateDefinitions = new BehaviorSubject<TemplateDefinition[]>([])
  public templateDefinitionsObservable = this.templateDefinitions.asObservable();

  constructor(private httpClient: HttpClient) { }

  public addTemplateDefinition(templateDefinition:TemplateDefinition)
  {
    this.templateDefinitions.value.push(templateDefinition);
    this.templateDefinitions.next(this.templateDefinitions.value);
  }

  public async submitDocuments(files: File[]): Promise<Observable<HttpResponse<Blob>>> {
    const dataArray: string[] = [];

    for (let i = 0; i < files.length; i++) {
      const base64 = await this.getBase64(files[i]) as string;
      dataArray.push(base64);
    }

    await console.log(dataArray);
    return this.httpClient.post<Blob>('http://localhost:3000/api/scribbler/', {
      files: dataArray
    }, {
      observe: "response",
      responseType:"blob" as 'json'
    })
  }

  private getBase64(file: File): Promise<string | ArrayBuffer | null> {
    return new Promise((resolve, reject) => {
      let me = this;
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function () {
        //me.modelvalue = reader.result;
        resolve(reader.result)
      };
      reader.onerror = function (error) {
        reject(error)
        console.log('Error: ', error);
      };
    })
  }
}
