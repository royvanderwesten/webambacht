import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'ba-account-dropdown',
  templateUrl: './account-dropdown.component.html',
  styles: [
  ]
})
export class AccountDropdownComponent implements OnInit {
  @Input() userData: any;

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
  }

  signOut() {
    this.authService.signOut().then(() => {
      this.router.navigate(['login']);
    });
  }

}
