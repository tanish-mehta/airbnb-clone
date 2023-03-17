import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Header from '../components/Header'
import LargeCard from '../components/LargeCard'
import MediumCard from '../components/MediumCard'
import SmallCard from '../components/SmallCard'


interface Location {
  img: string;
  distance: string;
  location: string;
}

interface CardData {
  img: string;
  title: string;
}

interface HomeProps {
  exploreData: Location[];
  cardsData: CardData[];
}

const Home: NextPage<HomeProps> = ({ exploreData, cardsData}) => {
  return (
    <div className="">
      <Head>
        <title>Airbnb Tanish</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

       
      <Header />
      <Banner/>
      
      <main className='max-w-7xl mx-auto px-8 sm:px-16'> 
        <section className='pt-6'>
          <h2 className='text-4xl font-semibold pb-5'>Explore Nearby</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {exploreData?.map(({ img, distance, location}: Location) => <SmallCard key={location} img={img} distance={distance} location={location} />) }
          </div>
        </section>

        <section className=''> 
          <h2 className='text-4xl font-semibold py-8'>Live Anywhere</h2>
          <div className='flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3'>
            {cardsData?.map(({img,title}:CardData) => (<MediumCard key={title} img={img} title={title} />))}
          </div>
        </section>

        <LargeCard img="https://links.papareact.com/4cj" title="The Greatest Outdoors" description="Wishlists curated by Airbnb" buttonText="Get Inspired"/>
      </main>

      <Footer/>
    </div>
  )
}

export default Home

export async function getStaticProps() { 
  // const exploreData = await fetch("https://links.papareact.com/pyp").then((res) => res.json());
const exploreData = [
  {
    location: 'New York',
    img: 'https://links.papareact.com/5j2',
    distance: '45-minute drive',
  },
  {
    location: 'Los Angeles',
    img: 'https://links.papareact.com/5j2',
    distance: '6-hour drive',
  },
  {
    location: 'Chicago',
    img: 'https://links.papareact.com/5j2',
    distance: '4.5-hour drive',
  },
  {
    location: 'Miami',
    img: 'https://links.papareact.com/5j2',
    distance: '4.5-hour drive',
  },
  {
    location: 'Denver',
    img: 'https://links.papareact.com/5j2',
    distance: '3.5-hour drive',
  },
  {
    location: 'Seattle',
    img: 'https://links.papareact.com/5j2',
    distance: '2-hour drive',
  },
];
  
  // const cardsData = await fetch("https://links.papareact.com/zp1").then((res) => res.json());
  const cardsData=[  {    "img": "https://links.papareact.com/2io",    "title": "Outdoor getaways"  },  {    "img": "https://links.papareact.com/2io",    "title": "Unique stays"  },  {    "img": "https://links.papareact.com/s03",    "title": "Entire homes"  },  {    "img": "https://links.papareact.com/8ix",    "title": "Pet allowed"  }]

  return {
    props: { 
      exploreData,
      cardsData
    }
  }

}