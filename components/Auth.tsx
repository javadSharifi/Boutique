import { PhoneIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";
import logo from "@/img/logo.png";
import Modal, { OpenModal } from "shared/Modal";

function Auth() {
  return (
    <>
      <OpenModal
        name="auth"
        className="button  flex justify-center items-center  h-12 px-7 font-bold"
      >
        <p>ورود / ثبت نام</p>
      </OpenModal>

      <Modal name="auth" className="">
        <div className=" flex flex-col gap-5 justify-center items-center ">
          <h3 className="text-2xl font-bold ">ورود یا ثبت نام</h3>
          <h4>لطفا برای ادامه شماره همراه خود را وارد نمایید.</h4>
          <div
            dir="rtl"
            className="bg-slate-300/30  p-1 px-2 py-4 w-2/3 rounded-xl flex gap-2 "
          >
            <div>
              <PhoneIcon className="text-base inline   h-7  text-black " />
            </div>
            <input
              type="phone"
              className="w-full bg-transparent outline-none text-lg placeholder-slate-400 font-medium text-gray-500  "
              placeholder="شماره همراه"
            />
          </div>
          <button

            className=" w-2/4 py-3 btn btn-error text-white"
          >
            ادامه
          </button>
          <p>ورود شما به معنای پذیرش شرایط وقوانین حریم‌خصوصیاست</p>
        </div>
      </Modal>
    </>
  );
}

export default Auth;
