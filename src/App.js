import "./App.css";
import React from "react";
import PDFFILE from './components/PDFFILE';
import { PDFDownloadLink } from "@react-pdf/renderer";

const App = () => {
  return (
    <div className="App">
      <PDFDownloadLink document={<PDFFILE />} fileName="INVOICE">
      {({loading}) => (loading ? <button>Loading Document...</button> : <button>Download</button> )}
      </PDFDownloadLink>
      {/* <PDFFILE /> */}
    </div>
  );
};

export default App;