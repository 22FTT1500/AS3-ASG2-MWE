import { Component} from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.page.html',
  styleUrls: ['./changepassword.page.scss'],
})
export class ChangepasswordPage{
  alertButtons = ['Ok'];

  constructor(private navCtrl: NavController) { }


  onSave() {
    // Navigate to tab1 page
    this.navCtrl.navigateRoot('/tabs/tab1');
  
    // Clear input fields by selecting them and setting their value to an empty string
    const passwordInputs = document.querySelectorAll('input[type="password"]');
    passwordInputs.forEach(input => {
      const passwordInput = input as HTMLInputElement; // Cast input to HTMLInputElement
      passwordInput.value = '';
    });
  }
  
}
