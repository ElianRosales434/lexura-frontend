import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

interface Book {
  _id: string;
  title: string;
  author: string;
  description: string;
  pages: number;
  difficulty: string;
  content: string; // Añadir el contenido del libro
}

@Component({
  selector: 'app-book-view',
  templateUrl: './book-view.component.html',
  styleUrls: ['./book-view.component.css'],
  standalone: true,
  imports: [
    CommonModule
  ]
})
export class BookViewComponent implements OnInit {
  book: Book | undefined;
  currentPage: number = 1;
  totalPages: number = 5; // Asumimos que el libro tiene 5 páginas
  pageContent: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Definir el contenido del libro directamente en el componente
    this.book = {
      _id: '672c3a0d7128104c5a993457',
      title: 'El Alquimista',
      author: 'Paulo Coelho',
      description: 'Descripción del libro',
      pages: 5, // Asumimos que el libro tiene 5 páginas
      difficulty: 'medium',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu elit a magna ornare mattis. ' +
               'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu elit a magna ornare mattis. ' +
               'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu elit a magna ornare mattis. ' +
               'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu elit a magna ornare mattis. ' +
               'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu elit a magna ornare mattis. ' +
               'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu elit a magna ornare mattis. ' +
               'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu elit a magna ornare mattis. ' +
               'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu elit a magna ornare mattis. ' +
               'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu elit a magna ornare mattis. ' +
               'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu elit a magna ornare mattis. ' +
               'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu elit a magna ornare mattis. ' +
               'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu elit a magna ornare mattis. ' +
               'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu elit a magna ornare mattis. ' +
               'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu elit a magna ornare mattis. ' +
               'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu elit a magna ornare mattis. ' +
               'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu elit a magna ornare mattis. ' +
               'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu elit a magna ornare mattis. ' +
               'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu elit a magna ornare mattis. ' +
               'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu elit a magna ornare mattis. ' +
               'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu elit a magna ornare mattis. ' +
               'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu elit a magna ornare mattis. ' +
               'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu elit a magna ornare mattis. ' +
               'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu elit a magna ornare mattis. ' +
               'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu elit a magna ornare mattis. ' +
               'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu elit a magna ornare mattis. ' +
               'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu elit a magna ornare mattis. ' +
               'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu elit a magna ornare mattis. ' 
    };
    this.paginateBookContent();
  }

  paginateBookContent(): void {
    if (this.book) {
      const linesPerPage = 1; // Ajusta el número de líneas por página según sea necesario
      const lines = [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'Donec eu elit a magna ornare mattis.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'Donec eu elit a magna ornare mattis.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'Donec eu elit a magna ornare mattis.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'Donec eu elit a magna ornare mattis.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'Donec eu elit a magna ornare mattis.'
      ];
      this.totalPages = Math.ceil(lines.length / linesPerPage);
      this.updatePageContent(lines);
    }
  }

  updatePageContent(lines: string[]): void {
    if (this.book) {
      const linesPerPage = 1; // Ajusta el número de líneas por página según sea necesario
      const start = (this.currentPage - 1) * linesPerPage;
      const end = start + linesPerPage;
      this.pageContent = lines.slice(start, end).join(' ');
    }
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.paginateBookContent();
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.paginateBookContent();
    }
  }
}