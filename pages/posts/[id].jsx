import Head from "next/head";
import Image from "next/image";
import { Markup } from "interweave";
import Link from "next/link";

import styles from './post.module.css'


export const getServerSideProps = async (context) =>{
    const {id} = context.params; 
    const res  = await fetch(`https://civilnet.am/wp-json/wp/v2/posts/${id}`);
    const datas = await res.json();
    return{
        props: {postItem: datas}
    }
   
}
const PostItem = (postItem) => {
   const data = postItem.postItem;
   
    return(
        <>
            <Head>
                <title>
                   1
                </title>
            </Head>
            <main className={styles.postItemConten}>
                <Link href={'/posts/'}>
                    Back to Posts
                </Link>
                
                
                
             
               <div>
                    <Image 
                    // className={styles.postImage}
                    src={data.yoast_head_json.og_image[0].url} 
                    title={data.title.rendered}
                    alt={data.title.rendered}
                    width={data.yoast_head_json.og_image[0].width}
                    height={data.yoast_head_json.og_image[0].height}></Image>
                </div>
             
                <Markup content={data.content.rendered} /> 
             
                    
             
            </main>
        </>
    )   
}

export default PostItem;