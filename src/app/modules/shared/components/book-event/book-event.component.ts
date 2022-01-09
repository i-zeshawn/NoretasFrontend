import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import {CmsServiceService} from "../../service/cms-service.service";

@Component({
  selector: 'app-book-event',
  templateUrl: './book-event.component.html',
  styleUrls: ['./book-event.component.css']
})
export class BookEventComponent implements OnInit {
  contactForm: FormGroup = new FormGroup({}, undefined, undefined);

  constructor(private fb: FormBuilder, private toaster: ToastrService, private cmsService: CmsServiceService) {
  }

  ngOnInit(): void {
    this.createForm();
  }

  private createForm() {
    this.contactForm = this.fb.group({
      name: [[], Validators.required],
      email: [[], Validators.required],
      venue: [],
      phone_number: [[], Validators.required],
      message: [[], Validators.required]
    })
  }

  submit() {
    if (this.contactForm.invalid) {
      this.toaster.error("Please add all required fields");
      return;
    }
    this.cmsService.submitContactForm(this.contactForm.value).subscribe((data: any) => {
      if (data.success) {
        this.toaster.success(data.message);
        this.contactForm.reset();
      } else {
        this.toaster.error(data.message);
      }
    })
  }
}
