import { useContext, useMemo } from "react";
import ChangeBackground from "@/Components/MainPage/ChangeBackground";
import ParagraphText from "@/Components/Ficher/ParagraphText";
import PinkBtn from "@/Components/Ficher/PinkBtn";
import InfoSection from "@/Components/Home/InfoSection";
import IntroductionSection from "@/Components/Home/IntroductionSection";
import FooterSection from "@/Components/Home/FooterSection";
import { NavContext } from "@/Context/Store";
import { GET } from "@/API/getRepository";

export default function Home({ carouselResponse }) {
  const { isOpen } = useContext(NavContext);
  const isNavbarOpen = useMemo(() => isOpen, [isOpen]);

  return (
    <>
      {/* پس‌زمینه */}
      <div className="bg-gray-100">
        <ChangeBackground carousel={carouselResponse} />
      </div>

      {/* معرفی دوره */}
      <IntroductionSection isNavbarOpen={isNavbarOpen} />

      {/* اطلاعات و محتوای سایت */}
      <InfoSection />

      {/* فوتر و توضیحات */}
      <FooterSection />
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
