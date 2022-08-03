import React, { useState, useEffect, useRef } from "react";
import Button from "react-bootstrap/Button";
import { FaArrowLeft } from "react-icons/fa";
import { TbSquareRoot } from "react-icons/tb";
import { FaSquareRootAlt } from "react-icons/fa";
import AiOutlineArrowLeft from 'react-icons';
import { evaluate } from 'mathjs'


const Calculator = () => {

  const [value, setValue] = useState("");
  const ref = useRef(null);

  const buttonValueAccess = (btnName) => {


    if (btnName == "+" || btnName == "-" || btnName == "*" || btnName == "/" || btnName == "%" || btnName == "+-" || btnName == "." || btnName == "0"
      || btnName == "1" || btnName == "2" || btnName == "3" || btnName == "4" || btnName == "5" || btnName == "6" || btnName == "7"
      || btnName == "8" || btnName == "9" || btnName == "Int" || btnName == "dms" || btnName == "TT" | btnName == "I-E"
      || btnName == "sinh" || btnName == "cosh" || btnName == "tanh " || btnName == "Exp" || btnName == "ln"
      || btnName == "sin" || btnName == "cos" || btnName == "tan" || btnName == "Mod" || btnName == "("
      || btnName == ")" || btnName == "x2" || btnName == "xy" || btnName == "x5" || btnName == "log"
      || btnName == ")" || btnName == "nl" || btnName == "1/x" || btnName == "2/x" || btnName == "10x" || btnName == "=" || btnName == "C"

    ) {
      setValue(value + btnName)
      console.log(value);
      if (btnName == "=") {
        setValue(evaluate(value)); console.log("evealuate", evaluate(value))
      }
      else if (btnName == "C") {
        setValue(() => "");
      }


    }
  }
  //looping buttons in the component
  const BtnColumsRow2 = () => ['... ', 'inv', 'ln', '(', ')', 'ar', 'CE', 'C', '=+', 'sq'].map((btnName, index) => {
    return (

      <div key={index} style={{ width: "80px" }} className="col-1">
        <Button style={{ backgroundColor: "black", color: "white", borderColor: "white", width: "50px" }}
          onClick={(e) => { buttonValueAccess(btnName) }} variant="info">{btnName == 'ar' ? <FaArrowLeft /> : btnName}</Button></div>
    )
  }

  )

  const BtnColumsRow3 = () => ['Int', 'sinh', 'sin', 'x²', 'n!', '7', '8', '9', '/', '%'].map((btnName, index) =>

    <div key={index} style={{ width: "80px" }} className="col-1">
      <Button style={{ backgroundColor: "black", color: "white", borderColor: "white", width: "50px" }}
        onClick={(e) => { buttonValueAccess(btnName) }} variant="info">{btnName}</Button></div>)

  const BtnColumsRow4 = () => ['dms', 'cosh', 'cos', 'x⁵', '1/x', '4', '5', '6', '*', 'l/x'].map((btnName, index) => {
    return (
      <div key={index} style={{ width: "80px" }} className="col-1">
        <Button style={{ backgroundColor: "black", color: "white", borderColor: "white", width: "50px" }}
          onClick={(e) => { buttonValueAccess(btnName) }} variant="info">{btnName == '1/x' ? <FaSquareRootAlt /> : btnName}</Button></div>
    )
  }
  )
  const BtnColumsRow5 = () => ['tt', 'tanh', 'cos', 'xʸ', '1/xx', '1', '2', '3', '-', '..'].map((btnName, index) => {
    return (

      <div key={index} style={{ width: "80px" }} className="col-1">
        <Button style={{ backgroundColor: "black", color: "white", borderColor: "white", width: "50px" }}
          onClick={(e) => { buttonValueAccess(btnName) }} variant="info">{btnName == '1/xx' ? <FaSquareRootAlt /> : btnName}</Button></div>
    )
  }
  )

  const BtnColumsRow6 = () => ['F-E', 'exp', 'Mod', 'log', '10ˣ', '0', '..', '.', '+', '='].map((btnName, index) => <div key={index} style={{ width: "80px" }} className="col-1"><Button style={{ backgroundColor: "black", color: "white", borderColor: "white", width: "50px" }} onClick={(e) => { buttonValueAccess(btnName) }} variant="info">{btnName}</Button></div>)


  return (
    <div className="container" style={{ backgroundColor: "white", marginTop: 100, marginLeft: 250, height: 400, width: 960 }}>
      <div className="row">
        <div class="input-group mb-3">
          <input value={value} type='text' placeholder="0" style={{ width: 780, textAlign: "right", border: "2px solid black", borderRadius: 3 }} onChange={(e) => {

            setValue(e.target.value)
          }}
            onKeyPress={(event) => {
              if (event.target.keyCode == 13) {
                buttonValueAccess("=");
              }
            }}
          />
        </div>
      </div>

      <div className="row" >
        <div className="col-5"><Button style={{ backgroundColor: "black", color: "white", borderColor: "white", width: "370px", display: "flex", gap: "30px" }}>

          <input type="radio" class="radio" name="x" value="y" id="y" />
          <label for="y">Degree</label>
          <input type="radio" class="radio" name="x" value="z" id="z" />
          <label for="z">Raidus</label>
          <input type="radio" class="radio" name="x" value="z" id="z" />
          <label for="z">Grads</label>
        </Button></div>
        <div className="col-1" style={{ width: "80px" }} ><Button style={{ backgroundColor: "black", color: "white", borderColor: "white", width: "50px" }} variant="info">MC</Button></div>
        <div className="col-1" style={{ width: "80px" }} ><Button style={{ backgroundColor: "black", color: "white", borderColor: "white", width: "50px" }} variant="info">MR</Button></div>
        <div className="col-1" style={{ width: "80px" }} ><Button style={{ backgroundColor: "black", color: "white", borderColor: "white", width: "50px" }} variant="info">MS</Button></div>
        <div className="col-1" style={{ width: "80px" }} ><Button style={{ backgroundColor: "black", color: "white", borderColor: "white", width: "50px" }} variant="info">M-</Button></div>
        <div className="col-1" style={{ width: "80px" }} ><Button style={{ backgroundColor: "black", color: "white", borderColor: "white", width: "50px" }} variant="info">M+</Button></div>



      </div>

      <div className="row">
        <BtnColumsRow2 />
      </div>

      <div className="row">
        {<BtnColumsRow3 />}

      </div>

      <div className="row">
        {<BtnColumsRow4 />}

      </div>
      <div className="row">
        {<BtnColumsRow5 />}

      </div>

      <div className="row">
        {<BtnColumsRow6 />}

      </div>


    </div>


  );

}
export default Calculator;

