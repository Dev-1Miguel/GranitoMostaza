import { Component, inject, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Product } from '../../../models/product.interfaces';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-fourth-section-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fourth-section-menu.html',
  styleUrls: ['./fourth-section-menu.css']
})
export class FourthSectionMenuComponent implements OnInit {
  private readonly http = inject(HttpClient);
  private cartService = inject(CartService);
  private readonly dataUrl = 'assets/data/menu.json';

  allBebidas = signal<Product[]>([]);
  visibleBebidas = signal<Product[]>([]);
  itemsToShow = signal<number>(10); // Initially show 10 items (2 full rows of 5)

  ngOnInit(): void {
    this.http.get<{ bebidas: Product[] }>(this.dataUrl).subscribe({
      next: (data) => {
        this.allBebidas.set(data.bebidas || []);
        this.updateVisibleItems();
      },
      error: (err) => console.error('Error loading drinks:', err)
    });
  }

  updateVisibleItems(): void {
    this.visibleBebidas.set(this.allBebidas().slice(0, this.itemsToShow()));
  }

  showMore(): void {
    this.itemsToShow.update(n => n + 5);
    this.updateVisibleItems();
  }

  get hasMore(): boolean {
    return this.itemsToShow() < this.allBebidas().length;
  }

  onAddToCart(product: Product): void {
    this.cartService.addToCart(product);
    this.triggerAnimation(product.id);
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
