import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormsModule } from '@angular/forms';
import { Form, NgForm } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { NgbAlert, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  
  private _success = new Subject<string>();

  staticAlertClosed = false;
	successMessage = '';

  constructor(
    private formBuilder: FormBuilder,
  ) {
    
  }

	@ViewChild('staticAlert', { static: false }) staticAlert!: NgbAlert;
	@ViewChild('selfClosingAlert', { static: false }) selfClosingAlert!: NgbAlert;

  ngOnInit(): void {

    setTimeout(() => this.staticAlert.close(), 20000);

		this._success.subscribe((message) => (this.successMessage = message));
		this._success.pipe(debounceTime(50000)).subscribe(() => {
			if (this.selfClosingAlert) {
				this.selfClosingAlert.close();
			}
		}); 
  }

  public changeSuccessMessage() {
		this._success.next(`Thank you for your inquiry! we will be in touch soon!.`);
	}

  @ViewChild('contactForm', { static: false }) contactForm!: NgForm; // Reference to the form element

  public sendEmail(e: Event) {
    e.preventDefault();
    emailjs.sendForm('service_h5slopj', 'template_z5jaubo', e.target as HTMLFormElement, 'UGJsIlxE278IEs64h')
      .then((result: EmailJSResponseStatus) => {
        this.contactmeForm.reset();
        this.changeSuccessMessage()     
      }, (error) => {
        console.log(error.text);
      });
  }



  contactmeForm = this.formBuilder.group({
    name: '',
    email: '',
    phone: '',
    company:'', 
    message: '',

  })

}
