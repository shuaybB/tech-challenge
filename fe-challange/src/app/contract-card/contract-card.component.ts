import { Component, OnInit, Input } from '@angular/core';
import { Contract } from '../Models/Contract';

@Component({
  selector: 'app-contract-card',
  templateUrl: './contract-card.component.html',
  styleUrls: ['./contract-card.component.scss']
})
export class ContractCardComponent implements OnInit {

  @Input() Contract: Contract
  constructor() { }
  ngOnInit(): void {
  }

}
