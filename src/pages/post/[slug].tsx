import { GetStaticPaths, GetStaticProps } from 'next';
import { RichText } from 'prismic-dom';
import { ReactElement } from 'react';
import { FiCalendar, FiClock, FiUser } from 'react-icons/fi';

import { getPrismicClient } from '../../services/prismic';

import commonStyles from '../../styles/common.module.scss';
import formatDateToBR from '../../utils/date-formatter';
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

export default function Post({ post }: PostProps): ReactElement {
  // function calcReadTime() {

  // }

  return (
    <>
      <div className={styles.banner}>
        <img src={post.data.banner.url} alt="" />
      </div>
      <div className={commonStyles.container}>
        <div className={styles.postHeader}>
          <h1>{post.data.title}</h1>
          <div>
            <div>
              <FiCalendar size={20} />
              <time>{formatDateToBR(post.first_publication_date)}</time>
            </div>
            <div>
              <FiUser size={20} />
              <span>{post.data.author}</span>
            </div>
            <div>
              <FiClock size={20} />
              <span>4 min</span>
            </div>
          </div>
        </div>
        <div className={styles.postContent}>
          {post.data.content.map(content => (
            <>
              {content.heading ? <h1>{content.heading}</h1> : null}
              <div
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{
                  __html: RichText.asHtml(content.body),
                }}
              />
            </>
          ))}
        </div>
      </div>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const prismic = getPrismicClient({});
  const posts = await prismic.getByType('post');

  const paths = posts.results.map(post => ({
    params: { slug: post.uid },
  }));

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params;

  const prismic = getPrismicClient({});

  const response = await prismic.getByUID('post', String(slug), {});

  return {
    props: {
      post: response,
    },
  };
};
