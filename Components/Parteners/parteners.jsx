import Image from 'next/image';
import React from 'react';
import img1 from '../../public/assets/image/parteners/9073320_nextjs_icon.png'; // تأكد من صحة المسار

const Parteners = () => {
    return (
        <div className="bg-background  mt-[29rem] mb-60 w-[120%] px-5 py-10 flex items-start justify-around">
            {/* العنوان */}
            <h2 className="font-bold text-2xl text-white mb-6">
                تميّزنا فأصبحنا شركاء كلاً من
            </h2>
            <div className="relative flex gap-6 items-center justify-center">
                {/* إضافة صور مع تأثير مختلف لكل صورة */}
                {[1, 2, 3, 4, 5].map((item, index) => (
          <div
            key={index}
            className={`fade-animation-${index + 1} w-full flex justify-center items-center`}
          >
            <Image
              src={img1}
              alt={`product-${item}`}
              className="object-contain"
              width={80}
              height={80}
            />
          </div>
        ))}
            </div>
        </div>
    );
};
export default Parteners;
