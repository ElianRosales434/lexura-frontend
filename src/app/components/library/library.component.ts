import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';

interface Book {
  id: number;
  title: string;
  cover: string;
}

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    SidebarComponent
  ]
})
export class LibraryComponent implements OnInit {
  searchQuery: string = '';
  filteredBooks: Book[] = [];
  books: Book[] = [
    { id: 1, title: 'Título del Libro 1', cover: 'assets/img/book1.jpg' },
    { id: 2, title: 'Título del Libro 2', cover: 'assets/img/book2.jpg' },
    { id: 3, title: 'Título del Libro 3', cover: 'assets/img/book3.jpg' },
    // Agrega más libros según sea necesario
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.filteredBooks = this.books;
  }

  searchBooks(): void {
    if (this.searchQuery) {
      this.filteredBooks = this.books.filter(book =>
        book.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    } else {
      this.filteredBooks = this.books;
    }
  }

  viewBook(book: Book): void {
    this.router.navigate(['/book-view', book.id]);
  }
}