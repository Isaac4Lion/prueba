import { Component } from '@angular/core';
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  constructor() {}
  public async writeSecretFile (text: string) {
    console.log(text)
    await Filesystem.writeFile({
      path: './text.txt',
      data: text,
      directory: Directory.Documents,
      encoding: Encoding.UTF8,
    });
  }

}