import { Component, ViewChild } from '@angular/core';
import { ProductsComponent } from './products/products.component';
@Component({
  selector: 'myfirstapp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MyFirstProject';

  @ViewChild(ProductsComponent) productsComponent:ProductsComponent;
  renderval()  
    {
      this.productsComponent.renderValues();
      
    }
    rendervalById(id:string)  
    { 
      this.productsComponent.renderValuesById(id);
    }
}
