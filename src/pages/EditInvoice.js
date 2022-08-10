import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import InvoiceForm from '../components/InvoiceForm';
import InvoicesContext from '../context/InvoicesContext';

const EditInvoice = () => {
  const { id } = useParams();
  const navigate = useNavigate()
  const { invoices, setInvoices } = useContext(InvoicesContext);
  const invoiceToEdit = invoices.find((invoice) => invoice.id === id);

  const edit = {
    title: `Edit #${id}`,
    submit: 'Save Changes',
  };


  const handleOnSubmit = (invoice) => {
    const filteredInvoices = invoices.filter((invoice) => invoice.id !== id);
    setInvoices([invoice, ...filteredInvoices]);
    navigate('/');
  };

  return (
    <InvoiceForm
      invProp={invoiceToEdit}
      title={edit.title}
      submitText={edit.submit}
      handleOnSubmit={handleOnSubmit}
    />
  );
};

export default EditInvoice;
