import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { ReactElement } from 'react';

import { getPrismicClient } from '../../services/prismic';

import commonStyles from '../../styles/common.module.scss';
import styles from './post.module.scss';

interface Post {
  first_publication_date: string | null;
  data: {
    title: string;
    banner: {
      url: string;
    };
    author: string;
    content: {
      heading: string;
      body: {
        text: string;
      }[];
    }[];
  };
}

interface PostProps {
  post: Post;
}

export default function Post(): ReactElement {
  return (
    <>
      <Head>
        <title>Titulo</title>
      </Head>

      <div className={styles.banner}>
        <img
          src="https://images.unsplash.com/photo-1595864968156-b643d9028611?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fG5pZ2h0JTIwcGhvdG9ncmFwaHl8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
      </div>
      <div className={styles.postsList}>
        <p>Content goes here</p>
      </div>
      <div className={styles.loadMoreButton}>
        <button type="button">Carregar mais posts</button>
      </div>
    </>
  );
}

// export const getStaticPaths = async () => {
//   const prismic = getPrismicClient({});
//   const posts = await prismic.getByType(TODO);

//   // TODO
// };

// export const getStaticProps = async ({params }) => {
//   const prismic = getPrismicClient({});
//   const response = await prismic.getByUID(TODO);

//   // TODO
// };
