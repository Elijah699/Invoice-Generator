import { useState } from 'react';
import TableRows from './TableRows';
// styles
import {
  StyledModal,
  FormWrapper,
  Invh4,
  Invh3,
  FlexCon,
  FlexColCon,
  Label,
  InputCon,
  WorkItem,
  AddItemBtn,
  GreenBtn,
  PurpleBtn,
  RedBtn,
} from '../styles/InvoiceModal.styles';

// icons
import plus from '../assets/icon-plus.svg';

const InvoiceModal = ({active, setActive}) => {
  // Table
  const [rowsData, setRowsData] = useState([]);

  const [billerStreet, setBillerStreet] = useState('');
  const [billerCity, setBillerCity] = useState('');
  const [billerZip, setBillerZip] = useState('');
  const [billerCountry, setBillerCountry] = useState('');
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientStreet, setClientStreet] = useState('');
  const [clientCity, setClientCity] = useState('');
  const [clientZip, setClientZip] = useState('');
  const [clientCountry, setClientCountry] = useState('');
  // const [invDate, setInvDate] = useState('');
  const [payDue, setPayDue] = useState('');
  const [payTerm, setPayTerm] = useState('');
  const [proDesc, setProDesc] = useState('');


  const handleInputData = (evt) => {
    const { name, value } = evt.target;

    switch (name) {
      case 'billerStreet':
        setBillerStreet(value);
        break;
      case 'billerCity':
        setBillerCity(value);
        break;
      case 'billerZip':
        setBillerZip(value);
        break;
      case 'billerCountry':
        setBillerCountry(value);
        break;
      case 'clientName':
        setClientName(value);
        break;
      case 'clientEmail':
        setClientEmail(value);
        break;
      case 'clientStreet':
        setClientStreet(value);
        break;
      case 'clientCity':
        setClientCity(value);
        break;
      case 'clientZip':
        setClientZip(value);
        break;
      case 'clientCountry':
        setClientCountry(value);
        break;
      // case 'invDate':
      //   setInvDate(value);
      //   break;
      case 'payDue':
        setPayDue(value);
        break;
      case 'payTerm':
        setPayTerm(value);
        break;
      case 'proDesc':
        setProDesc(value);
        break;
    }
  };

  const date = new Date();
  const currentDate = `${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()}`;


  const handleSubmit = (evt) => {
    evt.preventDefault();
    // const {
    //   billerStreet,
    //   billerCity,
    //   billerZip,
    //   billerCountry,
    //   clientName,
    //   clientEmail,
    //   clientStreet,
    //   clientCity,
    //   clientZip,
    //   clientCountry,
    //   payDue,
    //   payTerm,
    //   proDesc,
    // } = evt.target.elements;

    // console.log(
    //   billerStreet.value,
    //   billerCity.value,
    //   payDue.value,
    //   payTerm.value
    // );
  };

  const addTableRows = () => {
    const rowsInput = {
      itemName: '',
      qty: '',
      price: '',
    };
    setRowsData([...rowsData, rowsInput]);
  };

  const deleteTableRows = (index) => {
    const rows = [...rowsData];
    rows.splice(index, 1);
    setRowsData(rows);
  };

  const handleChange = (index, evnt) => {
    const { name, value } = evnt.target;
    const rowsInput = [...rowsData];
    rowsInput[index][name] = value;
    setRowsData(rowsInput);
  };

  return (
    <StyledModal className={active ? 'active' : ''}>
        <FormWrapper onSubmit={handleSubmit}>
          <h1>New Invoice</h1>

          {/* Bill From */}
          <div className="billFrom">
            <Invh4>Bill From</Invh4>

            <FlexColCon>
              <Label htmlFor="billerStreetAddress">Street Address</Label>
              <InputCon
                name="billerStreet"
                value={billerStreet}
                type="text"
                onChange={handleInputData}
                required
              />
            </FlexColCon>

            <FlexCon>
              <FlexColCon>
                <Label htmlFor="billerCity"> City</Label>
                <InputCon
                  name="billerCity"
                  value={billerCity}
                  type="text"
                  onChange={handleInputData}
                  required
                />
              </FlexColCon>
              <FlexColCon>
                <Label htmlFor="billerZipCode">Zip Code</Label>
                <InputCon
                  name="billerZip"
                  value={billerZip}
                  type="text"
                  onChange={handleInputData}
                  required
                />
              </FlexColCon>
              <FlexColCon>
                <Label htmlFor="billerCountry">Country</Label>
                <InputCon
                  name="billerCountry"
                  value={billerCountry}
                  type="text"
                  onChange={handleInputData}
                  required
                />
              </FlexColCon>
            </FlexCon>
          </div>

          {/* Bill To */}
          <div className="billTo">
            <Invh4>Bill To</Invh4>
            <FlexColCon>
              <Label htmlFor="clientName">Client's Name</Label>
              <InputCon
                name="clientName"
                value={clientName}
                type="text"
                onChange={handleInputData}
                required
              />
            </FlexColCon>
            <FlexColCon>
              <Label htmlFor="clientEmail">Client's Email</Label>
              <InputCon
                name="clientEmail"
                value={clientEmail}
                type="email"
                onChange={handleInputData}
                required
              />
            </FlexColCon>
            <FlexColCon>
              <Label htmlFor="clientStreetAddress">Street Address</Label>
              <InputCon
                name="clientStreet"
                value={clientStreet}
                type="text"
                onChange={handleInputData}
                required
              />
            </FlexColCon>

            <FlexCon>
              <FlexColCon>
                <Label htmlFor="clientCity">City</Label>
                <InputCon
                  name="clientCity"
                  value={clientCity}
                  type="text"
                  onChange={handleInputData}
                  required
                />
              </FlexColCon>
              <FlexColCon>
                <Label htmlFor="clientZipCode">Zip Code</Label>
                <InputCon
                  name="clientZip"
                  value={clientZip}
                  type="text"
                  onChange={handleInputData}
                  required
                />
              </FlexColCon>
              <FlexColCon>
                <Label htmlFor="clientCountry">Country</Label>
                <InputCon
                  name="clientCountry"
                  value={clientCountry}
                  type="text"
                  onChange={handleInputData}
                  required
                />
              </FlexColCon>
            </FlexCon>
          </div>

          {/* Invoice Work Details */}
          <FlexColCon>
            <FlexCon>
              <FlexColCon>
                <Label htmlFor="invoiceDate">Invoice Date</Label>
                <InputCon
                  name="invDate"
                  value={currentDate}
                  disabled
                  type="text"
                />
              </FlexColCon>
              <FlexColCon>
                <Label htmlFor="paymentDueDate">Payment Due</Label>
                <InputCon
                  name="payDue"
                  value={payDue}
                  disabled
                  type="text"
                  onChange={handleInputData}
                />
              </FlexColCon>
            </FlexCon>

            <div className="desc">
              <FlexColCon>
                <Label htmlFor="paymentTerms">Payment Terms</Label>
                <select name="payTerm" value={payTerm} required type="text">
                  <option value={30}>Next 30 Days</option>
                  <option value={60}>Next 60 Days</option>
                </select>
              </FlexColCon>
            </div>

            <div className="desc">
              <FlexColCon>
                <Label htmlFor="productDescription">Product Description</Label>
                <InputCon
                  name="proDesc"
                  value={proDesc}
                  type="text"
                  onChange={handleInputData}
                  required
                />
              </FlexColCon>
            </div>

            {/* Work Items */}
            <WorkItem>
              <Invh3>Item List</Invh3>
              <table className="item-list">
                <thead>
                  <tr className="table-heading">
                    <th className="item-name">Item Name</th>
                    <th className="qty">Qty</th>
                    <th className="price">Price</th>
                    <th className="total">Total</th>
                  </tr>
                </thead>
                <tbody>
                  <TableRows
                    rowsData={rowsData}
                    deleteTableRows={deleteTableRows}
                    handleChange={handleChange}
                  />
                </tbody>
              </table>

              <AddItemBtn type="button" onClick={addTableRows}>
                <img src={plus} alt="plus-icon" />
                Add New Item
              </AddItemBtn>
            </WorkItem>
          </FlexColCon>

          {/* Save/Print/Exit */}
          <div className="actionBtn">
            <div>
              <RedBtn type='button' onClick={() => setActive(!active)}>Cancel</RedBtn>
            </div>
            <div>
              <div className="right">
                <PurpleBtn>Save Draft</PurpleBtn>
                <GreenBtn type="submit">Create Invoice</GreenBtn>
              </div>
            </div>
          </div>
        </FormWrapper>
    </StyledModal>
  );
};

export default InvoiceModal;
