import { UpperBody } from '../UpperBody'
import { LowerBody } from '../LowerBody'
import { FooterSection } from '../FooterSection'
import { RemarksSection } from '../RemarksSection'

var descriptions = "The Tata Hitachi SHINRAI Earth Mover is a high-performance backhoe loader designed for construction and earthmoving tasks, offering a balance of power, efficiency, and durability. It comes in different variants, including SHINRAI Power, SHINRAI Prime, and SHINRAI Pro, each tailored for specific operational needs. The SHINRAI Power model is equipped with a 99 HP engine, delivering a maximum torque of 410 Nm and a digging depth of up to 5,003 mm, making it ideal for heavy-duty excavation. The SHINRAI Prime, with a 74.3 HP engine and 305 Nm torque, provides a robust alternative with a slightly reduced digging capacity of 4,700 mm. Meanwhile, the SHINRAI Pro, designed for lighter applications, features a 47 HP engine with 215 Nm torque and a similar digging depth of 4,700 mm. "

var summary = "Sample description"

interface Props {
    setVideoModal: React.Dispatch<React.SetStateAction<string>>;
    setFormModal: React.Dispatch<React.SetStateAction<boolean>>;
}


export function Earth({ setFormModal, setVideoModal }: Props) {
    return (
        <>
            <div className='main-body'>
                <UpperBody setFormModal={setFormModal} />
                <span className='service-description'>Service experience</span>
                <LowerBody descriptions={descriptions} />
            </div>

            <div className='footer'>
                <FooterSection summary={summary} setVideoModal={setVideoModal} />
                <RemarksSection />
            </div>
        </>
    )

}