import { CommonModule } from "@angular/common";
import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from "@angular/core";
import { Product } from "../../models/product.interfaces";

@Component({
  selector: "app-menu-category",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./menu-category.component.html",
  styleUrls: ["./menu-category.component.css"],
})
export class MenuCategoryComponent {
  @Input() title = "";
  @Input() items: Product[] = [];

  @Output() itemAdded = new EventEmitter<Product>();

  @ViewChild("track", { static: false }) trackRef!: ElementRef<HTMLDivElement>;

  scroll(direction: "left" | "right"): void {
    if (!this.trackRef?.nativeElement) return;

    this.trackRef.nativeElement.scrollBy({
      left: direction === "left" ? -340 : 340,
      behavior: "smooth",
    });
  }

  addToCart(item: Product): void {
    this.itemAdded.emit(item);
  }

  trackById(index: number, item: Product): number {
    return item.id;
  }
}