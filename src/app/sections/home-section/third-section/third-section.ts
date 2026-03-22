import { NgFor } from "@angular/common";
import { Component, inject } from "@angular/core";
import { Product } from "./models/product.interfaces";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { MenuData } from "./models/menudata.interfaces";


@Component({
    selector: 'app-third-section',
    templateUrl: './third-section.html',
    styleUrls: ['./third-section.css'],
    imports: [NgFor],
    standalone: true,
})
export class ThirdSectionComponent {
  private http = inject(HttpClient);

  cart: Product[] = [];
  cartCount = 0;

  postres: Product[] = [];
  desayunos: Product[] = [];

  ngOnInit(): void {
    this.getMenuData().subscribe({
      next: (data) => {
        this.postres = data.postres;
        this.desayunos = data.desayunos;
      },
      error: (error) => {
        console.error("Error al cargar menu.json:", error);
      },
    });
  }

  getMenuData(): Observable<MenuData> {
    return this.http.get<MenuData>("assets/data/menu.json");
  }

  scroll(container: HTMLElement, direction: "left" | "right") {
    const amount = 340;
    container.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  }

  addToCart(product: Product) {
    this.cart.push(product);
    this.cartCount = this.cart.length;
  }

  trackById(index: number, item: Product) {
    return item.id;
  }
}