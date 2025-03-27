interface Props {
    setPage: React.Dispatch<React.SetStateAction<string>>;
}

export function LowerBar({ setPage }: Props) {
    return (
        <div className="lower-bar">
            <ul className='services'>
                <li>
                    <button onClick={()=>{
                        setPage("pipes")
                    }} className='service-names pipeline'>
                        Pipelines
                    </button>
                </li>
                <li><button autoFocus onClick={()=>{
                    setPage("earth")
                }} className='service-names earth'>
                    Earth Movers
                </button></li>
                <li><button onClick={()=>{
                    setPage("house")
                }} className='service-names house'>
                    House Contracts
                </button></li>
            </ul>
        </div>
    )
}