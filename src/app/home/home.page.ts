import { Component, OnInit } from '@angular/core';
import { MathOperationsService } from '../math-operations.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit{
  // Serves as a placeholder for our math operation items
  operations = [];

  // Here we're injection MathOperationsService
  constructor(private mathOper: MathOperationsService) { }

  // Notice, we are using OnInit hook provided by angular core to perform operations after
  // Angular has inititialized all data-bound properties
  ngOnInit(): void {
    // Use MathOperationsService's getOperations() to get all math operation items
    this.operations = this.mathOper.getOperations();
  }
}
