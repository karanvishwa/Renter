import { Field, FieldProps, Form, Formik, FormikProps } from "formik";

import "./FormModal.css"
import { InputText } from "../InputComponent/InputText";
import { useRef } from "react";

interface Props {
    setFormModal: React.Dispatch<React.SetStateAction<boolean>>;
}

interface FormValues {
    name: string;
    address: string;
    mobile: string;
    fromDate: string;
    toDate: string;
    typeOfWork: string;
}

const initialValues: FormValues = {

    name: "",
    address: "",
    mobile: "",
    fromDate: "",
    toDate: "",
    typeOfWork: "",

}

export function FormModal({ setFormModal }: Props) {

    const formikref = useRef<FormikProps<FormValues>>(null)

    return (
        <div className="base-screen">
            <div className="form-container">

                <div className="rentalform-heading">Rental Form</div>
                <Formik
                    innerRef={formikref}
                    initialValues={initialValues}
                    onSubmit={(values, { resetForm }) => {
                        console.log(values)
                        setFormModal(false)
                        resetForm()
                    }}
                >

                    <Form className="formik-form">

                        <Field className="inputs" name="name"
                            render={(fieldProps: FieldProps) => (
                                <InputText placeHolderText="Ex: Rahul" labelName="Name" fieldProps={fieldProps}></InputText>
                            )}>
                        </Field>
                        <Field className="inputs" name="address"
                            render={(fieldProps: FieldProps) => (
                                <InputText placeHolderText="Ex: JP Nagar, Benagaluru" labelName="Address" fieldProps={fieldProps}></InputText>
                            )}>
                        </Field>
                        <Field className="inputs" name="mobile"
                            render={(fieldProps: FieldProps) => (
                                <InputText placeHolderText="Ex: 999999999" labelName="Mobile" fieldProps={fieldProps}></InputText>
                            )}>
                        </Field>

                        <div className="date-class">
                            <Field className="inputs" name="fromDate"
                                render={(fieldProps: FieldProps) => (
                                    <InputText placeHolderText="Ex: 01-01-2001" labelName="From date" fieldProps={fieldProps}></InputText>
                                )}>
                            </Field>
                            <Field className="inputs" name="toDate"
                                render={(fieldProps: FieldProps) => (
                                    <InputText placeHolderText="Ex: 01-01-2001" labelName="To date" fieldProps={fieldProps}></InputText>
                                )}>
                            </Field>
                        </div>
                        <Field className="inputs" name="typeOfWork"
                            render={(fieldProps: FieldProps) => (
                                <InputText placeHolderText="Ex: Excavation" labelName="Type of work" fieldProps={fieldProps}></InputText>
                            )}>
                        </Field>

                        <button className="form-submit-button" type="submit">Submit</button>
                    </Form>

                </Formik>

                <button onClick={() => {
                    setFormModal(false);
                    formikref.current?.resetForm()
                }} className="close-button">&times;</button>
            </div>
        </div>
    )
}