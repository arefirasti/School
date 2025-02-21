import { useContext, useEffect, useMemo, useState } from "react";
import ChangeBackground from "@/Components/MainPage/ChangeBackground";
import InfoSection from "@/Components/Home/InfoSection";
import IntroductionSection from "@/Components/Home/IntroductionSection";
import FooterSection from "@/Components/Home/FooterSection";
import { NavContext } from "@/Context/Store";
import { GET } from "@/API/getRepository";
import Loader from "@/Components/Ficher/Loader";

export default function Home({ carouselResponse }) {
  const { isOpen } = useContext(NavContext);
  const isNavbarOpen = useMemo(() => isOpen, [isOpen]);

  return (
    <>
      {/* پس‌زمینه */}
      <div className="bg-gray-100">
        <ChangeBackground carousel={carouselResponse} />
      </div>
      <div>
        {/* معرفی دوره */}
        <IntroductionSection isNavbarOpen={isNavbarOpen} />
      </div>
      <div>
        {/* اطلاعات و محتوای سایت */}
        <InfoSection />
      </div>
      <div>
        {/* فوتر و توضیحات */}
        <FooterSection />{" "}
      </div>
    </>
  );
}

export async function getStaticProps() {
  try {
    const carouselURL = await GET("adv/slider/");
    const carouselResponse = await carouselURL.json();

    return {
      props: { carouselResponse: carouselResponse || null },
      revalidate: 86400, // هر 24 ساعت یکبار آپدیت شود
    };
  } catch (error) {
    console.error("خطا در دریافت داده‌ها:", error);
    return {
      props: { carouselResponse: null },
      revalidate: 86400,
    };
  }
}
