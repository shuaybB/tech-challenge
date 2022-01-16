import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../Models/Message';

@Component({
  selector: 'app-message-card',
  templateUrl: './message-card.component.html',
  styleUrls: ['./message-card.component.scss']
})
export class MessageCardComponent implements OnInit {

  @Input() Message: Message
  constructor() { }
  ngOnInit(): void {
  }

}
