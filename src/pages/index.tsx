import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';

import { FiUser, FiCalendar } from 'react-icons/fi';

import { getPrismicClient } from '../services/prismic';

import commonStyles from '../styles/common.module.scss';
import styles from './home.module.scss';

interface Post {
  uid?: string;
  first_publication_date: string | null;
  data: {
    title: string;
    subtitle: string;
    author: string;
  };
}

interface PostPagination {
  next_page: string;
  results: Post[];
}

interface HomeProps {
  postsPagination: PostPagination;
}

export default function Home({ postsPagination }: HomeProps) {
  return (
    <>
      <Head>
        <title>Titulo</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.logoImage}>
          <img src="/images/logo-with-text.svg" alt="" />
        </div>
        <div className={styles.postsList}>
          <Link href="/#">
            <a className={styles.post}>
              <h1>Título da postagem</h1>
              <p>
                Excerpt da postagem vai aqui asdjk hasdkas hkadjkas dhask asd.
              </p>
              <div>
                <div>
                  <FiCalendar size={20} />
                  <time>10 Abr 2021</time>
                </div>
                <div>
                  <FiUser size={20} />
                  <span>Nome do Autor</span>
                </div>
              </div>
            </a>
          </Link>
          <Link href="/#">
            <a className={styles.post}>
              <h1>Título da postagem</h1>
              <p>
                Excerpt da postagem vai aqui asdjk hasdkas hkadjkas dhask asd.
              </p>
              <div>
                <div>
                  <FiCalendar size={20} />
                  <time>10 Abr 2021</time>
                </div>
                <div>
                  <FiUser size={20} />
                  <span>Nome do Autor</span>
                </div>
              </div>
            </a>
          </Link>
          <Link href="/#">
            <a className={styles.post}>
              <h1>Título da postagem</h1>
              <p>
                Excerpt da postagem vai aqui asdjk hasdkas hkadjkas dhask asd.
              </p>
              <div>
                <div>
                  <FiCalendar size={20} />
                  <time>10 Abr 2021</time>
                </div>
                <div>
                  <FiUser size={20} />
                  <span>Nome do Autor</span>
                </div>
              </div>
            </a>
          </Link>
          <Link href="/#">
            <a className={styles.post}>
              <h1>Título da postagem</h1>
              <p>
                Excerpt da postagem vai aqui asdjk hasdkas hkadjkas dhask asd.
              </p>
              <div>
                <div>
                  <FiCalendar size={20} />
                  <time>10 Abr 2021</time>
                </div>
                <div>
                  <FiUser size={20} />
                  <span>Nome do Autor</span>
                </div>
              </div>
            </a>
          </Link>
          <Link href="/#">
            <a className={styles.post}>
              <h1>Título da postagem</h1>
              <p>
                Excerpt da postagem vai aqui asdjk hasdkas hkadjkas dhask asd.
              </p>
              <div>
                <div>
                  <FiCalendar size={20} />
                  <time>10 Abr 2021</time>
                </div>
                <div>
                  <FiUser size={20} />
                  <span>Nome do Autor</span>
                </div>
              </div>
            </a>
          </Link>
        </div>
        <div className={styles.loadMoreButton}>
          <button type="button">Carregar mais posts</button>
        </div>
      </main>
    </>
  );
}

// export const getStaticProps = async () => {
//   // const prismic = getPrismicClient({});
//   // const postsResponse = await prismic.getByType(TODO);

//   // TODO
// };
