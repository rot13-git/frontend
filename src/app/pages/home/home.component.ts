import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { MatOptionSelectionChange } from '@angular/material/core';
import { PageEvent } from '@angular/material/paginator';
import { map, Observable, startWith } from 'rxjs';
import { Contenuto } from 'src/app/object/contenuto';
import { Libro } from 'src/app/object/libro';
import { ContenutoService } from 'src/app/services/contenuto.service';
import { LibroService } from 'src/app/services/libro.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  public datasource: any;
  public pageIndex=0;
  public pageSize=10;
  public length=100;
  public pageEvent: PageEvent;
  filteredOptions: Observable<Libro[]>;
  libro:Libro;
  libri:Libro[];
  contenuti:Contenuto[];

  atLeastOne = (validator: ValidatorFn, controls:string[] = []) => (
    group: FormGroup,
  ): ValidationErrors | null => {
    if(!controls){
      controls = Object.keys(group.controls)
    }
    let hasAtLeastOne = group && group.controls && controls
      .some(k => !validator(group.controls[k]));
    return hasAtLeastOne ? null : {
      atLeastOne: true,
    };
  };
  
  ricercaForm: FormGroup = this.formBuilder.group({
    tag: new FormControl('',[]),
    nomeLibro:new FormControl('',[])
  },{validator:this.atLeastOne(Validators.required,['tag','nomeLibro'])})
  
  constructor(private libroService:LibroService,
    private contenutoService:ContenutoService,
    private formBuilder: FormBuilder) { }

  reloadData(event:PageEvent): void{
    console.log(event);
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
    this.getResource();
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
  ngOnInit(): void {
    this.getResource();
    this.libroService.getByName("").subscribe(data => this.libri=data);
    this.filteredOptions = this.ricercaForm.get("nomeLibro")!.valueChanges.pipe(startWith(''),map(value => this.filterL(value || '')));
  }
  getResource() {
    this.contenutoService.getAllContenuti(this.pageSize,this.pageIndex).subscribe(contenuti=>this.contenuti = contenuti);
    this.datasource=this.contenuti;
    console.log(this.contenuti);
  }

  performSearch(){
    this.contenutoService.getContenuti(this.pageSize,this.pageIndex,this.ricercaForm.value.tag,this.ricercaForm.value.nomeLibro).subscribe(
      contenuti => this.contenuti = contenuti
    );
    this.datasource=this.contenuti;
  }
}
