import { Component } from '@angular/core';
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  inputText: string = '';

  constructor() {}
  
  public async writeSecretFile(text: string) {
    try {
      console.log('Texto a guardar:', text);
      await Filesystem.writeFile({
        path: 'text.txt', // Usa solo el nombre del archivo
        data: text,
        directory: Directory.Documents,
        encoding: Encoding.UTF8,
      });
      console.log('Archivo guardado correctamente');
    } catch (error) {
      console.error('Error al guardar el archivo:', error);
    }
  }
}
