import { useState } from "react";
import './Styles/Cell.css';
import Grid from './Components/Grid';

function App() {
  const errorMessage = 'The Number Should be between 1 and 15';
  const [numOfRows, setNumOfRows] = useState(4);
  const [numOfColumns, setNumOfColumns] = useState(4);
  const [numOfIslands, setNumOfIslands] = useState(0);
  const [ShowErrorMessage, setShowErrorMessage] = useState(false);
  const rowColumnHandler = (name, value) => {
    if (value > 15 || value < 0) {
      setShowErrorMessage(true);
    } else {
      setShowErrorMessage(false);
      if (name === 'Rows') {
        setNumOfRows(value)
      } else {
        setNumOfColumns(value)
      }
    }
  }
  return (
    <div className="AppContainer">
      <div className="formbg-outer itemForm">
        <div className="formbg">
          <div className="formbg-inner padding-horizontal--48">
            <span className="padding-bottom--15">Enter the Number of Rows and Columns</span>
            <form id="stripe-login">
              <div className="field padding-bottom--24">
                <label htmlFor="Rows">Rows</label>
                <input type="number" value={numOfRows} name="Rows" onChange={(e) => rowColumnHandler(e.target.name, e.target.value)} />
              </div>
              {ShowErrorMessage ? <p className="errorContainer">{errorMessage}</p> : ''}
              <div className="field padding-bottom--24">
                <label htmlFor="Columns">Columns</label>
                <input type="number" value={numOfColumns} name="Columns" onChange={(e) => rowColumnHandler(e.target.name, e.target.value)} />
              </div>
              <div className="result">
                Number of Connected Cells: <strong>{numOfIslands}</strong>
              </div>
            </form>
          </div>
        </div>
        <div className="footer-link padding-top--24">
          <span>Designed and Implemented By Ata Razavi </span>
          <div className="listing padding-top--24 padding-bottom--24 flex-flex center-center">
            <span>©Rezevoo </span>
          </div>
        </div>
      </div>
      <div className="itemGrid">
        <Grid rows={numOfRows} columns={numOfColumns} setNumOfIslands={setNumOfIslands} />
      </div>
    </div>
  );
}

export default App;
