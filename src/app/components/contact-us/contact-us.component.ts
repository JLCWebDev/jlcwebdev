import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormsModule, Validators } from '@angular/forms';
import { Form, NgForm } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { NgbAlert, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { Subject, debounceTime } from 'rxjs';
import { environment } from 'src/environments/environment.development';

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



  public sendEmail(e: Event) {

    e.preventDefault();
    if (this.contactmeForm.valid) {
        // Your form submission logic here
        emailjs.sendForm(environment.emailJSServiceId, environment.emailJSTemplateId, e.target as HTMLFormElement, environment.emailJSPublicKey)
            .then((result: EmailJSResponseStatus) => {
                this.contactmeForm.reset();
                this.changeSuccessMessage();
            }, (error) => {
                console.log(error.text);
            });
    }
    else {
      this.contactmeForm.markAllAsTouched();
      return
    }
}

get name() {
  return this.contactmeForm.get('name')
}
get email() {
  return this.contactmeForm.get('email')
}
get phone() {
  return this.contactmeForm.get('phone')
}
get message() {
  return this.contactmeForm.get('message')
}


contactmeForm = this.formBuilder.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.pattern(`^[0-9\-\+]{10}$`)] ],
    company: [''],
    message: ['', [Validators.required]],
});

}
