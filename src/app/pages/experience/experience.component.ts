import { Component, OnInit } from '@angular/core';

import { DataService } from 'src/app/services/data.service';
import { Experience } from 'src/assets/dtos/experience.dto';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  experiences: Experience[];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.experiences = this.dataService.getExperiences();
  }

}
