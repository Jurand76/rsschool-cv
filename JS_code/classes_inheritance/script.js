"use strict";

class Builder {
  constructor(parameter) {
    if (parameter == undefined) {
      this.result = 0;
    } else {
      this.result = parameter;
    }
  }
  plus() {
    for (let i = 0; i < arguments.length; i++) {
      this.result = this.result + arguments[i];
      console.log(
        "i = " +
          i +
          ", argument = +" +
          arguments[i] +
          ", result = " +
          this.result
      );
    }
    return this;
  }
  multiply(n) {
    let val = this.result;
    for (let i = 1; i < n; i++) {
      this.result = this.result + val;
    }
    return this;
  }
  get() {
    return this.result;
  }
}

// .plus(...n)        // take infinite number of integers and sum all with stored value;
//.minus(...n)        // take infinite number of integers and subtract from stored value;
//.multiply(n)        // multiply param n on stored value;
//.divide(n)          // leaves integer part of division stored value on n;
//.mod(n)             // leaves remainder of the division stored value with on n;
//.get()              // returns stored value;

class IntBuilder extends Builder {
  minus() {
    for (let i = 0; i < arguments.length; i++) {
      this.result = this.result - arguments[i];
      console.log(
        "i = " +
          i +
          ", argument = -" +
          arguments[i] +
          ", result = " +
          this.result
      );
    }
    return this;
  }

  divide(n) {
    this.result = Math.floor(this.result / n);
    return this;
  }

  mod(n) {
    this.result = this.result % n;
    return this;
  }

  random(from, to) {
    this.result = Math.round(Math.random() * (to - from)) + from;
    return this;
  }
}

// plus(...str)             // takes infinite number of strings and concat with stored string;
// minus(n)                 // cut last n chars from stored string;
// multiply(int)            // repeat stored strings n times;
// divide(n)                // leaves first k chars of stored string, where k = Math.floor(str.length / n);
// remove(str)              // remove taken string str from stored; Prohibited to use String.prototype.replace();
// sub(from, n)             // leaves substring starting from and with length n;
// get()                    // returns stored value;

class StringBuilder extends Builder {
  minus(n) {
    this.result = this.result.slice(0, this.result.length - n);
    return this;
  }
}

// tests in console for IntBuilder

var const1 = new IntBuilder(10);
console.log(const1);
var const2 = const1.plus(2, 3, 2);
console.log(const2);
var const3 = const2.minus(1, 2);
console.log(const3);
var const4 = const3.multiply(2);
console.log(const4);
var const5 = const4.divide(4);
console.log(const5);
var const6 = const5.mod(3);
console.log(const6);
console.log(const6.get());

// tests in console for StringBuilder

var str1 = new StringBuilder("Hello");
var str2 = str1.plus(" all", "!");
console.log(str2);
var str3 = str2.minus(4);
console.log(str3);
var str4 = str3.multiply(3);
console.log(str4);

console.log(const4);
console.log(str2.get());

var display_result = document.getElementById("result_1");
