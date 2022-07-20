import { useContext } from 'react';
import InvoiceForm from '../components/InvoiceForm'
import InvoicesContext from '../context/InvoicesContext'
import { useNavigate } from 'react-router-dom'



const CreateInvoice = ({ history }) => {
  const { invoices, setInvoices } = useContext(InvoicesContext);
  let navigate = useNavigate();



  const handleOnSubmit = (invoice) => {
    console.log(invoice);
    setInvoices([ invoice, ...invoices ]);
    navigate('/');
  }

  return (
      <InvoiceForm handleOnSubmit={handleOnSubmit} />
  );
};

export default CreateInvoice;
