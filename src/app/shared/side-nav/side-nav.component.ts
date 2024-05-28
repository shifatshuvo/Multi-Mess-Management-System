import { Component, OnInit } from '@angular/core';
import { faGear, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { user } from '../../interface/data-type';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.css'
})
export class SideNavComponent implements OnInit {

  settingIcon = faGear;
  logoutIcon = faRightFromBracket;
  userData: user | undefined;

  constructor(private router: Router) {}

  ngOnInit(): void {
    const userString = localStorage.getItem('user');

    if (userString) {
      const user = JSON.parse(userString);
      this.userData = user;
    }
}


  signOut() {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    // this.userSignIn = false;
    this.router.navigate(['/auth/sign-in']);
  }


}
