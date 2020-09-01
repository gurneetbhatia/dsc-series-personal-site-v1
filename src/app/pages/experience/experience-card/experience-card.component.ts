import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-experience-card',
  templateUrl: './experience-card.component.html',
  styleUrls: ['./experience-card.component.css']
})
export class ExperienceCardComponent implements OnInit {

  @Input() title: string;
  @Input() location: string;
  @Input() description: string;
  @Input() from: string;
  @Input() to: string;

  constructor() { }

  ngOnInit(): void {
  }

}
