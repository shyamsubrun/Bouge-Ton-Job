import { Component, ElementRef, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-background-animation',
  standalone: true,
  imports: [],
  templateUrl: './background-animation.component.html',
  styleUrl: './background-animation.component.scss'
})
export class BackgroundAnimationComponent implements OnInit {
  private canvas!: HTMLCanvasElement;
  private ctx!: CanvasRenderingContext2D | null;
  private shapes: any[] = [];
  
  private speedFactor = 0.5; // Réglez cette valeur entre 0 et 1 pour ajuster la vitesse
 
  private  couleurtrait = 'rgba(0, 255, 255, 0.6)';//'rgba(135, 206, 250, 0.3)';
  private epaisseurTrait = 5;

  constructor(private elRef: ElementRef) {}

  ngOnInit(): void {
    this.canvas = this.elRef.nativeElement.querySelector('#backgroundCanvas');
    this.ctx = this.canvas.getContext('2d');
    this.resizeCanvas();
    this.createShapes();
    this.animate();
  }

  // Adapter la taille du canvas à celle de la fenêtre
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.resizeCanvas();
  }

  private resizeCanvas() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  private createShapes() {
    const randomColor = () => ['#FF5733', '#33FF57', '#3357FF', '#FF33A1'][Math.floor(Math.random() * 4)];
    for (let i = 0; i < 20; i++) {
      this.shapes.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        size: 20 + Math.random() * 30,
        color: randomColor(),
        dx: (Math.random() - 0.5) * 2,
        dy: (Math.random() - 0.5) * 2,
        rotation: 0,
        rotationSpeed: (Math.random() - 0.5) * 0.05,
        type: ['circle', 'square', 'triangle'][Math.floor(Math.random() * 3)]
      });
    }
  }
  
  private drawShape(shape: any) {
    if (!this.ctx) return;
    this.ctx.save();
    this.ctx.translate(shape.x, shape.y);
    this.ctx.rotate(shape.rotation);
    shape.rotation += shape.rotationSpeed;
  
    this.ctx.fillStyle = shape.color;
    this.ctx.beginPath();
    if (shape.type === 'circle') {
      this.ctx.arc(0, 0, shape.size / 2, 0, Math.PI * 2);
      this.ctx.fill();
    } else if (shape.type === 'square') {
      this.ctx.fillRect(-shape.size / 2, -shape.size / 2, shape.size, shape.size);
    } else if (shape.type === 'triangle') {
      this.ctx.moveTo(0, -shape.size / 2);
      this.ctx.lineTo(-shape.size / 2, shape.size / 2);
      this.ctx.lineTo(shape.size / 2, shape.size / 2);
      this.ctx.closePath();
      this.ctx.fill();
    }
    this.ctx.restore();
  }
  

  private updateShapes() {
    this.shapes.forEach(shape => {
      shape.x += shape.dx * this.speedFactor;
      shape.y += shape.dy * this.speedFactor;
  
      // Variation légère de la taille
      shape.size += Math.sin(Date.now() * 0.002) * 0.1;
  
      // Gestion du rebondissement
      if (shape.x + shape.size / 2 > this.canvas.width || shape.x - shape.size / 2 < 0) {
        shape.dx *= -1;
      }
      if (shape.y + shape.size / 2 > this.canvas.height || shape.y - shape.size / 2 < 0) {
        shape.dy *= -1;
      }
    });
  }
  
  // Dessiner les lignes de connexion
  
  private drawLines() {
    if (!this.ctx) return;
    for (let i = 0; i < this.shapes.length; i++) {
      for (let j = i + 1; j < this.shapes.length; j++) {
        const dx = this.shapes[i].x - this.shapes[j].x;
        const dy = this.shapes[i].y - this.shapes[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < 150) {
          // Utilisation d'une couleur plus visible pour les lignes
          this.ctx.strokeStyle = this.couleurtrait;
          this.ctx.lineWidth = this.epaisseurTrait;
          this.ctx.beginPath();
          this.ctx.moveTo(this.shapes[i].x, this.shapes[i].y);
          this.ctx.lineTo(this.shapes[j].x, this.shapes[j].y);
          this.ctx.stroke();
        }
      }
    }
  }
  
  

  // Animation
  private animate() {
    if (!this.ctx) return;
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.drawLines();
    this.shapes.forEach(shape => this.drawShape(shape));
    this.updateShapes();
    requestAnimationFrame(() => this.animate());
  }
}
