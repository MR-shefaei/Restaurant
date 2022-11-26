import { API_URL } from '../config';
import Content from '../components/content';

export default function Home({category , neighborhood}) {
  return (
   <>
    <Content category={category } neighborhood={neighborhood} />
   </>
  )
}

export async function getStaticProps(){
  const categories = await fetch(`${API_URL}/api/categories`);
  const response = await categories.json();
  const neighborhoods = await fetch(`${API_URL}/api/neighborhoods`);
  const response2 = await neighborhoods.json();
  return{
    props:{
     category:response,
     neighborhood:response2
    }
  }
}