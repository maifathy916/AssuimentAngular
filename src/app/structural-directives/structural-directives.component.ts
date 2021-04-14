import { Component, OnInit } from '@angular/core';
import {DiscountOffers} from 'src/app/FirstFolder/Discounts';
import {Iproducts} from 'src/app/FirstFolder/Iproduct';
import {Icategory} from 'src/app/FirstFolder/Ictegory';
@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.scss']
})
export class StructuralDirectivesComponent implements OnInit {
  discount:DiscountOffers;
  CategoryList:Icategory[];
  ProductList:Iproducts[];
  constructor() {
    this.discount=DiscountOffers["No Discount"];
    this.CategoryList=[{
      ID:1,
      Name:"cat1"
     },{
      ID:2,
      Name:"cat2"
     },{
      ID:3,
      Name:"cat3"
     }];
     this.ProductList=[{
      ID:10,
      Name :"p1",
      Quantity : 3,
      Price : 2100,
        Img : "1.jpg"},{
          ID:20,
          Name :"p2",
          Quantity : 4,
          Price : 3000,
            Img : "2.jpg"}];
   }

  ngOnInit(): void {
  }

}
