import { Component, OnInit } from '@angular/core';
import { ImdbService } from '../../services/imdb.service';
import { MatCardHeader, MatCardTitle, MatCardContent, MatCardSubtitle } from '@angular/material/card';
import {  MatCard } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carousel',
  imports: [MatCard, MatCardHeader, MatCardTitle, MatCardContent, MatCardSubtitle, MatButtonModule, MatIconModule, CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent implements OnInit {

  public movies: any = [];
  currentMovie = 0;

  constructor(private imdbService: ImdbService){}

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(): void {
    this.imdbService.getData().subscribe(
      (data) => {
        data.forEach((movie) => {
          this.movies.push(movie);

          while(this.movies.length > 10) {
            this.movies.pop();
          }
          return;
      });
    });
    console.log(this.movies);
  }

  onPreviousClick(){
    const previous = this.currentMovie - 1;
    this.currentMovie = previous < 0 ? this.movies.length - 1 : previous;
  }

  onNextClick(){
    const next = this.currentMovie + 1;
    this.currentMovie = next === this.movies.length ? 0 : next;
  }

}
