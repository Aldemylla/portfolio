export function Projects() {
  return (
    <section id='projects'>
      <h2>Projetos</h2>
      <ul>
        <li>
          {/* <img src="projeto1.jpg" alt="Projeto 1"> */}
          <div>
            <h3>Título do Projeto 1</h3>
            <p>Descrição do projeto 1.</p>
            <div>
              <a href='https://github.com/seu-usuario/projeto1' target='_blank'>
                Ver código
              </a>
              <a href='https://demonstracao.projeto1.com' target='_blank'>
                Ver demonstração
              </a>
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
}
