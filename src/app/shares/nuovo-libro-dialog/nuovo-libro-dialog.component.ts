import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Libro } from 'src/app/object/libro';
import { ImageService } from 'src/app/services/image.service';
import { LibroService } from 'src/app/services/libro.service';
import { ModifyDialogComponent } from '../modify-dialog/modify-dialog.component';

@Component({
  selector: 'app-nuovo-libro-dialog',
  templateUrl: './nuovo-libro-dialog.component.html',
  styleUrls: ['./nuovo-libro-dialog.component.scss']
})
export class NuovoLibroDialogComponent implements OnInit {
  uploadedImage: File;
  successo = false;
  errore = false;
  creaForm: FormGroup = this.formBuilder.group({
    titolo: new FormControl('',[Validators.required]),
    autore: new FormControl('',[Validators.required]),
    descrizione:new FormControl('',[Validators.required]),
    categoria:new FormControl('',[Validators.required]),
    isbn:new FormControl('',[Validators.required,Validators.pattern("^[0-9][A-Za-z0-9 -]*$")]),
    image: new FormControl('',[Validators.required]),
    display: new FormControl('',[Validators.required])
  })
  libro: any;
  
  constructor(private formBuilder: FormBuilder,
              private dialogRef: MatDialogRef<ModifyDialogComponent>,
              private libroService:LibroService,
              public router: Router,
              private imageService:ImageService) 
    {
      
     }

  ngOnInit(): void {
    this.dialogRef.updateSize('30%')
  }

  public onImageUpload(event:any) {    
    this.uploadedImage = event.target.files[0];
    this.creaForm.get("display")?.patchValue(this.uploadedImage.name);
  }
  performCreazione(){
    let libro:Libro = new Libro();
    libro.isbn = this.creaForm.value.isbn;
    libro.autore = this.creaForm.value.autore;
    libro.categoria = this.creaForm.value.categoria;
    libro.descrizione = this.creaForm.value.descrizione;
    libro.nome = this.creaForm.value.titolo;
    libro.imageName = this.uploadedImage.name;
    this.libroService.addLibro(libro).subscribe(()=>{
        console.log("ENTRATO");
    });
    const imageFormData = new FormData();
        imageFormData.append('image',this.uploadedImage,this.uploadedImage.name);
        this.imageService.uploadImage(imageFormData).subscribe((response) => {
          if (response.status === 200){
            this.successo = true;
            console.log(response);
    }})
    this.dialogRef.close(this.successo);
  }
}
