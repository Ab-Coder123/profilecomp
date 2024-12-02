
import React from 'react';
import imgabout from "../../public/assets/image/About/1.png";
import Image from "next/image";

const About = () => {
 
 
  return (
    <section className=" headimg w-[120%] flex justify-around  p-8 items-start bg-gray-100">
      {/* Image Section */}
      <div className=" w-full mx-0 lg:mx-14 fade-up"     >
      <Image
            src={imgabout}
            alt="Description"
            className=" rounded-md w-[400px]"
          />
      </div>
      
      {/* Text Section */}
      <div className=" flex items-start justify-center flex-col  p-4 ml-24 mt-16">
        <h2 className="text-3xl font-bold mb-4 text-text1">ديجاتوبيا - شريكك الرقمي للنجاح
        </h2>
        <p className="text-background text-xl leading-relaxed">
        ديجاتوبيا هي شركة تسويق الكتروني وتصميم مواقع ومتاجر الكترونية رائدة في تقديم الحلول الرقمية المبتكرة منذ عام 2018، حيث نحرص على خلق تجارب متميزة للعلامات التجارية. تتمحور رؤيتنا حول تحويل الأفكار إلى واقع مؤثر، وذلك من خلال التزامنا العميق بالابتكار وتركيزنا الدائم على تلبية احتياجات عملائنا. نقوم بتطوير استراتيجيات تسويقية فريدة تعزز النجاح الرقمي تناسب مختلف الصناعات
        </p>
      </div>
    </section>
  );
}



export default About;
