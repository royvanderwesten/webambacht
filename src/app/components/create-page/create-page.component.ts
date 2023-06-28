import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {FirestoreService} from "../../services/firestore/firestore.service";
import {Router} from "@angular/router";

@Component({
  selector: 'ba-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.scss']
})
export class CreatePageComponent implements OnInit {

  public createPageForm: FormGroup;

  constructor(private fb: FormBuilder,
              private router: Router,
              private _firestoreService: FirestoreService) {
    this.createPageForm = this.fb.group({
      name: new FormControl('', [Validators.required]),
      url: new FormControl('', [Validators.required])
    })
  }

  onSubmit(form: any) {
    this._firestoreService.createPage(form.value.name, form.value.url).then(() => {
      alert('Page created!');
      this.router.navigate(['/']);
    }).catch(() => {
      alert('Something went wrong')
    });
  }

  renderUrl() {
    const nameControl = this.createPageForm.get('name');
    if (nameControl) {
      const nameValue = nameControl.value;
      const urlValue = nameValue.toLowerCase().replace(/[^\w\s]/gi, '').replace(/ /g, '-');


      this.createPageForm.patchValue({ url: urlValue })
    }
  }

  ngOnInit(): void {
  }

}
