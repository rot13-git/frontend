import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Contenuto } from 'src/app/object/contenuto';
import { ContenutoService } from 'src/app/services/contenuto.service';
import { ImageService } from 'src/app/services/image.service';
import { ConfirmationDialogComponent } from 'src/app/shares/confirmation-dialog/confirmation-dialog.component';
import { ModifyDialogComponent } from 'src/app/shares/modify-dialog/modify-dialog.component';

@Component({
  selector: 'app-contenuto-details',
  templateUrl: './contenuto-details.component.html',
  styleUrls: ['./contenuto-details.component.scss']
})
export class ContenutoDetailsComponent implements OnInit {

  @Input() contenuto:Contenuto;
  @Input() isPersonal:boolean;
  dbImage: any;
  constructor(private dialog: MatDialog,
              private contenutoService:ContenutoService,
              private imageService:ImageService) { }
  message: string = "";
  ngOnInit(): void {
    this.imageService.getImageByName(this.contenuto.libroEntity.imageName).subscribe((res) =>{
      this.dbImage = 'data:image/*;base64,'+ res.image;
    });
  }

  modifica():void{
    const dialogRef = this.dialog.open(ModifyDialogComponent,{
      data:{
        contenuto:this.contenuto
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log();
      this.contenuto.titolo=result.titolo;
      this.contenuto.contenuto=result.contenuto;
      console.log(result);
      console.log(this.contenuto);
      this.contenutoService.modifyContenuto(this.contenuto).subscribe((contenuto) => {console.log(contenuto);this.message="Contenuto modificato con successo";window.location.reload();});
    })
  }
  eliminate():void{
    const dialogRef = this.dialog.open(ConfirmationDialogComponent,{
      data:{
        message: 'Sei sicuro di voler cancellare il tuo post?',
        buttonText:{
          ok:'Cancella',
          cancel:'No'
        }
      }
    })
    
    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        this.contenutoService.deleteContenuto(this.contenuto).subscribe(() => {this.message="Offerta eliminata con successo";window.location.reload();});
      }
    });
  }

}
