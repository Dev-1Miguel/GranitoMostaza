import { Component, inject, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Product } from '../../../models/product.interfaces';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-secondary-section-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './secondary-section-menu.html',
  styleUrls: ['./secondary-section-menu.css']
})
export class SecondarySectionMenuComponent implements OnInit {
  private readonly http = inject(HttpClient);
  private cartService = inject(CartService);
  private readonly dataUrl = 'assets/data/menu.json';

  allPostres = signal<Product[]>([]);
  visiblePostres = signal<Product[]>([]);
  itemsToShow = signal<number>(10); // Initially show 10 items (2 full rows of 5)

  ngOnInit(): void {
    const isMobile = window.innerWidth < 640;
    this.itemsToShow.set(isMobile ? 5 : 10);

    this.http.get<{ postres: Product[] }>(this.dataUrl).subscribe({
      next: (data) => {
        this.allPostres.set(data.postres);
        this.updateVisibleItems();
      },
      error: (err) => console.error('Error loading desserts:', err)
    });
  }

  updateVisibleItems(): void {
    this.visiblePostres.set(this.allPostres().slice(0, this.itemsToShow()));
  }

  showMore(): void {
    this.itemsToShow.update(n => n + 5);
    this.updateVisibleItems();
  }

  get hasMore(): boolean {
    return this.itemsToShow() < this.allPostres().length;
  }

  onAddToCart(product: Product): void {
    this.incrementQuantity(product);
  }

  incrementQuantity(product: Product): void {
    this.cartService.addToCart(product);
    this.triggerAnimation(product.id);
  }

  decrementQuantity(product: Product): void {
    const qty = this.getQuantity(product.id);
    if (qty > 0) {
      this.cartService.updateQuantity(product.id, qty - 1);
    }
  }

  getQuantity(productId: number): number {
    return this.cartService.getItemQuantity(productId);
  }

  private animatingItems = new Set<number>();

  private triggerAnimation(itemId: number): void {
    this.animatingItems.add(itemId);
    setTimeout(() => this.animatingItems.delete(itemId), 500);
  }

  isAnimating(itemId: number): boolean {
    return this.animatingItems.has(itemId);
  }
}
