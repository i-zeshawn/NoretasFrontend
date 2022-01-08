import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-book-event',
  templateUrl: './book-event.component.html',
  styleUrls: ['./book-event.component.css']
})
export class BookEventComponent implements OnInit {
  contactForm: FormGroup = new FormGroup({}, undefined, undefined);

  constructor(private fb: FormBuilder, private toaster: ToastrService) {
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

  book() {
    if (this.contactForm.invalid) {
      this.toaster.error("Please add all required fields");
    }
  }
}
