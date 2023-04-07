import Image from "next/image";

export function Presentation() {
  return (
    <section id='presentation'>
      <Image src='https://github.com/aldemylla.png' alt='Aldemylla' width={100} height={100} />
      <h1>
        Olá, sou <span className='font-send-flowers'>Aldemylla</span>
      </h1>
      <p>Uma desenvolvedora web apaixonada pelo front-end.</p>
      <button>Baixar CV</button>
    </section>
  );
}
