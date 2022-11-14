import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './shares/header/header.component';
import { FooterComponent } from './shares/footer/footer.component';
import { SidebarComponent } from './shares/sidebar/sidebar.component';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatCardModule} from '@angular/material/card';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { HomeComponent } from './pages/home/home.component';
import {MatPaginatorModule} from '@angular/material/paginator'; 
import {MatDividerModule} from '@angular/material/divider';
import { LoginComponent } from './pages/login/login.component';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button'; 
import { HttpClientModule } from '@angular/common/http';
import {MatChipsModule} from '@angular/material/chips'; 
import { ContenutoDetailsComponent } from './pages/contenuto-details/contenuto-details.component';
import {MatIconModule} from '@angular/material/icon';
import { ProfiloComponent } from './pages/profilo/profilo.component';
import { PostComponent } from './pages/post/post.component'; 
import {MatDialogModule} from '@angular/material/dialog';
import { ConfirmationDialogComponent } from './shares/confirmation-dialog/confirmation-dialog.component';
import { ModifyDialogComponent } from './shares/modify-dialog/modify-dialog.component';
import { NewPostDialogComponent } from './shares/new-post-dialog/new-post-dialog.component'; 
import {MatAutocompleteModule} from '@angular/material/autocomplete'; 
import {ScrollingModule} from '@angular/cdk/scrolling'; 
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import { BookComponent } from './pages/book/book.component';
import { LibroDetailsComponent } from './pages/libro-details/libro-details.component';
import { NuovoLibroDialogComponent } from './shares/nuovo-libro-dialog/nuovo-libro-dialog.component'; 
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    HomeComponent,
    LoginComponent,
    ContenutoDetailsComponent,
    ProfiloComponent,
    PostComponent,
    ConfirmationDialogComponent,
    ModifyDialogComponent,
    NewPostDialogComponent,
    BookComponent,
    LibroDetailsComponent,
    NuovoLibroDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatProgressBarModule,
    MatPaginatorModule,
    MatDividerModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
    MatChipsModule,
    MatIconModule,
    MatDialogModule,
    MatAutocompleteModule,
    ScrollingModule,
    MatTabsModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
