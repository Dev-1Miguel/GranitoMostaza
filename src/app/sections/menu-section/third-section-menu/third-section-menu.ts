import { Component, inject, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Product } from '../../../models/product.interfaces';

@Component({
  selector: 'app-third-section-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './third-section-menu.html',
  styleUrls: ['./third-section-menu.css']
})
export class ThirdSectionMenuComponent implements OnInit {
  private readonly http = inject(HttpClient);
  private readonly dataUrl = 'assets/data/menu.json';

  allDesayunos = signal<Product[]>([]);
  visibleDesayunos = signal<Product[]>([]);
  itemsToShow = signal<number>(10); // Initially show 10 items (2 full rows of 5)

  ngOnInit(): void {
    this.http.get<{ desayunos: Product[] }>(this.dataUrl).subscribe({
      next: (data) => {
        this.allDesayunos.set(data.desayunos || []);
        this.updateVisibleItems();
      },
      error: (err) => console.error('Error loading breakfasts:', err)
    });
  }

  updateVisibleItems(): void {
    this.visibleDesayunos.set(this.allDesayunos().slice(0, this.itemsToShow()));
  }

  showMore(): void {
    this.itemsToShow.update(n => n + 5);
    this.updateVisibleItems();
  }

  get hasMore(): boolean {
    return this.itemsToShow() < this.allDesayunos().length;
  }

  onAddToCart(product: Product): void {
    console.log('Product added to cart:', product);
  }
}