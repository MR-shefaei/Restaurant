import { API_URL } from '../config';
import Content from '../components/content';

export default function Home({category , neighborhood , restaurant}) {
  return (
   <>
    <Content category={category } neighborhood={neighborhood} restaurant={restaurant} />
   </>
  )
}

export async function getStaticProps(){
  const categories = await fetch(`${API_URL}/api/categories`);
  const response = await categories.json();
  const neighborhoods = await fetch(`${API_URL}/api/neighborhoods`);
  const response2 = await neighborhoods.json();
  const restaurants = await fetch(`${API_URL}/api/restaurants?populate[0]=image`);
  const response3 = await restaurants.json();
  return{
    props:{
     category:response,
     neighborhood:response2,
     restaurant : response3
    }
  }
}