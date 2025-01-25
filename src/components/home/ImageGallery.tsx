import React from 'react';

const ImageGallery = () => {
  return (
    <section className="flex w-full flex-col items-stretch justify-center max-md:max-w-full">
      <div className="bg-white flex min-h-[478px] w-full items-stretch gap-[40px_48px] flex-wrap p-16 max-md:max-w-full max-md:px-5">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/2270cba2df2ec691cad6fa7384bd718800880d0d7cc8727df04265d85b0338dd?placeholderIfAbsent=true&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/2270cba2df2ec691cad6fa7384bd718800880d0d7cc8727df04265d85b0338dd?placeholderIfAbsent=true&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2270cba2df2ec691cad6fa7384bd718800880d0d7cc8727df04265d85b0338dd?placeholderIfAbsent=true&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/2270cba2df2ec691cad6fa7384bd718800880d0d7cc8727df04265d85b0338dd?placeholderIfAbsent=true&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/2270cba2df2ec691cad6fa7384bd718800880d0d7cc8727df04265d85b0338dd?placeholderIfAbsent=true&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2270cba2df2ec691cad6fa7384bd718800880d0d7cc8727df04265d85b0338dd?placeholderIfAbsent=true&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/2270cba2df2ec691cad6fa7384bd718800880d0d7cc8727df04265d85b0338dd?placeholderIfAbsent=true&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/2270cba2df2ec691cad6fa7384bd718800880d0d7cc8727df04265d85b0338dd?placeholderIfAbsent=true"
          className="aspect-[1.55] object-contain w-full min-w-60 flex-1 shrink basis-[0%] rounded-[32px] max-md:max-w-full"
          alt="Gallery image 1"
        />
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/32d103eae2fefb54b06b29ae3c269579229e5f16740d8e6bfd68c2a28a37abdf?placeholderIfAbsent=true&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/32d103eae2fefb54b06b29ae3c269579229e5f16740d8e6bfd68c2a28a37abdf?placeholderIfAbsent=true&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/32d103eae2fefb54b06b29ae3c269579229e5f16740d8e6bfd68c2a28a37abdf?placeholderIfAbsent=true&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/32d103eae2fefb54b06b29ae3c269579229e5f16740d8e6bfd68c2a28a37abdf?placeholderIfAbsent=true&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/32d103eae2fefb54b06b29ae3c269579229e5f16740d8e6bfd68c2a28a37abdf?placeholderIfAbsent=true&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/32d103eae2fefb54b06b29ae3c269579229e5f16740d8e6bfd68c2a28a37abdf?placeholderIfAbsent=true&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/32d103eae2fefb54b06b29ae3c269579229e5f16740d8e6bfd68c2a28a37abdf?placeholderIfAbsent=true&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/32d103eae2fefb54b06b29ae3c269579229e5f16740d8e6bfd68c2a28a37abdf?placeholderIfAbsent=true"
          className="aspect-[1.55] object-contain w-full min-w-60 flex-1 shrink basis-[0%] rounded-[32px] max-md:max-w-full"
          alt="Gallery image 2"
        />
      </div>
    </section>
  );
};

export default ImageGallery;