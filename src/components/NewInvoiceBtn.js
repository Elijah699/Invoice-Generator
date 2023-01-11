import React from 'react';
import { Link } from 'react-router-dom';

// styles
import { RedBtn,
        //  PurpleBtn,
         GreenBtn
} from '../styles/InvoiceForm.styles';

const NewInvoiceBtn = ({ submitText }) => {
  return (
    <div>
      {/* Save/Print/Exit */}
      <div className="actionBtn">
        <div>
          <Link to="/">
            <RedBtn type="button">Cancel</RedBtn>
          </Link>
        </div>
        <div>
          <div className="right">
            {/* <PurpleBtn type="submit" onClick={saveDraft}>
              Save Draft
            </PurpleBtn> */}
            <GreenBtn type="submit">{submitText}</GreenBtn>
          </div>
        </div>
      </div>

      {/* Mobile Save/Print/Exit */}
      <div className="m-actionBtn">
        <div className="flex">
          <Link to="/">
            <div>
              <RedBtn type="button">Cancel</RedBtn>
            </div>
          </Link>
          {/* <PurpleBtn type="submit" onClick={saveDraft}>
            Save Draft
          </PurpleBtn> */}
          <div className="create">
            <GreenBtn type="submit">{submitText}</GreenBtn>
          </div>
        </div>
        {/* <div></div> */}
      </div>
    </div>
  );
};

export default NewInvoiceBtn;
