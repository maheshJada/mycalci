import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

   allVal = [
    { id: "operand", val: "7" },
    { id: "operand", val: "8" },
    { id: "operand", val: "9" },
    { id: "operator", val: "/" },
    { id: "operand", val: "4" },
    { id: "operand", val: "5" },
    { id: "operand", val: "6" },
    { id: "operator", val: "*" },
    { id: "operand", val: "1" },
    { id: "operand", val: "2" },
    { id: "operand", val: "3" },
    { id: "operator", val: "-" },
    { id: "operand", val: "0" },
    { id: "operand", val: "." },
    { id: "operator", val: "%" },
    { id: "operator", val: "+" },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
