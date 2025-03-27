interface Props {
    summary: string;
    setVideoModal: React.Dispatch<React.SetStateAction<string>>;
}


export function FooterSection({ summary, setVideoModal }: Props) {

    const items = ["shinrai_1", "shinrai_2", "hitachi_1", "hitachi_2"]

    return (
        <div className="footer-section">

            <div className="video-header">
                <div className="line"></div>
                <div className="heading">Explore</div>
                <div className="line"></div>
            </div>

            {items.map((item) => {
                const path = `/images/${item}.jpg`
                return (
                    <button onClick={() => {
                        setVideoModal(item)
                    }} className="video-cards">
                        <img className='thumbnail' src={path}></img>
                        <div className="summary">{summary}</div>
                        <div className="video-icon">
                            <p className="vid-icon">&#9654;</p>
                        </div>
                    </button>
                )
            })}
        </div>
    )
}