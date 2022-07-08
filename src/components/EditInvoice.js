import InvoiceForm from "./InvoiceForm"

// styles
import { StyledModal } from "../styles/Modal.styles"

const EditInvoice = ({active, setActive}) => {
    return (
        <StyledModal className={'active' ? 'active' : ''}>
            <InvoiceForm active={active} setActive={setActive} />
        </StyledModal>
    )

}

export default EditInvoice;