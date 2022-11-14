import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { AuthenticationService } from 'src/app/auth.service';
import { Contenuto } from 'src/app/object/contenuto';
import { ContenutoService } from 'src/app/services/contenuto.service';
import { ModifyDialogComponent } from 'src/app/shares/modify-dialog/modify-dialog.component';
import { NewPostDialogComponent } from 'src/app/shares/new-post-dialog/new-post-dialog.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  contenuti:Contenuto[];
  public datasource: any;
  public pageIndex=0;
  public pageSize=10;
  public length=100;
  constructor(private contenutoService:ContenutoService,
              private authServie:AuthenticationService,
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
  nuovo():void{
    const dialogRef = this.dialog.open(NewPostDialogComponent,{});
    dialogRef.afterClosed().subscribe(()=>{window.location.reload()});
  }
  getResource() {
    this.contenutoService.getContenutiUtente(this.authServie.getLoggedInUserName(),this.pageSize,this.pageIndex).subscribe(contenuti=>this.contenuti = contenuti);
    this.datasource=this.contenuti;
    console.log(this.contenuti);
  }

}
