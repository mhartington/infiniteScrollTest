import {Component} from '@angular/core';
import {RandomUser} from '../../providers/random-user/random-user'
@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {

  public users = [];
  constructor(
    public randomUsr: RandomUser
  ) { }

  ionViewLoaded() {
    this.randomUsr.loadUser().subscribe(
      res => this.users = res.results
    )
  }

  doInfinite(infiniteScroll) {
    console.log('Begin async operation');

    setTimeout(() => {
      this.randomUsr.loadUser().subscribe(
        (res) => {
          for (let user of res.results) {
            this.users.push(user)
          }
        }
      )

      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 1000)
  }

}
