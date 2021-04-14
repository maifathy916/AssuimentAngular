import { Injectable } from '@angular/core';
import { Iproducts } from '../FirstFolder/Iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  ProductList:Iproducts[]=[];
 constructor() {
   this.ProductList=[
    {
      ID:10,
      Name :"p1",
      Quantity : 3,
      Price : 2100,
      Img : "1.jpg"
    },
      {
        ID :20,
        Name :"p2",
        Quantity : 4,
        Price : 4100,
        Img : "2.jpg"}
    
   ];
     }

GetAllProductes()
{
  return this.ProductList;
}
getProductById(id:any):any{
  for(var i=0;i<this.ProductList.length;i++){
    if(id==this.ProductList[i].ID)
      return this.ProductList[i];
  }
   if(isNaN(id))
      return null; 
}
}
