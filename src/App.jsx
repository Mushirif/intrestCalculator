import { Stack, TextField, Button } from "@mui/material";
import "./App.css";
import { useState } from "react";

function App() {
  const [interest, setInterest] = useState(0);
  const [principle, setPrinciple] = useState(0);
  const [rate, setRate] = useState(0);
  const [year, setYear] = useState(0);

  const [invalidPrinciple, setinvalidPrinciple] = useState(false);
  const [invalidRate, setinvalidRate] = useState(false);
  const [invalidYear, setinvalidYear] = useState(false);

  const validateInput = (inputTag) => {
    console.log(inputTag, typeof inputTag);
    const { name, value } = inputTag;
    console.log(!!value.match(/^[0-9]*.?[0-9]+$/));
    console.log(!!value.match(/^\d*.?\d+$/));

    if (name == "principle") {
      setPrinciple(value);
      if (!!value.match(/^\d*.?\d+$/)) {
        setinvalidPrinciple(false);
      } else {
        setinvalidPrinciple(true);
      }
    } else if (name == "rate") {
      setRate(value);
      if (!!value.match(/^\d*.?\d+$/)) {
        setinvalidRate(false);
      } else {
        setinvalidRate(true);
      }
    } else if (name == "year") {
      setYear(value);
      if (!!value.match(/^\d*.?\d+$/)) {
        setinvalidYear(false);
      } else {
        setinvalidYear(true);
      }
    }
  };
  const handleCalculate = (e) => {
    // html method to avoid reloading for the page IMP
    e.preventDefault();
    console.log("buttonclicked");
    if (principle && rate && year) {
      setInterest((principle * rate * year) / 100);
    } else {
      alert("Please fill the form completly");
    }
  };

  const handleReset = () => {
    setPrinciple(0);
    setRate(0);
    setYear(0);
    setInterest(0);
    setinvalidPrinciple(false);
    setinvalidRate(false);
    setinvalidYear(false);
  };
  return (
    <>
      <div
        style={{ width: "100%", minHeight: "100vh" }}
        className="d-flex justify-content-center align-items-center bg-dark"
      >
        <div className="w-50 bg-light p-5 rounded">
          <h3>Simple Interest Calculator</h3>
          <p>Calculate your simple Interest Easily !</p>
          <div className="bg-warning p-5 rounded text-center">
            <h1 className="text-light">₹{interest}</h1>
            <p className="fw-bolder">Total Simple Interest</p>
          </div>
          <form className="mt-5">
            {/* principle amount */}
            <div className="mb-3">
              <TextField
                value={principle || ""}
                name="principle"
                onChange={(e) => validateInput(e.target)}
                className="w-100"
                id="outlined-principle"
                label="₹ Principle Amount"
                variant="outlined"
              />
            </div>
            {/* invalid principle */}
            {invalidPrinciple && (
              <div className="text-danger fw-bolder mb-3">
                *Invalid principle amount
              </div>
            )}
            <div className="mb-3">
              <TextField
                value={rate || ""}
                name="rate"
                onChange={(e) => validateInput(e.target)}
                className="w-100"
                id="outlined-rate"
                label="% Rate"
                variant="outlined"
              />
            </div>
            {/* invalid rate */}
            {invalidRate && (
              <div className="text-danger fw-bolder mb-3">*Invalid Rate</div>
            )}
            <div className="mb-3">
              <TextField
                value={year || ""}
                name="year"
                onChange={(e) => validateInput(e.target)}
                className="w-100"
                id="outlined-year"
                label="Time Period (Yr)"
                variant="outlined"
              />
            </div>
            {/* invalid year */}
            {invalidYear && (
              <div className="text-danger fw-bolder mb-3">*invalid year</div>
            )}
            {/* button */}
            <Stack direction="row" spacing={2}>
              <Button
                type="submit"
                onClick={handleCalculate}
                disabled={invalidPrinciple || invalidRate || invalidYear}
                style={{ width: "50%", height: "70px" }}
                className="bg-dark"
                variant="contained"
              >
                Calculate
              </Button>
              <Button
                onClick={handleReset}
                style={{ width: "50%", height: "70px" }}
                className="border border-dark text-dark"
                variant="outlined"
              >
                Reset
              </Button>
            </Stack>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
