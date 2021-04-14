import { Component, OnInit } from '@angular/core';

import {Iproducts} from 'src/app/FirstFolder/Iproduct';
import {DiscountOffers} from 'src/app/FirstFolder/Discounts';

@Component({
  selector: 'app-no-discount',
  templateUrl: './no-discount.component.html',
  styleUrls: ['./no-discount.component.scss']
})
export class NoDiscountComponent implements OnInit {
  ProductList: Iproducts[] = [];
  Discount:DiscountOffers;

  constructor() { 
    this.ProductList = [{ID: 1, Name: 'ABC X230', Quantity: 1, Price: 100,Img:"1.jpg"},
    {ID: 2, Name: 'ABC2 Latitude', Quantity: 2, Price: 200,Img:"1.jpg"},
    {ID: 3, Name: 'Lenovo Tab 2', Quantity: 10, Price: 1000, Img:"1.jpg"}],
    this.Discount = DiscountOffers['No Discount'];
  }

  ngOnInit(): void {
  }

}
