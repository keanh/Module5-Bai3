// @ts-ignore
import { Component, OnInit } from '@angular/core';

// @ts-ignore
@Component({
  selector: 'app-show-pet',
  templateUrl: './show-pet.component.html',
  styleUrls: ['./show-pet.component.scss']
})
export class ShowPetComponent implements OnInit {
  petName='puppie';
  petImage ='http://yourdost-blog-images.s3-ap-southeast-1.amazonaws.com/wp-content/uploads/2016/01/03165939/Dogs.jpg';
  constructor() { }

  ngOnInit(): void {
  }

  updateName(name){
    this.petName = name;
  }

  updateImage(image){
    this.petImage = image;
  }
}
