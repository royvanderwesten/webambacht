import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormControl} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'ba-page-builder-nav',
  templateUrl: './page-builder-nav.component.html',
  styleUrls: ['./page-builder-nav.component.scss']
})
export class PageBuilderNavComponent implements OnInit {
  @Input() pages: any;

  public selectPageForm: FormGroup;

  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private router: Router) {
    this.selectPageForm = this.fb.group({
      pageControl: new FormControl(''),
    });
  }

  ngOnInit(): void {
    this.selectPageForm.valueChanges.subscribe(val => {
      this.router.navigate(['/configure/' + val.pageControl])
    });

    this.selectPageForm.patchValue({pageControl: this.pages[0].url})
  }
}
