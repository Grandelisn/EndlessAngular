import { Component, Input, OnInit } from '@angular/core';
//This creates a modular component that displays list items
@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent {
  
  @Input() stepNumber?: number;
  @Input() title?: string;
  @Input() body?: string;


}
