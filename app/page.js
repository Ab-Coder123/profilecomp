import About from "@/Components/About/About";
import Header from "@/Components/Header/Header";
import Parteners from "@/Components/Parteners/parteners";

export default function Home() {
  return (
    <div className=" overflow-hidden grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 ">
        <Header/>
        <Parteners/>
        <About/>
    </div>
  );
}
