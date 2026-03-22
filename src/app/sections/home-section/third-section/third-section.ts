import { NgFor } from "@angular/common";
import { Component } from "@angular/core";
import { Product } from "./models/product.interfaces";


@Component({
    selector: 'app-third-section',
    templateUrl: './third-section.html',
    styleUrls: ['./third-section.css'],
    imports: [NgFor],
})
export class ThirdSectionComponent {

    cart: Product[] = [];
    cartCount = 0;

    postres: Product[] = [
    {
      id: 1,
      name: 'Cheesecake de frutos rojos',
      description: 'Suave, cremoso y con una capa ligera de frutos rojos.',
      price: 4.50,
      image: '/images/postres/cheesecake.jpg',
    },
    {
      id: 2,
      name: 'Tiramisú artesanal',
      description: 'Capas delicadas de café, cacao y crema mascarpone.',
      price: 5.00,
      image: '/images/postres/tiramisu.jpg',
    },
    {
      id: 3,
      name: 'Croissant dulce',
      description: 'Hojaldre ligero con relleno suave y acabado dorado.',
      price: 3.75,
      image: '/images/postres/croissant.jpg',
    },
    {
      id: 4,
      name: 'Brownie de chocolate',
      description: 'Textura intensa, húmeda y perfecta para acompañar café.',
      price: 4.25,
      image: '/images/postres/brownie.jpg',
    },
  ];

  desayunos: Product[] = [
    {
      id: 1,
      name: 'Toast de aguacate',
      description: 'Pan crujiente con aguacate fresco y topping especial.',
      price: 5.50,
      image: '/images/desayunos/toast.jpg',
    },
    {
      id: 2,
      name: 'Waffles clásicos',
      description: 'Servidos con frutas frescas y un toque dulce equilibrado.',
      price: 6.00,
      image: '/images/desayunos/waffles.jpg',
    },
    {
      id: 3,
      name: 'Sándwich desayuno',
      description: 'Pan artesanal, huevo, queso y mezcla de sabores suaves.',
      price: 5.75,
      image: '/images/desayunos/sandwich.jpg',
    },
    {
      id: 4,
      name: 'Bowl de yogur y frutas',
      description: 'Ligero, fresco y perfecto para comenzar la mañana.',
      price: 4.90,
      image: '/images/desayunos/bowl.jpg',
    },
  ];

  scroll(container: HTMLElement, direction: 'left' | 'right') {
    const amount = 340;
    container.scrollBy({
      left: direction === 'left' ? -amount : amount,
      behavior: 'smooth',
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