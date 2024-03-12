// Styles
import "./App.css";

// React
import { useState } from "react";

// Components
import QrReader from "./components/QrReader";

function App() {
  const [openQr, setOpenQr] = useState<boolean>(false);
  const [scannedResult, setScannedResult] = useState<string | undefined>("");

  return (
    <div>
      <button onClick={() => setOpenQr(!openQr)}>
        {openQr ? "Close" : "Open"} QR Scanner
      </button>
      {openQr ? <QrReader setOpenQr={setOpenQr} setScannedResult={setScannedResult}/>: <p
          style={{
            // position: "absolute",
            // top: 0,
            // left: 0,
            // zIndex: 99999,
            color: "black",
          }}
        >
          Scanned Result: {scannedResult}
        </p>}
      {/* {scannedResult && (
        <p
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 99999,
            color: "white",
          }}
        >
          Scanned Result: {scannedResult}
        </p>
      )} */}
    </div>
  );
}

export default App;
