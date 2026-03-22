import { Component, OnInit, inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { Product } from "../../../models/product.interfaces";
import { MenuData } from "../../../models/menudata.interfaces";
import { MenuCategoryComponent } from "../../../components/menu-category/menu-category.component";

@Component({
  selector: "app-third-section",
  standalone: true,
  imports: [MenuCategoryComponent],
  templateUrl: "./third-section.html",
  styleUrls: ["./third-section.css"],
})
export class ThirdSectionComponent implements OnInit {
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

  addToCart(product: Product): void {
    this.cart.push(product);
    this.cartCount = this.cart.length;
  }
}