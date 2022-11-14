import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { Libro } from 'src/app/object/libro';
import { LibroService } from 'src/app/services/libro.service';
import { NuovoLibroDialogComponent } from 'src/app/shares/nuovo-libro-dialog/nuovo-libro-dialog.component';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  libri:Libro[];
  public datasource: any;
  public pageIndex=0;
  public pageSize=10;
  public length=100;
  risultato:boolean;
  constructor(private libroService:LibroService,
              private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getResource();
  }

  reloadData(event:PageEvent): void{
    console.log(event);
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
    this.getResource();
  }
  getResource() {
    this.libroService.getAllLibri().subscribe(data => this.libri=data);
    this.datasource=this.libri;
  }
  
  nuovo(){
    const dialogRef = this.dialog.open(NuovoLibroDialogComponent,{});
    dialogRef.afterClosed().subscribe((successo:boolean)=>{
      this.risultato=successo;
      window.location.reload();
      this.getResource();
    });
  }
}
