import type { NextPage,GetStaticProps,InferGetStaticPropsType} from 'next'
import Layout from '../components/Layout'
import {getAllPostsData} from '../lib/posts' //lib(ライブラリ)フォルダから関数をインポート
import Post from '../components/Post'

/*
InferGetStaticPropsType
getStaticPropsでreturnされた値をもとに、Pageに渡されるPropsの型を類推
https://zenn.dev/catnose99/articles/7201a6c56d3c88
*/
type Props = InferGetStaticPropsType<typeof getStaticProps>

const Blog: NextPage<Props> = ({posts}) => {
  return (
    <>
      <Layout title="Blog">
        <ul className="m-10">
          {posts && posts.map((post) => <Post key={post.id} post={post} />)}
        </ul>
      </Layout>
    </>
  )
}
export default Blog

/*
SSGの実装部分
getStaticProps:サーバサイドでビルド時に一回だけ実行される
//https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props
*/
export const getStaticProps= async () => {
  const posts = await getAllPostsData();
  return {
    props : {posts}
  }
}