import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MathOperationsService {
  private operations: any[] = [
    {
      name: 'addition',
      desc: 'You add two numbers',
      symbol: '+'
    },
    {
      name: 'subtraction',
      desc: 'You subtract one number from another',
      symbol: '_'
    },
    {
      name: 'multiplication',
      desc: 'You multiply two numbers',
      symbol: '\u00F7'
    }
  ];

  constructor() { }

  getOperations() {
    return this.operations;
  }

  getOperationByName(operName: string) {
    return this.operations.find(oper => oper.name === operName);
  }
}
