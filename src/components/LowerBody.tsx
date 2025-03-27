import jcb from "../assets/jcb_image.png"
import hitachi from "../assets/hitachi.png"

interface Props {
    descriptions: String;
}

export function LowerBody({ descriptions }: Props) {

    // const items = [1, 2, 3, 4]

    return (
        <div className="lower-body">
            <div className="modules one">
                <img className='product-image' src={jcb}></img>
                <div className="description jcb-desc">
                    <div className="header">SHINRAI</div>
                    <br></br>
                    <div className="description-content">
                        {descriptions} <br /><br />
                        <a href="https://www.tatahitachi.co.in/backhoe-loaders/shinrai-prime/" target="_blank"> &rarr; Read More</a>
                    </div>
                </div>
            </div>

            <div className="modules">
                <div className="description">
                    <div className="header">HITACHI</div>
                    <br></br>
                    <div className="description-content">
                        {descriptions} <br /><br />
                        <a href="https://www.tatahitachi.co.in/mini-excavators/" target="_blank">&rarr; Read More</a>
                    </div>
                </div>
                <img className='product-image' src={hitachi}></img>
            </div>


            {/* {items.map((items) => {

                return (
                    <>
                        <div className="modules shinrai">
                            <img className='product-image' src={jcb}></img>
                            <div className="description jcb-desc">
                                <div className="header">Shinrai</div>
                                <div className="description-content">
                                    {descriptions} <br /><br />
                                    <a href="https://www.tatahitachi.co.in/backhoe-loaders/shinrai-prime/"> &rarr; Read More</a>
                                </div>
                            </div>
                        </div>

                        <div className="modules hitachi">
                            <div className="description hitachi-desc">
                                <div className="header">Hitachi</div>
                                <div className="description-content">
                                    {descriptions} <br /><br />
                                    <a href="https://www.tatahitachi.co.in/mini-excavators/">&rarr; Read More</a>
                                </div>
                            </div>
                            <img className='product-image' src={hitachi}></img>
                        </div>
                    </>

                )
            })} */}

        </div>
    )
}