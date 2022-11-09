import Link from "next/link"
import  Head  from 'next/head';
export const getStaticProps =async()=>{
     
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await res.json()
    return{
        props:{data}
    }
}


const Post = ({data}) => {
    return ( 
    <>
        <Head>
            <title>first post</title>
        </Head>
        <h1>hello dear</h1>
        <div>
       
        {data.map(user =>(
            <Link href={/posts/+user.id} key= {user.id}>
                <a>
                    {user.name}
                </a>
            </Link>

        ))}

        </div>
        
        <Link href="/">
            <a>go back</a>
        </Link>
    </>
     );
}
 
export default Post;