import { Component } from '@angular/core';
import { BoardComponent } from '../../components/board/board.component';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  products: any[] = [];

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.productService.getProducts().subscribe(products => {
      this.products = products as any[];
      console.log(this.products);
      
    });
  }
}
