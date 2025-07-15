import { Component, OnInit } from '@angular/core';
import { ImdbService } from '../../services/imdb.service';

@Component({
  selector: 'app-carousel',
  imports: [],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent implements OnInit {

  public movies: any = [];

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

}
