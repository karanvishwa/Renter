import { FieldProps } from "formik"
import "./InpuText.css"

interface Props {
    labelName: string
    fieldProps: FieldProps
    placeHolderText: string
}

export function InputText({ fieldProps, labelName, placeHolderText }: Props) {

    return (
        <>
            <div className="input-wrapper">
                <label className="input-label">{labelName}</label>
                <input className="input-field" placeholder={placeHolderText} type="text" {...fieldProps.field} />
            </div>
        </>
    )
}