import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/auth.service';
import { Utente } from 'src/app/object/utente';
import { UtenteService } from 'src/app/services/utente.service';
import { ConfirmationDialogComponent } from 'src/app/shares/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-profilo',
  templateUrl: './profilo.component.html',
  styleUrls: ['./profilo.component.scss']
})
export class ProfiloComponent implements OnInit {
 
  utente:Utente;

  constructor(private authService:AuthenticationService,
              private userService:UtenteService,
              public router: Router,
              private dialog: MatDialog) { }

  ngOnInit(): void {
    const u = this.authService.getLoggedInUserName();
    this.userService.userDetails(u).subscribe((data)=>{this.utente=data});
  }
  
  elimina():void{
    const dialogRef = this.dialog.open(ConfirmationDialogComponent,{
      data:{
        message: 'Sei sicuro di voler cancellare il tuo profilo?',
        buttonText:{
          ok:'Cancella',
          cancel:'No'
        }
      }
    })

    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        this.userService.eliminaAccount().subscribe(() => {this.authService.logout();});
      }
    });
  }

}
