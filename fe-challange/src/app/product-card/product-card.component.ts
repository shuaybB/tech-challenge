import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../Models/Product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() Product: Product
  constructor() { }

  ngOnInit(): void {
  }

}
