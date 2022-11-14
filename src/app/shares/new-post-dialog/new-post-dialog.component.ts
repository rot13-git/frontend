import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ModifyDialogComponent } from '../modify-dialog/modify-dialog.component';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { map, Observable, startWith } from 'rxjs';
import { Libro } from 'src/app/object/libro';
import { PageEvent } from '@angular/material/paginator';
import { LibroService } from 'src/app/services/libro.service';
import { MatOptionSelectionChange } from '@angular/material/core';
import { ContenutoService } from 'src/app/services/contenuto.service';
import { RequestContenuto } from 'src/app/object/request-contenuto';
import { Router } from '@angular/router';
@Component({
  selector: 'app-new-post-dialog',
  templateUrl: './new-post-dialog.component.html',
  styleUrls: ['./new-post-dialog.component.scss']
})
export class NewPostDialogComponent implements OnInit {

  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  titolo:string;
  tags:string[];
  public pageEvent: PageEvent;
  filteredOptions: Observable<Libro[]>;
  libro:Libro;
  libri:Libro[];
  private requestContenuto:RequestContenuto;


  modificaForm: FormGroup = this.formBuilder.group({
    titolo: new FormControl('',[Validators.required]),
    tag: new FormControl('',[Validators.required]),
    contenuto:new FormControl('',[Validators.required]),
    nomeLibro:new FormControl('',[Validators.required])
  })
  
  constructor(private formBuilder: FormBuilder,
              private dialogRef: MatDialogRef<ModifyDialogComponent>,
              private libroService:LibroService,
              private contenutoService:ContenutoService,
              public router: Router) 
    {
      
     }

  ngOnInit(): void 
  {
    this.tags = [];
    this.libroService.getByName("").subscribe(data => this.libri=data);
    this.filteredOptions = this.modificaForm.get("nomeLibro")!.valueChanges.pipe(startWith(''),map(value => this.filterL(value || '')));
    this.dialogRef.updateSize('30%');
  }

  filterL(value:string){
    const r = value.toLocaleLowerCase()
    return this.libri.filter(libro => libro.nome.toLocaleLowerCase().includes(r));
  }
  selectOption(optionChangedEvent: MatOptionSelectionChange) {
    if(optionChangedEvent.isUserInput){
      this.libro = optionChangedEvent.source.value;
      const r = this.libri
    }
  }
  remove(tag:string):void{
    const index = this.tags.indexOf(tag);
    if(index >=0){
      this.tags.splice(index,1);
    }
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      if(!this.tags.includes(value)){
        this.tags.push(value);
      }
    }

    // Clear the input value
    event.chipInput!.clear();
  }
  aggiungiLibro():void{
    this.dialogRef.close();
    this.router.navigate(['/book']);
  }
  performCreazione():void{
    this.requestContenuto = new RequestContenuto();
    this.requestContenuto.setLibroisbn(this.modificaForm.get('nomeLibro')?.value);
    this.requestContenuto.setTag(this.modificaForm.get('tag')?.value);
    this.requestContenuto.setContenuto(this.modificaForm.get('contenuto')?.value);
    this.requestContenuto.setTitolo(this.modificaForm.get('titolo')?.value);

    this.contenutoService.addContenuto(this.requestContenuto).subscribe((contenuto)=>{console.log(contenuto)});
    this.dialogRef.close();
    console.log(this.requestContenuto);
  }

}
