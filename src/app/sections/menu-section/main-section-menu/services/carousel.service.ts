import { Injectable, inject } from "@angular/core";
import { map } from "rxjs";
import { CarouselResponse } from "../interfaces/carouselItem.interfaces";
import { MenuDataService } from "../../../../services/menu-data.service";

@Injectable({
    providedIn: 'root'
})
export class CarouselService {
    private readonly menuDataService = inject(MenuDataService);

    getCarouselItems() {
        return this.menuDataService.getCarouselItems().pipe(
            map((carouselItems): CarouselResponse => ({ carouselItems }))
        );
    }
}
