import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

interface Book {
  _id: string;
  title: string;
  author: string;
  description: string;
  pages: number;
  difficulty: string;
  content: string;
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
  totalPages: number = 0;
  pageContent: string = '';
  pointsForBook: number = 0;

  constructor(private route: ActivatedRoute, private router: Router) {}
  ngOnInit(): void {
    const bookId = this.route.snapshot.paramMap.get('id'); // Obtener el ID del libro desde la URL

    // Simular la carga del libro desde un catálogo
    this.book = {
      _id: bookId || 'unknown',
      title: '[Nombre del Libro]',
      author: 'Autor',
      description: 'Descripción del libro',
      pages: 20,
      difficulty: 'medium',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' +
               'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' +
               'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    };

    // Recuperar progreso y puntos específicos para este libro desde localStorage
    const savedProgress = localStorage.getItem(`book-${this.book._id}-progress`);
    const savedPoints = localStorage.getItem(`book-${this.book._id}-points`);

    this.currentPage = savedProgress ? parseInt(savedProgress) : 1;
    this.pointsForBook = savedPoints ? parseInt(savedPoints) : 0;

    this.paginateBookContent();
  }

  paginateBookContent(): void {
    if (this.book) {
      const lines = this.book.content.split('. '); // Dividir el contenido por oraciones
      this.totalPages = lines.length; // Cada oración se considera una página
      this.updatePageContent(lines);
    }
  }

  updatePageContent(lines: string[]): void {
    if (this.book) {
      const start = this.currentPage - 1;
      this.pageContent = lines[start] || '';
    }
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updateProgress();
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updateProgress();
    }
  }

  updateProgress(): void {
    if (this.book) {
      // Guardar el progreso actual en localStorage
      localStorage.setItem(`book-${this.book._id}-progress`, this.currentPage.toString());
  
      // Incrementar puntos solo si avanza a una página nueva
      if (this.currentPage > this.pointsForBook) {
        // Determinar puntos según la dificultad del libro
        let pointsPerPage = 10; // Puntos base para 'easy'
        if (this.book.difficulty === 'medium') {
          pointsPerPage = 20; // Más puntos para 'medium'
        } else if (this.book.difficulty === 'hard') {
          pointsPerPage = 30; // Aún más puntos para 'hard'
        }
  
        // Incrementar puntos acumulados por página
        this.pointsForBook += pointsPerPage;
        localStorage.setItem(`book-${this.book._id}-points`, this.pointsForBook.toString());
  
        // Actualizar puntos totales en localStorage
        const totalPoints = localStorage.getItem('total-points');
        const updatedTotalPoints = totalPoints ? parseInt(totalPoints) + pointsPerPage : 1200 + pointsPerPage; // Comienza con 1200
        localStorage.setItem('total-points', updatedTotalPoints.toString());
      }
  
      this.paginateBookContent();
    }
  }
  
  pauseReading(): void {
    this.router.navigate(['/library']); // Redirige a la página de biblioteca
  }
  
}
