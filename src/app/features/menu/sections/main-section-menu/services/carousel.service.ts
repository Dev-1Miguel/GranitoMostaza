import { Injectable, inject } from "@angular/core";
import { Observable, map } from "rxjs";
import { CarouselItem, CarouselResponse } from "../interfaces/carouselItem.interfaces";
import { MenuDataService } from "../../../menu-data.service";

@Injectable({
    providedIn: 'root'
})
export class CarouselService {
    private readonly menuDataService = inject(MenuDataService);

    getCarouselItems(): Observable<CarouselResponse> {
        return this.menuDataService.getCarouselItems().pipe(
            map((carouselItems: CarouselItem[]): CarouselResponse => ({ carouselItems }))
        );
    }
}
