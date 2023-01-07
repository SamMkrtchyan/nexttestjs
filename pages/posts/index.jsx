
import Head from "next/head";
import Image from "next/image";
import Post from "./Post";
import styles from './post.module.css'


export const getStaticProps = async () =>{
    const res  = await fetch('https://civilnet.am/wp-json/wp/v2/posts?per_page=10');
    const datas = await res.json();
    return{
        props: {posts: datas}
    }
   
}


const Posts = ({posts}) => {
    return(
        <>
            <Head>
                <title>Posts</title>
            </Head>

            <main className={styles.postsLists}>
               {
                // console.log(posts[0].title.rendered);
                posts.map((post) => (
                    <Post key={post.id} props={post} />
                ))
               }
            </main>
        </>
    )
}

export default Posts;