import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ba-content-block',
  templateUrl: './content-block.component.html',
  styleUrls: ['./content-block.component.scss']
})
export class ContentBlockComponent implements OnInit {
  @Input() contentSection: any;

  public showControls: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
