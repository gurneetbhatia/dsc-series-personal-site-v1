import { Component, OnInit, OnDestroy } from '@angular/core';

import { DataService } from 'src/app/services/data.service';
import { Experience } from 'src/assets/dtos/experience.dto';
import { NotificationService } from 'src/app/services/notification.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit, OnDestroy {

  experiences: Experience[];

  private destroy$ = new Subscription();

  constructor(private dataService: DataService,
              private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.destroy$ = this.dataService.getExperiences().subscribe(
      (experiences) => {
        this.experiences = experiences;
      },
      (_err) => {
        this.notificationService.showError("A problem occured fetching the experiences. Please try again later.")
      }
    )
  }

  ngOnDestroy(): void {
    this.destroy$.unsubscribe();
  }

}
