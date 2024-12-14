import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CharacterService } from '../../services/character.service';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss']
})
export class CharacterDetailsComponent implements OnInit {
  character: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private characterService: CharacterService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.characterService.getCharacterById(+id).subscribe((data) => {
        this.character = data;
      });
    }
  }

  goBack(): void {
    this.router.navigate(['/']);
  }
}
