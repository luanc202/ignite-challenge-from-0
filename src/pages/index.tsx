import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';

import { FiUser, FiCalendar } from 'react-icons/fi';

import { getPrismicClient } from '../services/prismic';

import formatDateToBR from '../utils/date-formatter';

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

export default function Home({ postsPagination }: HomeProps): unknown {
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
          {postsPagination.results.map(post => (
            <Link href="/#">
              <a className={styles.post}>
                <h1>{post.data.title}</h1>
                <p>{post.data.subtitle}</p>
                <div>
                  <div>
                    <FiCalendar size={20} />
                    <time>{formatDateToBR(post.first_publication_date)}</time>
                  </div>
                  <div>
                    <FiUser size={20} />
                    <span>{post.data.author}</span>
                  </div>
                </div>
              </a>
            </Link>
          ))}
        </div>
        <div className={styles.loadMoreButton}>
          <button type="button">Carregar mais posts</button>
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient({});
  const postsPagination = await prismic.getByType('post', {
    pageSize: 5,
  });

  return {
    props: {
      postsPagination,
    },
    revalidate: 60 * 60 * 24,
  };
};
