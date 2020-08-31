import { Component, OnInit } from '@angular/core';
import { DeviceService } from 'src/app/services/device.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isMobile: boolean;
  isLoggedIn: boolean;

  constructor(private deviceService: DeviceService,
              private authService: AuthenticationService) { }

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
    this.authService.signOut().then(() => this.isLoggedIn = false);
  }

}
