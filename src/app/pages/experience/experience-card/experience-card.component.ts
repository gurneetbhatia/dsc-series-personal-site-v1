import { Component, OnInit, Input } from '@angular/core';
import { Experience } from 'src/assets/dtos/experience.dto';

@Component({
  selector: 'app-experience-card',
  templateUrl: './experience-card.component.html',
  styleUrls: ['./experience-card.component.css']
})
export class ExperienceCardComponent implements OnInit {

  @Input() experience: Experience;

  constructor() { }

  ngOnInit(): void {
    this.experience.from.datetime = new Date(this.experience.from.seconds * 1000);
    this.experience.to.datetime = new Date(this.experience.to.seconds * 1000);
  }

}
