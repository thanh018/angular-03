import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/movie';
// import { fakeMovies } from '../fake-movies';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movie: Movie = {
    id: 1,
    name: "Star Wars",
    releaseYear: 1977
  }
  movies: Movie[];
  constructor(private movieService: MovieService) { 

  }
  getMoviesFromService(): void {
    this.movieService.getMovies().subscribe(
      (updateMovies) => {
        this.movies = updateMovies;
        console.log(this.movies);
      }
    );
  }

  ngOnInit() {
    this.getMoviesFromService();
  }

  selectedMovie: Movie;
  onSelect(movie: Movie):void {
    this.selectedMovie = movie;
    // console.log(JSON.stringify(this.selectedMovie.releaseYear));
  }

}
