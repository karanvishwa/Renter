import logo from "../assets/Link.png"
import search from "../assets/search.png"

interface Props{
    setModal:React.Dispatch<React.SetStateAction<boolean>>;
}

export function TopBar({setModal}:Props) {
    return (
        <div className="top-bar">

            <img className="logo-image" src={logo} alt="logo" />

            <div className="search-bar">
                <input className="input-box" type="text" />
                <button className="search-button" onClick={() => {
                    console.log("clicked this")
                }}>
                    <img className='search-logo' src={search} />
                </button>
            </div>

            <a onClick={()=>{
                setModal(true)
            }} className="contacts">
                Contact: 8431672027
            </a>
        </div>
    )
}