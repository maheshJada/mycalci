import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit
/**
 * State variable will represnt properties what we are used
 */
{
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
  /**
   * @param {*} event
   * @description handleOperand function it is a logic for the calculator
   * Here i wrote the logic for  the operand values not more than 10
   * The Entered first one is operand1 and next one is operand2  and check if it is operand or operator
   *  if it is valid then execute the what oprtaions we did.if it is not satisafy it will give a error
   * @returns It will not return anything
   */
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
/**
 * @param {*} event
 * @description it will check the operator 
 *@returns it will not return anything
 */
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
    

  /**
   * @description it will displaay the history what i did in calcultor
   * add both operand1 and operand2
   * @returns it will return what i did the opertions like +,-,*...
   */
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

  /**
   * In this we are clear the operand and make it as null
   */
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

   /**
   * In this we are delete what we are entered in bodycomponent
   */
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
  /**
   * allval will represent the operand operator  values declarion
   */
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
