import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {


  public sendEmail(e: Event) {
    e.preventDefault();
    emailjs.sendForm('service_4bea6xu', 'template_mrvlg3p', e.target as HTMLFormElement, 'PO7IKnq8GE2XMtUWE')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
        const form = e.target as HTMLFormElement;
        form.reset();
      }, (error: { text: any; }) => {
        console.log(error.text);
      });
  }


}
