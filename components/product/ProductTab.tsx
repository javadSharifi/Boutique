import { Tab } from "@headlessui/react";
import React from "react";
import UserComments from "./user comments/UserComments";

const subTitle: string[] = ["بررسی محصول", "مشخصات محصول ", "نظرات کاربران"];
const ProductSpecifications: string[] = [
  "جنس الیاف: 100% نخ پنبه",
  " نرمی و زبری: نرم",
  "ضخامت پارچه: کم",
  "جزئیات مدل: لوگوی برند روی سینه لباس/ یقه کشبافت",
];
function ProductTab() {
  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div className="m-auto   my-7 w-11/12 lg:w-10/12 " dir="rtl">
      <Tab.Group>
        <div className="relative space-y-2  ">
          <Tab.List className="flex w-full justify-between md:justify-start lg:gap-12 lg:text-lg ">
            {subTitle.map((inex) => (
              <Tab
                key={inex}
                className={({ selected }) =>
                  classNames(
                    "Tabe-List",
                    selected ? "border-b-2" : "border-b-0"
                  )
                }
              >
                {inex}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel className="Tab-Panel">
              <h3>
                تیشرت یقه گرد مردانه جوتی جینز JootiJeans کد 21573902 تیشرت‌های
                یقه گرد یکی از پرطرفدارترین و کاربردی‌ترین لباس‌ها برای آقایان
                به حساب می‌آید، چرا که به راحتی با انواع استایل‌ها ست شده و برای
                هر موقعیتی نیز کاربرد دارند. هر مرد خوش‌پوشی که می‌‌داند چگونه
                نظر اطرفیان را به استایل خود جلب کند، حداقل یک تیشرت یقه گرد در
                کمد لباس‌های خود دارد. تیشرت یقه گرد مردانه جوتی جینز JootiJeans
                کد21573902 همان تیشرتی است که باید در هر کمدی وجود داشته باشد.
                این تیشرت در کنار طراحی ساده و شیک خود، دارای جنس پارچه مرغوب و
                با کیفیت است. جنس الیاف این تیشرت از صد درصد نخ‌پنبه بوده و
                لطافتی آرام‌بخش به پوست شما هدیه می‌کند. الیاف پارچه‌های نخ‌پنبه
                از منافذ ریزی تشکیل شده‌اند که به خوبی هوا را رد و بدل کرده و از
                ایجاد حساسیت‌های پوستی و تعرق زیاد جلوگیری می‌کنند. ضخامت پارچه
                این تیشرت کم بوده و برای فصول گرم سال مناسب است.
              </h3>
            </Tab.Panel>
            <Tab.Panel className="Tab-Panel">
              <ul className="list-inside list-disc ">
                {ProductSpecifications.map((text) => (
                  <li key={text}>{text}</li>
                ))}
              </ul>
            </Tab.Panel>
            <Tab.Panel className="Tab-Panel">
              <UserComments />
            </Tab.Panel>
          </Tab.Panels>
        </div>
      </Tab.Group>
    </div>
  );
}

export default ProductTab;
