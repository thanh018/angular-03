import { Injectable } from '@angular/core';
import { fakeMovies } from './fake-movies';
import { Movie } from '../models/movie';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class MovieService {
	getMovies(): Observable<Movie[]> {
		return of(fakeMovies);
	}
  constructor() { }

}
