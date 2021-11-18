import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  state={
    history:[] as any,
    operand1:"" as any,
    operand2:"" as any,
    finalOperand1:"" as any,
    finalOperand2:"" as any,
    isOperator: false,
    operator:"" as any,
    display1:"" as any,
    display2:"" as any,
    error : "" as any

  }
  
  handleOperand = (event:any) => {
    let value = event.target.value;
    if (this.state.isOperator) {
      if (String(this.state.finalOperand2).length <= 10) {
        let isValid = Number(this.state.operand2 + value);
        if (isValid || isValid === 0) {
          this.state.finalOperand2 = isValid;
          this.state.display1 = this.state.display1 + value;
        } else this.state.error = 'ERROR';
        this.state.operand2 = this.state.operand2 + value;
      } else {
        this.state.error = 'LENGTH EXCEDDED';
      }
      console.log(this.state)
    } else {
      if (String(this.state.finalOperand1).length <= 10) {
        let isValid = Number(this.state.operand1 + value);
        if (isValid || isValid === 0) {
          (this.state.finalOperand1 = isValid),
            (this.state.display1 = String(isValid));
        } else this.state.error = 'ERROR';
        this.state.operand1 = this.state.operand1 + value;
      } else {
        this.state.error = 'LENGTH EXCEEDED';
      }
      console.log(this.state)
    }
  };

  handleOperator = (event: any) => {
    let value = event.target.value;
    if (this.state.finalOperand1) {
      if (this.state.finalOperand1 && this.state.finalOperand2) {
        let finalResultCall = this.getFinalRes();
        console.log('...///');
        (this.state.operand1 = String(finalResultCall)),
          (this.state.finalOperand1 = finalResultCall),
          (this.state.display1 = String(finalResultCall) + value),
          (this.state.operand2 = ''),
          (this.state.finalOperand2 = ''),
          (this.state.operator = value);
      } else {
        (this.state.isOperator = true),
          (this.state.display1 =
            String(this.state.finalOperand1) +
            value +
            String(this.state.finalOperand2)),
          (this.state.operator = value);
      }
    }
  };
    

  getFinalRes = () => {
    if (this.state.operand1 && this.state.operand2) {
      var historyArray: String[];
      historyArray = [...this.state.history];
      let newStr =
        String(this.state.finalOperand1) +
        this.state.operator +
        String(this.state.finalOperand2);
      historyArray.push(newStr);
      this.state.history = historyArray;
      // this.historyProps.emit(historyArray)
      // this.props.updateHistory(historyArray);
      if (this.state.operator === '+') {
        this.state.display2 =
          this.state.finalOperand1 + this.state.finalOperand2;

        return this.state.finalOperand1 + this.state.finalOperand2;
      } else if (this.state.operator === '-') {
        this.state.display2 =
          this.state.finalOperand1 - this.state.finalOperand2;

        return this.state.finalOperand1 - this.state.finalOperand2;
      } else if (this.state.operator === '*') {
        this.state.display2 =
          this.state.finalOperand1 * this.state.finalOperand2;

        return this.state.finalOperand1 * this.state.finalOperand2;
      } else if (this.state.operator === '/') {
        this.state.display2 =
          this.state.finalOperand1 / this.state.finalOperand2;

        return this.state.finalOperand1 / this.state.finalOperand2;
      } else if (this.state.operator === '%') {
        this.state.display2 =
          this.state.finalOperand1 % this.state.finalOperand2;
        return this.state.finalOperand1 % this.state.finalOperand2;
      }
    }
  };
  handleclear = () => {
    console.log(this.state);
    (this.state.operand1 = ''),
      (this.state.operand2 = ''),
      (this.state.finalOperand1 = ''),
      (this.state.finalOperand2 = ''),
      (this.state.operator = ''),
      (this.state.isOperator = false),
      (this.state.display1 = ''),
      (this.state.display2 = ''),
      (this.state.error = '');
  };
  handleDelete = () => {
    if (this.state.isOperator) {
      let str = String(this.state.finalOperand2).slice(0, -1);
      //   console.log(str)

      (this.state.finalOperand2 = Number(str)),
        (this.state.display1 =
          String(this.state.finalOperand1) + this.state.operator + str),
        (this.state.operand2 = str);
    } else {
      let str = String(this.state.finalOperand1).slice(0, -1);
      //   console.log(str)

      (this.state.finalOperand1 = Number(str)),
        (this.state.display1 =
          str + this.state.operator + String(this.state.finalOperand2)),
        (this.state.operand1 = str);
    }
  };
  
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
