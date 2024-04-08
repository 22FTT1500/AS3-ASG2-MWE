import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  alertButtons = ['Ok'];
  alert: any;

  constructor(private alertController: AlertController) { }

  ngOnInit() {
    this.presentAlert();
  }

  ionViewDidEnter() {
    this.refreshAlert();
  }

  async presentAlert() {
    this.alert = await this.alertController.create({
      header: 'Bedroom Bin Is Full',
      subHeader: 'Please Empty The Bin',
      buttons: this.alertButtons
    });
    await this.alert.present();
  }

  async refreshAlert() {
    if (this.alert) {
      await this.alert.dismiss();
      this.presentAlert();
    }
  }
}
