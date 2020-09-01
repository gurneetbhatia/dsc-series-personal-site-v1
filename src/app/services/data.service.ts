import { Injectable } from '@angular/core';

import { experiences } from 'src/assets/data';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getExperiences() {
    return experiences;
  }
}
