import { Component, OnInit } from '@angular/core';

import { DeviceService } from 'src/app/services/device.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isMobile: boolean;
  isLoggedIn: boolean;

  constructor(private deviceService: DeviceService,
              private authService: AuthenticationService,
              private notficationService: NotificationService) { }

  ngOnInit(): void {
    this.windowResize();

    this.authService.getLoggedInUser()
      .subscribe(
        (user) => {
          this.isLoggedIn = user ? true : false;
        },
        (err) => {
          this.isLoggedIn = false;
        }
      )
  }

  windowResize(): void {
    this.isMobile = this.deviceService.isMobile();
  }

  logout(): void {
    this.authService.signOut().then(() => {
      this.isLoggedIn = false;
      this.notficationService.showSuccess("Successfully logged out");
    });
  }

}
