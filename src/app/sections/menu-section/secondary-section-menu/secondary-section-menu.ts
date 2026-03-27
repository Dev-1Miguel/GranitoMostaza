import { Component, inject, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Product } from '../../../models/product.interfaces';

@Component({
  selector: 'app-secondary-section-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './secondary-section-menu.html',
  styleUrls: ['./secondary-section-menu.css']
})
export class SecondarySectionMenuComponent implements OnInit {
  private readonly http = inject(HttpClient);
  private readonly dataUrl = 'assets/data/menu.json';

  allPostres = signal<Product[]>([]);
  visiblePostres = signal<Product[]>([]);
  itemsToShow = signal<number>(10); // Initially show 10 items (2 full rows of 5)

  ngOnInit(): void {
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
    console.log('Product added to cart:', product);
    // TODO: Implement cart logic or emit event
  }
}
