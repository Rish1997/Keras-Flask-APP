import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-initial',
  templateUrl: 'initial.html',
})
export class InitialPage {

  URLDomain : string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  changePage(){
    if(this.URLDomain.trim().length != 0)
    this.navCtrl.push(HomePage , {URLDomain : this.URLDomain});
  }


}
