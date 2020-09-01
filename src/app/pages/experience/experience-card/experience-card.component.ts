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
  }

}
