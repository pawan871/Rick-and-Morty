
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  private apiUrl = 'https://rickandmortyapi.com/api'; // Base URL for the API

  constructor(private http: HttpClient) {}

  /**
   * Fetch a paginated list of characters from the API
   * @param page - The page number to fetch
   * @returns Observable containing the list of characters and pagination info
   */
  getCharacters(page: number = 1): Observable<any> {
    return this.http.get(`${this.apiUrl}/character?page=${page}`);
  }

  /**
   * Fetch details of a single character by ID
   * @param id - The ID of the character to fetch
   * @returns Observable containing character details
   */
  getCharacterById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/character/${id}`);
  }
  searchCharacters(name: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/character/?name=${name}`);
  }
}

