import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { SidebarComponent } from '../sidebar/sidebar.component';

interface Reward {
  title: string;
  image: string;
  points: number;
}

@Component({
  selector: 'app-rewards',
  templateUrl: './rewards.component.html',
  styleUrls: ['./rewards.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    SidebarComponent
  ]
})
export class RewardsComponent {
  accumulatedPoints: number = 1200; // Ejemplo de puntos acumulados
  rewards: Reward[] = [
    { title: 'La Navidad en las Montañas', image: 'assets/images/NavidadMonta.png', points: 300 },
    { title: 'La isla del tesoro  ', image: 'assets/images/IslaTesoro.jpg', points: 500 },
    { title: '1 mes de Spotify', image: 'assets/images/Spotify.jpg', points: 2000 }
  ];

  redeemReward(reward: Reward): void {
    if (this.accumulatedPoints >= reward.points) {
      this.accumulatedPoints -= reward.points;
      alert(`Has canjeado ${reward.title}`);
    } else {
      alert('No tienes suficientes puntos para canjear esta recompensa');
    }
  }
}