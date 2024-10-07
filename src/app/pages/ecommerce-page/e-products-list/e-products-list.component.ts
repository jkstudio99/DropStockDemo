import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgClass, NgIf, NgFor, CurrencyPipe, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';

import { DraftComponent } from './draft/draft.component';
import { PublishedComponent } from './published/published.component';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';
import { ProductService } from '../../../services/product.service';
import { ProductDto } from '../../../models/ProductModel';

@Component({
  selector: 'app-e-products-list',
  standalone: true,
  imports: [RouterLink, NgIf, NgClass, NgFor, FormsModule, PublishedComponent, DraftComponent, CurrencyPipe, DatePipe],
  templateUrl: './e-products-list.component.html',
  styleUrls: ['./e-products-list.component.scss']
})
export class EProductsListComponent implements OnInit, OnDestroy {
  private unsubscribe$ = new Subject<void>();

  isToggled = false;
  currentTab = 'tab1';
  products: ProductDto[] = [];
  totalProducts = 0;
  currentPage = 1;
  readonly ITEMS_PER_PAGE = 10;
  searchQuery = '';

  constructor(
    public themeService: CustomizerSettingsService,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.subscribeToThemeToggle();
    this.loadProducts();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  private subscribeToThemeToggle(): void {
    this.themeService.isToggled$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(isToggled => this.isToggled = isToggled);
  }

  loadProducts(): void {
    this.productService.getProducts({
      page: this.currentPage,
      limit: this.ITEMS_PER_PAGE,
      searchQuery: this.searchQuery
    }).subscribe({
      next: this.handleProductsResponse.bind(this),
      error: this.handleError.bind(this)
    });
  }

  private handleProductsResponse(response: { products: ProductDto[], total: number }): void {
    this.products = response.products;
    this.totalProducts = response.total;
  }

  private handleError(error: any): void {
    console.error('An error occurred:', error);
    // TODO: Implement proper error handling, e.g., show user-friendly message
  }

  switchTab(event: MouseEvent, tab: string): void {
    event.preventDefault();
    this.currentTab = tab;
  }

  deleteProduct(productId: number): void {
    if (!this.confirmDeletion()) return;

    this.productService.deleteProduct(productId).subscribe({
      next: () => this.onDeleteSuccess(),
      error: this.handleError.bind(this)
    });
  }

  private confirmDeletion(): boolean {
    return confirm('Are you sure you want to delete this product?');
  }

  private onDeleteSuccess(): void {
    this.loadProducts();
    // TODO: Show success message to user
  }

  searchProducts(): void {
    this.currentPage = 1;
    this.loadProducts();
  }

  loadPage(page: number): void {
    this.currentPage = page;
    this.loadProducts();
  }

  getPaginationArray(): number[] {
    const pageCount = Math.ceil(this.totalProducts / this.ITEMS_PER_PAGE);
    return Array.from({ length: pageCount }, (_, i) => i + 1);
  }
}