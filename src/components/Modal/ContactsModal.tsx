import "./ContactsModal.css"

interface Props{

    setModal:React.Dispatch<React.SetStateAction<boolean>>;

}

export function ContactsModal({setModal}:Props){

    return(
        <>
        <div className="modal-outer">
            <div className="modal-inner">
                <button onClick={()=>{
                    setModal(false)
                }} className="closing-button">&times;</button>
                <div className="contacts-content">
                    <pre>
                    Email ID      : karanvishwa1@gmail.com <br></br>
                    Mobile Number : 8431672027 <br></br>
                    Address       : Belur
                    </pre>
                </div>
            </div>
        </div>


        </>
    )


}