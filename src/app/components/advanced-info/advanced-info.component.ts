import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-advanced-info',
  templateUrl: './advanced-info.component.html',
  styleUrls: ['./advanced-info.component.css']
})
export class AdvancedInfoComponent implements OnInit {
  @Input() w: User;

  constructor() { }

  ngOnInit(): void {
  }

}
