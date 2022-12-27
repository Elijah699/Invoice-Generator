import React, { useEffect, useContext } from 'react';
import InvoicesContext from '../context/InvoicesContext';
import jsPDF from 'jspdf';
import pdfMake from 'pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import htmlToPdfmake from 'html-to-pdfmake';
import { useParams } from 'react-router-dom';

// styles
import { PrintWrapper } from '../styles/PrintInvoice.styles';

const PrintInvoice = () => {
  const { id } = useParams();
  const { invoices } = useContext(InvoicesContext);

  const getInvoice = invoices.find((invoice) => invoice.id === id);

  console.log(getInvoice);
  // useEffect(() => {
  //   printDocument();
  // }, []);

  const printDocument = () => {
    const doc = new jsPDF();

    // get html
    const getHtmlDiv = document.getElementById('divToPrint');

    let htmlPDF = htmlToPdfmake(getHtmlDiv.innerHTML);

    const documentDefinition = { content: htmlPDF };

    pdfMake.vfs = pdfFonts.pdfMake.vfs;

    pdfMake.createPdf(documentDefinition).open();
  };

  return (
    <PrintWrapper id="divToPrint">
      <div>
        <div className="blue-one"></div>
        <h2>INVOICE</h2>

        <div className="flex first">
          <div>
            <h6>{getInvoice.billerName}</h6>
            <p>{getInvoice.billerStreet}</p>
            <p>{getInvoice.billerCity}</p>
            <p>{getInvoice.billerCountry}</p>
            <p>{getInvoice.billerZip}</p>
          </div>
          <div>
            <h6 className="blue">INVOICE TO:</h6>
            <p>{getInvoice.clientName}</p>
            <p>{getInvoice.clientStreet}</p>
            <p>{getInvoice.clientEmail}</p>
            <p>{getInvoice.clientCity}</p>
            <p>{getInvoice.clientCountry}</p>
            <p>{getInvoice.clientZip}</p>
          </div>
          <div>
            <h6 className="blue">Invoice Number</h6>
            <p>{getInvoice.id}</p>
            <h6 className="blue">Date of Invoice</h6>
            <p>{getInvoice.invoiceDate}</p>
            <h6 className="blue">Due Date</h6>
            <p>{getInvoice.invoiceDueDate}</p>
          </div>
        </div>

        <div className="second">
          <table>
            <tr>
              <th>DESCRIPTION</th>
              <th>QTY</th>
              <th>PRICE</th>
              <th>TOTAL</th>
            </tr>
          </table>
        </div>

        <div className="third">
          <p>
            SUBTOTAL: <span></span>
          </p>
          <p>
            DISCOUNT: <span></span>
          </p>
          <p>
            BALANCE DUE: <span></span>
          </p>
        </div>

        <div className="fourth">
          <p>NOTES: </p>

          <p>TERMS AND CONDITION: </p>
        </div>

        <div className="blue-two"></div>
      </div>
    </PrintWrapper>
  );
};

export default PrintInvoice;
