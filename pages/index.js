
import Footer from '../components/footer';
import { API_URL } from '../config';
import Content from '../components/content';

export default function Home({category}) {
  console.log("............",category)
  return (
   <>
    <Content category={category}/>
   </>
  )
}

export async function getStaticProps(){
  const categories = await fetch(`${API_URL}/api/categories`);
  const response = await categories.json();
  return{
    props:{
     category:response
    }
  }
}