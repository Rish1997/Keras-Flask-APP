import { Component } from '@angular/core';
import { NavController , ModalController, NavParams } from 'ionic-angular';
import { HttpServiceProvider } from '../../providers/http-service/http-service';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  field1 : string;
  field2 : string;
  field3 : string;
  field4 : string;
  field5 : string;
  URLDomain : string;

  constructor(public navParams : NavParams,public navCtrl: NavController , public HttpServPro : HttpServiceProvider , public modalCtrl : ModalController) {

  }
  
  ionViewDidLoad(){
    this.URLDomain = this.navParams.get('URLDomain');
  }

  requestData(){
    let urlCreated = 'http://' + this.URLDomain + '.ngrok.io';


    let formData = new FormData();
    formData.append("data1", this.field1);
    formData.append("data2", this.field2);
    formData.append("data3", this.field3);
    formData.append("data4", this.field4);
    formData.append("data5", this.field5);

    this.HttpServPro.requestSend(urlCreated , formData).then((data) => {
      console.log(data);
      this.presentProfileModal(data);
    })

  }

  presentProfileModal(result) {
    let profileModal = this.modalCtrl.create(Profile, { result: result });
    profileModal.present();
  }

  

}


@Component({
  template: `
  <ion-header>
  <ion-navbar>
    <ion-title>Data</ion-title>
  </ion-navbar>
</ion-header>

  <ion-content>
    <H2>The Estimated Price is {{result}}</H2>
  </ion-content>
`
})
export class Profile {
  result : string;
 constructor(private params: NavParams) {
   console.log('result', params.get('result'));
   this.result = this.params.get('result');
 }

 ionVieDidLoad(){
   this.result = this.params.get('result');
 }

}