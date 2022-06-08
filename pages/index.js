import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          안녕!~
          <br />난 지금 굉장히 기분이 좋아 왜 실행이 안될까 과연?? 해결 했다
          ㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠ
        </p>
        <p>
          (Next.js는 다 좋은데 왜 내 노트북 환경에서는 fast refresh가 안될까?
          제발 이것만 좀 됐으면 좋겠다 확인할 때 너무 불편해 조금만 수정해도 npm
          run dev를 작성하고 결과를 기다리는 이런 지루한 시간을,, ㅠ 내가
          검색능력이 부족한건가 내가 특이 케이스인가 왜 나와 같은 경험을 한
          사람은 최신 버전의 Next.js를 설치하면 된다고 하는데 난 지금 최신버전을
          사용하고 있어ㅠㅠ{" "}
          <a href="https://hankooktire.kro.kr">내가 만든 첫 랜딩페이지</a>)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
