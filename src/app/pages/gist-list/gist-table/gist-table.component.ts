import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { GistTableStore } from './gist-table.store';
import { MatIconModule } from '@angular/material/icon';
import { PaginatorComponent } from './paginator/paginator.component';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-gist-table',
  standalone: true,
  imports: [MatCardModule, MatProgressSpinnerModule, CommonModule, FormsModule, RouterModule, MatIconModule, PaginatorComponent, MatButtonModule, MatTableModule],
  providers: [GistTableStore],
  templateUrl: './gist-table.component.html',
  styleUrl: './gist-table.component.scss'
})
export class GistTableComponent {
  private store = inject(GistTableStore);

  displayedColumns: string[] = ['description', 'updated_at', 'action'];

  viewModel$ = this.store.state$;

  deleteGist(id: string) {
    this.store.deleteGist(id);
  }

}