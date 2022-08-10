import { useContext } from 'react';
import InvoiceForm from '../components/InvoiceForm';
import InvoicesContext from '../context/InvoicesContext';
import { useNavigate } from 'react-router-dom';

const CreateInvoice = () => {
  const { invoices, setInvoices } = useContext(InvoicesContext);
  let navigate = useNavigate();

  const create = {
    title: 'New Invoice',
    submit: 'Create Invoice',
  };

  const handleOnSubmit = (invoice) => {
    // console.log(invoice);
    setInvoices([invoice, ...invoices]);
    navigate('/');
  };

  return (
    <InvoiceForm
      title={create.title}
      submitText={create.submit}
      handleOnSubmit={handleOnSubmit}
    />
  );
};

export default CreateInvoice;
