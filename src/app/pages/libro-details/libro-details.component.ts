import { Component, Input, OnInit } from '@angular/core';
import { Libro } from 'src/app/object/libro';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-libro-details',
  templateUrl: './libro-details.component.html',
  styleUrls: ['./libro-details.component.scss']
})
export class LibroDetailsComponent implements OnInit {

  @Input() libro:Libro;
  dbImage: any;
  constructor(private imageService:ImageService) { }

  ngOnInit(): void {
    this.imageService.getImageByName(this.libro.imageName).subscribe((res) =>{
      this.dbImage = 'data:image/*;base64,'+ res.image;
    });

    console.log(this.libro.imageName);

  }

}
