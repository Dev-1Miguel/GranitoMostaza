import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

type ShapeType = "cupcake" | "lollipop" | "candy" | "cake" | "donut" | "roll";

interface DecorativeItem {
  id: number;
  type: ShapeType;
  top: string;
  left: string;
  size: number;
  rotate: number;
  depth: number;
  opacity: number;
  floatClass: string;
}

@Component({
  selector: "app-main-section",
  templateUrl: "./main-section.html",
  styleUrl: "./main-section.css",
  standalone: true,
  imports: [CommonModule],
})
export class MainSectionComponent {
  pointerX = 0;
  pointerY = 0;

  decorativeItems: DecorativeItem[] = [
    { id: 1, type: "cupcake", top: "8%", left: "6%", size: 92, rotate: -8, depth: 0.7, opacity: 0.28, floatClass: "float-a" },
    { id: 2, type: "lollipop", top: "14%", left: "22%", size: 78, rotate: 10, depth: 1.1, opacity: 0.24, floatClass: "float-b" },
    { id: 3, type: "cake", top: "10%", left: "80%", size: 112, rotate: 6, depth: 0.8, opacity: 0.22, floatClass: "float-c" },
    { id: 4, type: "candy", top: "28%", left: "14%", size: 68, rotate: -10, depth: 1.2, opacity: 0.26, floatClass: "float-a" },
    { id: 5, type: "roll", top: "34%", left: "72%", size: 88, rotate: 10, depth: 0.9, opacity: 0.22, floatClass: "float-b" },
    { id: 6, type: "cupcake", top: "58%", left: "12%", size: 86, rotate: -4, depth: 1.1, opacity: 0.23, floatClass: "float-c" },
    { id: 7, type: "donut", top: "64%", left: "82%", size: 110, rotate: -14, depth: 0.8, opacity: 0.2, floatClass: "float-a" },
    { id: 8, type: "cake", top: "68%", left: "58%", size: 120, rotate: 8, depth: 0.7, opacity: 0.18, floatClass: "float-b" },
    { id: 9, type: "lollipop", top: "74%", left: "28%", size: 74, rotate: -6, depth: 1.3, opacity: 0.24, floatClass: "float-c" },
    { id: 10, type: "candy", top: "82%", left: "8%", size: 66, rotate: 12, depth: 1.1, opacity: 0.2, floatClass: "float-a" },
    { id: 11, type: "donut", top: "18%", left: "90%", size: 90, rotate: 14, depth: 0.9, opacity: 0.18, floatClass: "float-b" },
    { id: 12, type: "roll", top: "84%", left: "70%", size: 96, rotate: -8, depth: 1.0, opacity: 0.2, floatClass: "float-c" },
  ];

  onPointerMove(event: MouseEvent): void {
    const target = event.currentTarget as HTMLElement;
    const rect = target.getBoundingClientRect();

    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;

    this.pointerX = (x - 0.5) * 2;
    this.pointerY = (y - 0.5) * 2;
  }

  resetPointer(): void {
    this.pointerX = 0;
    this.pointerY = 0;
  }

  getItemStyle(item: DecorativeItem) {
    const moveX = this.pointerX * item.depth * 14;
    const moveY = this.pointerY * item.depth * 14;

    return {
      top: item.top,
      left: item.left,
      width: `${item.size}px`,
      height: `${item.size}px`,
      opacity: item.opacity,
      transform: `translate(${moveX}px, ${moveY}px)`,
    };
  }

  trackById(index: number, item: DecorativeItem): number {
    return item.id;
  }
}