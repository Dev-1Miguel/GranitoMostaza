import { Injectable, inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { CarouselResponse } from "../interfaces/carouselItem.interfaces";

@Injectable({
    providedIn: 'root'
})
export class CarouselService {

    private readonly request = inject(HttpClient);

    getCarouselItems() {
        return this.request.get<CarouselResponse>('assets/data/menu.json');
    }

}