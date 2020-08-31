import { Component, OnInit } from '@angular/core';
import { DeviceService } from 'src/app/services/device.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isMobile: boolean;

  constructor(private deviceService: DeviceService) { }

  ngOnInit(): void {
    this.windowResize();
  }

  windowResize(): void {
    this.isMobile = this.deviceService.isMobile();
  }

}
