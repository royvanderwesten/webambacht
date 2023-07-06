import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl } from "@angular/forms";
import { contentTypes } from "../../content-types";
import { ContentType } from "../../modals/content-type";

@Component({
  selector: 'ba-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.scss']
})
export class CreateContentComponent implements OnInit {
  @Input() contentAmnt: number = 0;
  @Input() hardIndex: number = 0;

  @Output() close: EventEmitter<void> = new EventEmitter<void>();
  @Output() fireCreateContent: EventEmitter<any> = new EventEmitter<any>();

  public showCreateContent: boolean;
  public createContentForm: FormGroup;
  public contentTypes: ContentType[];
  public dynamicInputFields: string[] = [];

  constructor(private fb: FormBuilder) {
    this.contentTypes = contentTypes;
    this.createContentForm = this.fb.group({
      contentType: '',
      fields: this.fb.group({})
    });
    this.showCreateContent = false;
  }

  ngOnInit(): void {
    this.createContentForm.get('contentType')?.valueChanges.subscribe(res => {
      this.dynamicInputFields = [];
      this.createContentForm.removeControl('fields');

      this.getFormFields(res).forEach(field => {
        this.createContentForm?.addControl('fields', new FormGroup({}));
        const fieldsGroup = this.createContentForm.get('fields') as FormGroup;
        fieldsGroup?.addControl(field, new FormControl('', [Validators.required]));
        this.dynamicInputFields.push(field);
      })
    });
  }

  getFormFields(contentType: string): any[] {
    const type: any = this.contentTypes.find(x => x.type === contentType);
    return Object.keys(type.fields);
  }

  submitContent(form: any) {
    this.fireCreateContent.emit({...form.value, index: this.hardIndex ? this.hardIndex : this.contentAmnt});
  }
}
