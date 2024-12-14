import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CharacterService } from '../../services/character.service';
import { EpisodeModalComponent } from '../episode-modal/episode-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})

export class CharacterListComponent implements OnInit {
  characters: any[] = [];
  currentPage = 1;
  totalCharacters = 0;
  pageSize = 10;



  private searchSubject = new Subject<string>();
  
  constructor(private characterService: CharacterService, private router: Router, private dialog: MatDialog) {}

  ngOnInit(): void {

    this.searchSubject.pipe(
      debounceTime(250),
      distinctUntilChanged()
    ).subscribe((searchTerm) => {
      this.characterService.searchCharacters(searchTerm).subscribe((data) => {
        this.characters = data.results;
        this.totalCharacters = data.info.count;
      });
    });

    this.fetchCharacters(this.currentPage);
  }

  onSearch(event: Event): void {
    const searchTerm = (event.target as HTMLInputElement).value; 
    this.searchSubject.next(searchTerm); // Passing the search term to the RxJS subject
  }

  fetchCharacters(page: number): void {
    this.characterService.getCharacters(page).subscribe((data) => {
      this.characters = data.results;
      this.totalCharacters = data.info.count;
    });
  }

  onPageChange(page: number): void {
    console.log("currentpage", this.currentPage);
    this.currentPage = page;
    this.fetchCharacters(this.currentPage);
  }

  viewDetails(characterId: number): void {
    console.log(characterId);
    this.router.navigate(['/character', characterId]);
  }
  openModal(episodeUrls: string[]): void {
    this.dialog.open(EpisodeModalComponent, {
      width: '500px',
      data: { episodes: episodeUrls }, // Pass episode URLs to the modal
    });
  }
 
}
