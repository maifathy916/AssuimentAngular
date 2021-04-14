import { Component, OnInit } from '@angular/core';
import {Iproducts} from 'src/app/FirstFolder/Iproduct';
import {DiscountOffers} from 'src/app/FirstFolder/Discounts';

@Component({
  selector: 'app-discount',
  templateUrl: './discount.component.html',
  styleUrls: ['./discount.component.scss']
})
export class DiscountComponent implements OnInit {
  ProductList:Iproducts[];
  discount:DiscountOffers;
  constructor() { 
    this.ProductList=this.ProductList = [
      {ID: 1, Name: 'Lenovo X230', Quantity: 1, Price: 100,Img:'1.jpg'},
    {ID: 2, Name: 'Dell Latitude', Quantity: 2, Price: 200,Img:"1.jpg"},
    {ID: 3, Name: 'Lenovo Tab 2', Quantity: 10, Price: 1000, Img:"1.jpg"},
    {ID: 4, Name: 'IPad', Quantity: 20, Price: 2000, Img:"1.jpg"},
    {ID: 5, Name: 'Smasung S10', Quantity: 30, Price: 300, Img:"1.jpg"},
    {ID: 6, Name: 'Iphone 9', Quantity: 300, Price: 3000, Img:"1.jpg"}
  ];
  this.discount=DiscountOffers["10%"];
}

  ngOnInit(): void {
  }

}
