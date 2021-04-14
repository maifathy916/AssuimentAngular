import { Component, OnInit } from '@angular/core';
import {DiscountOffers} from 'src/app/FirstFolder/Discounts';
import {Iproducts} from 'src/app/FirstFolder/Iproduct';
import {Icategory} from 'src/app/FirstFolder/Ictegory';
import { ProductServiceService } from '../Services/product-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit
 {

discount:DiscountOffers;
name:string;
Store_logo:string;
ProductList:Iproducts[]=[];
CategoryList:Icategory[];
ClientName:string;
IsPurshased:boolean;



  constructor(private proServ:ProductServiceService,private activatedRoute:ActivatedRoute,private router:Router) { 
   this.discount=DiscountOffers['No Discount'];
   this.name="first";
   this.Store_logo="../assets/3.jpg";
  //  this.ProductList=[{
  //    ID:10,
  //   Name :"p1",
  //  Quantity : 3,
  //    Price : 2100,
  //    Img : "1.jpg"}];
   this.CategoryList=[{
    ID:1,
    Name:"cat1"
   }];
   this.ClientName="test";
   this.IsPurshased=true;
  }
  show(IsPurshased:string){
    if(IsPurshased=="true")
        this.IsPurshased=false
    else
      this.IsPurshased=true
      this.discount=DiscountOffers['10%'];
  }
  ngOnInit(): void {
    //this.ProductById=this.proServ.GetProductByID(Id:Number);

  }
renderValues()
{
      this.ProductList=this.proServ.GetAllProductes();
}
renderValuesById(id:string){​​​​​​​​
this.ProductList=[];
var prod= this.proServ.getProductById(id);
if(prod!=null){​​​​​​​​
this.ProductList.push(prod);
  }​​​​​​​​ 
}
Discount(){
  this.router.navigate(['withDiscount'],{relativeTo:this.activatedRoute})
  
}
WithoutDiscount()
{
  this.router.navigate(['withOutDiscount'],{relativeTo:this.activatedRoute})
 
}
}
