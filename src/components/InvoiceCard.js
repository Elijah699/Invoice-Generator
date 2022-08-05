import { useNavigate } from 'react-router-dom';

// styles
import { InvoiceCardWrapper } from '../styles/InvoiceCard.styles';

// icons
import arrowRight from '../assets/icon-arrow-right.svg';

const InvoiceCard = ({
  id,
  invoiceDueDate,
  clientName,
  invPending,
  invTotal,
}) => {
  // console.log(id, invoiceDueDate, invPending);
  const navigate = useNavigate();

  return (
    <InvoiceCardWrapper onClick={() => navigate(`view-invoice/${id}`)}>
      <div className="flex-left">
        <span className="track-id"># {id}</span>
        <span className="date-due">{invoiceDueDate}</span>
        <span className="client-name">{clientName}</span>
      </div>

      <div className="flex-right">
        <span className="total">{invTotal}</span>
        <span className="status">{invPending}</span>
        <span className="right-icon">
          <img src={arrowRight} alt="arrow-right" />
        </span>
      </div>
    </InvoiceCardWrapper>
  );
};

export default InvoiceCard;
