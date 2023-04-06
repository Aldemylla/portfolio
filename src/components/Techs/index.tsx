import Image from "next/image";

export function Techs() {
  return (
    <section>
      <ul>
        <li>
          <a href='https://developer.mozilla.org/docs/Web/HTML' target='_blank'>
            <Image src='/techs/html.svg' alt='HTML' width={30} height={30} />
          </a>
        </li>
        <li>
          <a href='https://developer.mozilla.org/docs/Web/CSS' target='_blank'>
            <Image src='/techs/css.svg' alt='CSS' width={30} height={30} />
          </a>
        </li>
        <li>
          <a href='https://developer.mozilla.org/docs/Web/JavaScript' target='_blank'>
            <Image src='/techs/javascript.svg' alt='JavaScript' width={30} height={30} />
          </a>
        </li>
        <li>
          <a href='https://www.typescriptlang.org/' target='_blank'>
            <Image src='/techs/typescript.svg' alt='TypeScript' width={30} height={30} />
          </a>
        </li>
        <li>
          <a href='https://react.dev/' target='_blank'>
            <Image src='/techs/react.svg' alt='React' width={30} height={30} />
          </a>
        </li>
        <li>
          <a href='https://nextjs.org/' target='_blank'>
            <Image src='/techs/next.svg' alt='Next' width={30} height={30} />
          </a>
        </li>
        <li>
          <a href='https://sass-lang.com/' target='_blank'>
            <Image src='/techs/sass.svg' alt='Sass' width={30} height={30} />
          </a>
        </li>
        <li>
          <a href='https://git-scm.com/' target='_blank'>
            <Image src='/techs/git.svg' alt='Git' width={30} height={30} />
          </a>
        </li>
        <li>
          <a href='https://jestjs.io/' target='_blank'>
            <Image src='/techs/jest.svg' alt='Jest' width={30} height={30} />
          </a>
        </li>
        <li>
          <a href='https://vuejs.org/' target='_blank'>
            <Image src='/techs/vue.svg' alt='Vue' width={30} height={30} />
          </a>
        </li>
        <li>
          <a href='https://tailwindcss.com/' target='_blank'>
            <Image src='/techs/tailwind.svg' alt='Tailwind' width={30} height={30} />
          </a>
        </li>
        <li>
          <a href='https://testing-library.com/' target='_blank'>
            <Image src='/techs/testing-library.svg' alt='Testing Library' width={30} height={30} />
          </a>
        </li>
        <li>
          <a href='https://styled-components.com/' target='_blank'>
            <Image
              src='/techs/styled-components.svg'
              alt='Styled Components'
              width={30}
              height={30}
            />
          </a>
        </li>
      </ul>
    </section>
  );
}
