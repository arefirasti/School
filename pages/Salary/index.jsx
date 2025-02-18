import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { BeatLoader, ClipLoader } from "react-spinners";
import { Toast, ToastBody, ToastContainer } from "react-bootstrap";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

const Index = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const router = useRouter();
  const [toastMassage, setToastMassage] = useState("");
  const initialValues = {
    image_payment: undefined,
  };

  const validationSchema = Yup.object().shape({
    image_payment: Yup.mixed().required("لطفا فایل فیش واریزی را آپلود کنید"),
  });

  const handleSubmit = async (values) => {
    setIsSubmitting(true);
    const formData = new FormData();
    formData.append("image_payment", values.image_payment);
    try {
      const token = Cookies.get("token");
      const response = await fetch(
        "https://schoolm.liara.run/students/payment/",
        {
          method: "POST",
          headers: {
            Authorization: `token ${token}`,
          },
          body: formData,
        }
      );
      if (response.ok) {
        setToastMassage("درخواست شما با موفقیت انجام شد!");
      } else {
        setToastMassage("مشکلی در ارسال درخواست رخ داده است ");
      }
    } catch (error) {
      setToastMassage("پیغام خطا :" + error.message);
    }
    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative">
      {isSubmitting && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <BeatLoader color="#ffffff" size={20} />
        </div>
      )}

      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl relative z-10">
        <h1 className="text-2xl font-bold mb-6 text-center">
          فرم پرداخت شهریه
        </h1>
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-4">اطلاعات پرداخت</h2>
          <p className="text-gray-700 mb-2">
            قرارداد زیر بین واحد آموزشی هنرستان دخترانه غیردولتی هوانوردی آسمان
            دوره دوم با اولیا منعقد می‌گردد.
          </p>
          <p className="text-gray-700 mb-2">
            به استناد مصوبه ۳۳۷ جلسه ۷۹/۱۱/۲۶ شورای نظارت مرکزی، اطلاع از موارد
            ذیل جهت تسویه مالی و دریافت پرونده تحصیلی الزامی است.
          </p>
          <p className="text-gray-700 mb-2">
            چنانچه دانش‌آموز پس از ثبت‌نام، قبل از شروع سال تحصیلی در واحد
            آموزشی منصرف شود، معادل پنج درصد شهریه قبل از امتحانات نوبت اول
            پنجاه درصد شهریه و پس از امتحانات نوبت اول صد در صد شهریه باید
            پرداخت گردد.
          </p>
          <p className="text-gray-700 mb-4">
            مبلغ تعیین شده را به شماره حساب‌های ذیل واریز کرده و سپس فیش واریزی
            را آپلود و ارسال کنید.
          </p>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-md font-semibold mb-2">بانک ملت</h3>
            <p className="text-gray-700">شماره حساب: ۵۶۹۶۶۳۱۴۰۶</p>
            <p className="text-gray-700">
              شماره شبا: IR44-0120-0000-0000-5696-6314-06
            </p>

            <h3 className="text-md font-semibold mt-4 mb-2">
              بانک پاسارگاد (برای شبانه - بزرگسال)
            </h3>
            <p className="text-gray-700">شماره حساب: ۲۱۹۸۰۰۸۲۰۵۵۱</p>
            <p className="text-gray-700">
              شماره شبا: IR72-0570-0219-8000-0082-0550-0
            </p>
            <p className="text-gray-700">شماره کارت: ۵۰۲۲۲۹۱۰۳۵۴۱۳۹۲۹</p>
          </div>
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ setFieldValue, isSubmitting }) => (
            <Form className="space-y-4">
              <div>
                <label
                  htmlFor="image_payment"
                  className="block text-sm font-medium text-gray-700"
                >
                  فایل فیش واریزی
                </label>
                <input
                  id="image_payment"
                  name="image_payment"
                  type="file"
                  accept="image/jpeg, image/png"
                  onChange={(event) => {
                    const file = event.currentTarget.files[0];
                    if (file) {
                      setFieldValue("image_payment", file);
                    }
                  }}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
                <ErrorMessage
                  name="image_payment"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 flex items-center justify-center"
                >
                  ارسال
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
      <ToastContainer
        position="bottom-center"
        className="p-3"
        style={{ zIndex: 100 }}
      >
        <Toast
          show={isSubmitted}
          onClose={() => setIsSubmitted(false)}
          delay={5000}
          autohide={true}
        >
          <ToastBody>{toastMassage}</ToastBody>
        </Toast>
      </ToastContainer>
    </div>
  );
};

export default Index;
