import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from '../sidebar/sidebar.component';

interface Book {
  title: string;
  cover: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    SidebarComponent
  ]
})
export class HomeComponent {
  searchQuery: string = '';
  books: Book[] = [
    { title: 'Título del Libro 1', cover: 'assets/img/book1.jpg' },
    { title: 'Título del Libro 2', cover: 'assets/img/book2.jpg' },
    { title: 'Título del Libro 3', cover: 'assets/img/book3.jpg' },
    { title: 'Título del Libro 4', cover: 'assets/img/book4.jpg' }
  ];

  get filteredBooks(): Book[] {
    return this.books.filter(book => book.title.toLowerCase().includes(this.searchQuery.toLowerCase()));
  }
}