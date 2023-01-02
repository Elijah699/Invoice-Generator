import React, { useContext, useEffect } from 'react';
import InvoicesContext from '../context/InvoicesContext';

// PDFMAKE imports
// import jsPDF from 'jspdf';
// import pdfMake from 'pdfmake';
// import pdfFonts from 'pdfmake/build/vfs_fonts';
// import htmlToPdfmake from 'html-to-pdfmake';
import { useParams } from 'react-router-dom';

// REACT PDF RENDER imports
// import { Document, Page } from '@react-pdf/renderer';
// import download from '../assets/download.jpg'

// styles
import { PrintWrapper } from '../styles/PrintInvoice.styles';

const PrintInvoice = () => {
  const { id } = useParams();
  const { invoices } = useContext(InvoicesContext);

  const getInvoice = invoices.find((invoice) => invoice.id === id);

  useEffect(() => {
    printDocument();
  }, []);

  const printDocument = () => {
    // const doc = new jsPDF();

    // //   // get html
    // const getHtmlDiv = document.getElementById('divToPrint');

    // let htmlPDF = htmlToPdfmake(getHtmlDiv.innerHTML);

    // const documentDefinition = {
    //   content: htmlPDF,
    // };

    // pdfMake.vfs = pdfFonts.pdfMake.vfs;

    // pdfMake.createPdf(documentDefinition).print();
    window.print()
  };

  return (
    // <Document title="invoice">
    // <Page size="A4">
    // <DownloadPDF />
    <PrintWrapper id="divToPrint">
      <div>
        <div className="blue-one"></div>
        <h2>INVOICE</h2>

        <div className="info">
          <div className="first">
            <div>
              <h5>{getInvoice.billerName}</h5>
              <p>{getInvoice.billerStreet}</p>
              <p>{getInvoice.billerCity}</p>
              <p>{getInvoice.billerCountry}</p>
              <p>{getInvoice.billerZip}</p>
            </div>
            <div>
              <h5 className="blue">INVOICE TO:</h5>
              <p>{getInvoice.clientName}</p>
              <p>{getInvoice.clientStreet}</p>
              <p>{getInvoice.clientEmail}</p>
              <p>{getInvoice.clientCity}</p>
              <p>{getInvoice.clientCountry}</p>
              <p>{getInvoice.clientZip}</p>
            </div>
            <div>
              <h5 className="blue">Invoice Number</h5>
              <p className="caps">{getInvoice.id}</p>
              <h5 className="blue">Date of Invoice</h5>
              <p>{getInvoice.invoiceDate}</p>
              <h5 className="blue">Due Date</h5>
              <p>{getInvoice.invoiceDueDate}</p>
            </div>
          </div>

          <div className="second">
            <table>
              <tr>
                <th width="50%">DESCRIPTION</th>
                <th width="10%">QTY</th>
                <th width="20%">PRICE</th>
                <th width="20%">TOTAL</th>
              </tr>
              {getInvoice.invItemList.map((item, index) => {
                return (
                  <tr key={index}>
                    <td width="50%">{item.itemName}</td>
                    <td width="10%">{item.qty}</td>
                    <td width="20%">{item.price}</td>
                    <td width="20%">{item.total}</td>
                  </tr>
                );
              })}
            </table>
          </div>

          <div className="third">
            <p>
              SUBTOTAL:{' '}
              <span className="sub-total">£{getInvoice.invTotal}</span>
            </p>
            <p>
              DISCOUNT: <span>0</span>
            </p>
            <p>
              BALANCE DUE:{' '}
              <span className="bal-due">£{getInvoice.invTotal}</span>
            </p>
          </div>

          <div className="fourth">
            <p>NOTE: Thanks for patronizing us!!!</p>

            <p>
              TERMS AND CONDITION:{' '}
              <span>Please make the payment before or by the due date.</span>
            </p>
          </div>
        </div>

        <div className="blue-two"></div>
      </div>
    </PrintWrapper>
    // </Page>
    // </Document>
  );
};

export default PrintInvoice;
