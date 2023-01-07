
import Image from "next/image";
import Link from "next/link";
import styles from './post.module.css'

const Post = (props) => {
    const data =  props.props;
    return(
        <div key={data.id} className={styles.postContent}>
            {console.log(data.id)}
            <Image 
                className={styles.postImage}
                src={data.yoast_head_json.og_image[0].url} 
                title={data.title.rendered}
                alt={data.title.rendered}
                width={data.yoast_head_json.og_image[0].width}
                height={data.yoast_head_json.og_image[0].height}></Image>
            
            <Link href={`posts/${data.id}`}>
                {data.title.rendered}
            </Link>
            

        </div>
    )
}

export default Post;