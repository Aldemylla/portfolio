import Image from "next/image";

export function Presentation() {
  return (
    <section id='presentation' className='grid justify-items-center gap-7'>
      <Image
        src='https://github.com/aldemylla.png'
        alt='Aldemylla'
        width={150}
        height={150}
        className='border-2 border-neutral-400 animate-morph grayscale-[65%]'
      />
      <div className='space-y-2'>
        <h1 className='grid justify-items-center gap-2 text-4xl leading-8'>
          Olá, sou
          <span className='bg-gradient-to-r from-neutral-400 from-10% via-pink-400 to-neutral-400 to-90% bg-clip-text p-1 font-send-flowers text-7xl text-transparent animate-text-shine'>
            Aldemylla
          </span>
        </h1>
        <p className='text-4xl text-center'>Uma desenvolvedora web apaixonada pelo front-end</p>
      </div>
      <a className='btn py-4 px-10' download href='/CV_Aldemylla_PT-BR.pdf'>
        Baixar CV
        <Image className='w-auto' src='/icons/download.svg' alt='Download' width={30} height={30} />
      </a>
    </section>
  );
}
