import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgClass, NgIf, NgFor, CurrencyPipe, DatePipe } from '@angular/common';
import { DraftComponent } from './draft/draft.component';
import { PublishedComponent } from './published/published.component';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';
import { ProductService } from '../../../services/product.service';
import { ProductDto } from '../../../models/ProductModel';

@Component({
  selector: 'app-e-products-list',
  standalone: true,
  imports: [RouterLink, NgIf, NgClass, NgFor, PublishedComponent, DraftComponent, CurrencyPipe, DatePipe],
  templateUrl: './e-products-list.component.html',
  styleUrl: './e-products-list.component.scss'
})
export class EProductsListComponent implements OnInit {
  isToggled = false;
  currentTab = 'tab1';
  products: ProductDto[] = [];
  totalProducts: number = 0;
  currentPage: number = 1;
  limit: number = 100;

  constructor(
    public themeService: CustomizerSettingsService,
    private productService: ProductService
  ) {
    this.themeService.isToggled$.subscribe(isToggled => {
      this.isToggled = isToggled;
    });
  }

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getProducts({ page: this.currentPage, limit: this.limit }).subscribe({
      next: (response) => {
        this.products = response.products;
        this.totalProducts = response.total;
      },
      error: (error) => {
        console.error('Error fetching products:', error);
      }
    });
  }

  switchTab(event: MouseEvent, tab: string) {
    event.preventDefault();
    this.currentTab = tab;
  }

  deleteProduct(productId: number | undefined) {
    if (productId !== undefined) {
      // Proceed with deletion
    } else {
      console.error('Product ID is undefined');
    }
  }
}