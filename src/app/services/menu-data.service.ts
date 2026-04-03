import { inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map, Observable, shareReplay } from "rxjs";
import { MenuData } from "../models/menudata.interfaces";
import { Product } from "../models/product.interfaces";
import { CarouselItem } from "../sections/menu-section/main-section-menu/interfaces/carouselItem.interfaces";

interface MenuCatalogData extends MenuData {
  bebidas: Product[];
  carouselItems: CarouselItem[];
}

@Injectable({
  providedIn: "root",
})
export class MenuDataService {
  private readonly http = inject(HttpClient);
  private readonly dataUrl = "assets/data/menu.json";

  private readonly menuDataRequest$ = this.http
    .get<MenuCatalogData>(this.dataUrl)
    .pipe(shareReplay({ bufferSize: 1, refCount: true }));

  getMenuData(): Observable<MenuCatalogData> {
    return this.menuDataRequest$;
  }

  getCategoryItems(
    category: "postres" | "desayunos" | "bebidas"
  ): Observable<Product[]> {
    return this.menuDataRequest$.pipe(map((data) => data[category] ?? []));
  }

  getCarouselItems(): Observable<CarouselItem[]> {
    return this.menuDataRequest$.pipe(
      map((data) => data.carouselItems ?? [])
    );
  }
}
