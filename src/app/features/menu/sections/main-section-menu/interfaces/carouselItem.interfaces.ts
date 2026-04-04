export interface CarouselItem {
  id: number;
  title: string;
  image: string;
  description?: string;
}

export interface CarouselResponse {
  carouselItems: CarouselItem[];
}