import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Contenuto } from 'src/app/object/contenuto';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
@Component({
  selector: 'app-modify-dialog',
  templateUrl: './modify-dialog.component.html',
  styleUrls: ['./modify-dialog.component.scss']
})
export class ModifyDialogComponent implements OnInit {

  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  titolo:string;
  tags:string[];
  modificaForm: FormGroup = this.formBuilder.group({
    titolo: new FormControl('',[]),
    tag: new FormControl('',[]),
    contenuto:new FormControl('',[])
  }
  )
  constructor(private formBuilder: FormBuilder,
              @Inject(MAT_DIALOG_DATA) public data: Contenuto,
              private dialogRef: MatDialogRef<ModifyDialogComponent>) 
  {
    
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
  
  ngOnInit(): void {
    
    let ciao = JSON.parse(JSON.stringify(this.data.contenuto));
    console.log();
    this.tags = [ciao["tag"],"prova"];
    this.modificaForm.get('titolo')?.setValue(ciao["titolo"]);
    this.modificaForm.get('contenuto')?.setValue(ciao["contenuto"]);
    this.dialogRef.updateSize('30%')
  }

  performModifiche(){
    this.modificaForm.get('tag')?.setValue(this.tags);
    this.dialogRef.close(this.modificaForm.value);
  }
}
