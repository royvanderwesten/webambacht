import { Component, OnInit, Input } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {FirestoreService} from "../../services/firestore/firestore.service";
import {Router} from "@angular/router";

@Component({
  selector: 'ba-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.scss']
})
export class CreatePageComponent implements OnInit {
  @Input() pages: any;

  public viewSetMainLink: boolean = false;
  public createPageForm: FormGroup;
  public pageTypes = ['main', 'sub'];

  constructor(private fb: FormBuilder,
              private router: Router,
              private _firestoreService: FirestoreService) {
    this.createPageForm = this.fb.group({
      name: new FormControl('', [Validators.required]),
      url: new FormControl('', [Validators.required]),
      pageType: new FormControl('', [Validators.required]),
    });

    this.createPageForm.patchValue({
      pageType: this.pageTypes[0]
    })
  }

  setPageType(pageType: string) {
    this.createPageForm.patchValue({ pageType });

    if (pageType === 'sub') {
      this.viewSetMainLink = true;
      this.createPageForm.addControl('mainPageLink', new FormControl('', [Validators.required]));
      this.createPageForm.patchValue({
        mainPageLink: this.pages[0].url
      })
    } else {
      this.viewSetMainLink = false;
      this.createPageForm.removeControl('mainPageLink');
    }
  }

  setMainLink(mainPageLink: string) {
    this.createPageForm.patchValue({ mainPageLink })
  }

  onSubmit(form: any) {
    this._firestoreService.createPage(form.value).then(() => {
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
