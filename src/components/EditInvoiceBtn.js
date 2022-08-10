import React from 'react';
import { Link } from 'react-router-dom';

// styles
import { PurpleBtn, RedBtn } from '../styles/InvoiceForm.styles';

const EditInvoiceBtn = ({ submitText }) => {
  return (
    <div>
      {/* Save/Print/Exit */}
      <div className="edit-actionBtn">
        <Link to="/">
          <RedBtn>Cancel</RedBtn>
        </Link>

        <PurpleBtn type="submit">{submitText}</PurpleBtn>
      </div>

      {/* Mobile Save/Print/Exit */}
      <div className="m-edit-actionBtn">
        <div className="flex">
          <Link to="/">
            <RedBtn>Cancel</RedBtn>
          </Link>
          <PurpleBtn type="submit">{submitText}</PurpleBtn>
        </div>
      </div>
    </div>
  );
};

export default EditInvoiceBtn;
