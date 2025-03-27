import "./VideoModal.css"


interface Props {
    videoModal: string;
    setVideoModal: React.Dispatch<React.SetStateAction<string>>;

}

export function VideoModal({ videoModal, setVideoModal }: Props) {

    const video = `/videos/${videoModal}.mp4`

    return (
        <>
            <div className="modal-outer">
                <div className="modal-inner">
                    <button onClick={() => {
                        setVideoModal("")
                    }} className="closing-button">&times;</button>
                    <div className="video-content">
                        <video className="video-container" src={video} controls autoPlay>
                        </video>
                    </div>
                </div>
            </div>


        </>
    )


}