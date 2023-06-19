import { Form, Formik } from "formik";
import React from "react";
import Modal from "shared/Modal";
import CField from "shared/formik/CField";
import * as Yup from "yup";

type TData = {
  address: string;
  city: string;
  state: string;
  plaque: number;
  postalCode: number;
  mobile: number;
  name: string;
};
function AddAddress() {
  const AddressSchema = Yup.object().shape({
    address: Yup.string().required("این جا رو خالی نگذارید"),
    city: Yup.string().required("این جا رو خالی نگذارید"),
    state: Yup.string().required("این جا رو خالی نگذارید"),
    plaque: Yup.number().required("این جا رو خالی نگذارید"),
    postalCode: Yup.number().required("این جا رو خالی نگذارید"),
    mobile: Yup.number().required("این جا رو خالی نگذارید"),
    name: Yup.number().required("این جا رو خالی نگذارید"),
  });
  return (
    <Modal name="address" title="جزییات آدرس" className="">
      <Formik
        validationSchema={AddressSchema}
        onSubmit={async (values, { setErrors }) => {}}
        initialValues={
          {
            address: "",
            city: "",
            state: "",
            plaque: "",
            postalCode: "",
            mobile: "",
            name: "",
          } as unknown as TData
        }
      >
        {() => (
          <Form className="space-y-3">
            <div className="grid grid-cols-2 gap-4 " dir="rtl">
              <CField
                className="col-span-2"
                name="address"
                type="address"
                title="نشانی ادرس"
              />
              <CField name="name" type="name" title="نام و نام خانوادگی" />
              <CField name="mobile" type="text" title="شماره تماس" />
              <CField name="city" type="city" title="شهر" />
              <CField name="state" type="text" title="استان" />
              <CField name="plaque" type="text" title="پلاک" />
              <CField name="postalCode" type="text" title="کد پستی" />
            </div>
            <button className="w-full rounded-xl bg-red-400 p-5 font-bold text-white">
              ثبت آدرس
            </button>
          </Form>
        )}
      </Formik>
    </Modal>
  );
}

export default AddAddress;
