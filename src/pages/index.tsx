import Blog from "@/components/home/Blog";
import BookDemo from "@/components/home/BookDemo";
import Calculated from "@/components/home/Calculated";
import Certificate from "@/components/home/Certificate";
import Country from "@/components/home/Country";
import EsgScore from "@/components/home/EsgScore";
import Faqs from "@/components/home/Faqs";
import Hero from "@/components/home/Hero";
import Important from "@/components/home/Important";
import Industry from "@/components/home/Industry";
import Result from "@/components/home/Result";


export default function Home() {
  return (
  <div>
<Hero/>
<EsgScore/>
<Country/>
<Industry/>
<Result/>
<Certificate/>
<Important/>
<Calculated/>
<Blog/>
<Faqs/>
<BookDemo/>
  </div>
  );
}
