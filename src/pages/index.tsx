import { GetStaticProps } from 'next';
import Link from 'next/link';

import { FiUser, FiCalendar } from 'react-icons/fi';

import { ReactElement, useState } from 'react';
import { getPrismicClient } from '../services/prismic';

import formatDateToBR from '../utils/date-formatter';

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

export default function Home({ postsPagination }: HomeProps): ReactElement {
  const [posts, setPosts] = useState<Post[]>(postsPagination.results);
  const [nextPage, setNextPage] = useState<string>(postsPagination.next_page);

  function handleLoadMorePosts(): void {
    fetch(nextPage)
      .then(response => response.json())
      .then(data => {
        setPosts([...posts, ...data.results]);
        setNextPage(data.next_page);
      });
  }

  return (
    <>
      <main className={commonStyles.container}>
        <div className={styles.postsList}>
          {posts.map(post => (
            <Link key={post.uid} href={`/post/${post.uid}`}>
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
        {nextPage != null ? (
          <div className={styles.loadMoreButton}>
            <button type="button" onClick={() => handleLoadMorePosts()}>
              Carregar mais posts
            </button>
          </div>
        ) : null}
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
