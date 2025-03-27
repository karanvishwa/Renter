interface Props {
    setFormModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export function UpperBody({ setFormModal }: Props) {

    const items = ["shinrai", "hitachi"]

    return (
        <div className="upper-body">
            {items.map((item) => {
                const path = `/images/${item}.png`
                return (
                    <button onClick={() => {
                        setFormModal(true)
                        console.log("clicked formik")
                    }} className="cards">
                        <img className='movers' src={path} />
                        <p className="card-names">tata {item}</p>
                    </button>
                )
            }
            )}

        </div>
    )

}