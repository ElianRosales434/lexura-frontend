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
    { title: 'Recompensa 1', image: 'assets/img/reward1.jpg', points: 300 },
    { title: 'Recompensa 2', image: 'assets/img/reward2.jpg', points: 500 },
    { title: 'Recompensa 3', image: 'assets/img/reward3.jpg', points: 700 },
    { title: 'Recompensa 4', image: 'assets/img/reward4.jpg', points: 1000 }
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