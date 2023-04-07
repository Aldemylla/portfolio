export function Header() {
  return (
    <header className='flex justify-between m-auto border-b border-neutral-700 py-4 max-w-4xl'>
      <h1 className='font-send-flowers text-xl'>Aldemylla Meireles</h1>
      <nav className='text-base'>
        <ul className='flex gap-4'>
          <li>
            <a href='#presentation'>Apresentação /</a>
          </li>
          <li>
            <a href='#about'>Sobre mim /</a>
          </li>
          <li>
            <a href='#projects'>Projetos /</a>
          </li>
          <li>
            <a href='#contact'>Contato</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
