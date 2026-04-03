import { Injectable, signal, computed } from "@angular/core";
import { Product, CartItem } from "../models/product.interfaces";

@Injectable({
  providedIn: "root",
})
export class CartService {
  private cartItems = signal<CartItem[]>([]);
  isCartOpen = signal(false);
  private readonly storageKey = "cartItems";

  // Selectors
  items = computed(() => this.cartItems());
  quantityMap = computed(
    () => new Map(this.cartItems().map((item) => [item.id, item.quantity]))
  );
  totalItems = computed(() =>
    this.cartItems().reduce((acc, item) => acc + item.quantity, 0)
  );
  subtotal = computed(() =>
    this.cartItems().reduce((acc, item) => acc + item.price * item.quantity, 0)
  );
  shipping = computed(() => (this.subtotal() > 0 ? 5.0 : 0)); // Fixed shipping of $5 if there are items
  tax = computed(() => this.subtotal() * 0.15); // 15% tax
  total = computed(() => this.subtotal() + this.shipping() + this.tax());

  getItemQuantity(productId: number): number {
    const item = this.cartItems().find((i) => i.id === productId);
    return item ? item.quantity : 0;
  }

  constructor() {
    this.loadCart();
  }

  addToCart(product: Product): void {
    this.cartItems.update((items) => {
      const existingItem = items.find((item) => item.id === product.id);

      if (!existingItem) {
        return [...items, { ...product, quantity: 1 }];
      }

      return items.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    });
    this.saveCart();
  }

  toggleCart(): void {
    this.isCartOpen.update((v) => !v);
  }

  openCart(): void {
    this.isCartOpen.set(true);
  }

  closeCart(): void {
    this.isCartOpen.set(false);
  }

  removeFromCart(productId: number): void {
    this.cartItems.update((items) =>
      items.filter((item) => item.id !== productId)
    );
    this.saveCart();
  }

  updateQuantity(productId: number, quantity: number): void {
    if (quantity <= 0) {
      this.removeFromCart(productId);
      return;
    }

    this.cartItems.update((items) =>
      items.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
    this.saveCart();
  }

  clearCart(): void {
    this.cartItems.set([]);
    this.saveCart();
  }

  private saveCart(): void {
    if (typeof localStorage === "undefined") {
      return;
    }

    localStorage.setItem(this.storageKey, JSON.stringify(this.cartItems()));
  }

  private loadCart(): void {
    if (typeof localStorage === "undefined") {
      return;
    }

    const savedCart = localStorage.getItem(this.storageKey);
    if (savedCart) {
      try {
        this.cartItems.set(JSON.parse(savedCart));
      } catch (error) {
        console.error("Error loading cart from localStorage", error);
      }
    }
  }
}
