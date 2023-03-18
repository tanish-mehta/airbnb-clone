import { useRouter } from 'next/router';
import React from 'react'
import Header from '../components/Header'
import { format } from 'date-fns';
import InfoCard from '../components/InfoCard';
import Map from '../components/Map';

interface SearchProps {
    searchResults: any;
}

function Search({ searchResults}: SearchProps) {
    const router = useRouter();
    const { location, startDate, endDate, noOfGuests } = router.query;
    const formattedStartDate = format(new Date(startDate as string), 'dd MMMM yy')
    const formattedEndDate = format(new Date(endDate as string), 'dd MMMM yy')
    const range = `${formattedStartDate} - ${formattedEndDate}`

  return (
      <div className=''>
          <Header placeholder={`${location} | ${range} | ${noOfGuests} guests`}/>
          <main className='flex '>
              <section className='flex-grow pt-14 px-6'>
                  <p className='text-xs'>300+ stays - { range }- for { noOfGuests} number of guests</p>
                  <h1 className='text-3xl font-semibold mt-2 mb-6'>Stays in {location}</h1>
                  <div className='hidden sm:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap'>
                      <p className='button'>Cancellation Flexibility</p>
                      <p className='button'>Type of place</p>
                      <p className='button'>Price</p>
                      <p className='button'>Rooms and beds</p>
                      <p className='button'>More filters</p>
                  </div>
                  <div className='flex flex-col'>
                        {searchResults.map((item:any) => (
                      <InfoCard key={item.location} img={item.img} location={item.location} title={item.title} description={item.description} star={item.star} price={item.price} total={item.total} />
                  ))}
                  </div>
                
              </section>

              <section className='hidden sm:inline-flex min-w-[600px]'>
                  <Map></Map>
              </section>
          </main>
    </div>
  )
}
export default Search 

export async function getServerSideProps() {
    // const searchResults = await fetch('https://links.papareact.com/isz').then(res => { res.json() })
    const searchResults = [{
        img: "https://links.papareact.com/4cj",
        location: "Private room in center of London",
        title: "Stay at this spacious Edwardian House",
        description: "1 guest - 1 bedroom - 1 bed - 1.5 shared bathrooms - Wifi - Kitchen - Free parking - Washing Machine",
        star: 4.73,
        price: "30 / night",
        total: "117 total"      
    },
        {
            img: "https://links.papareact.com/4cj",
            location: "Private room in center of London",
            title: "Stay at this spacious Edwardian House",
            description: "1 guest - 1 bedroom - 1 bed - 1.5 shared bathrooms - Wifi - Kitchen - Free parking - Washing Machine",
            star: 4.73,
            price: "30 / night",
            total: "117 total"
        },
        {
            img: "https://links.papareact.com/4cj",
            location: "Private room in center of London",
            title: "Stay at this spacious Edwardian House",
            description: "1 guest - 1 bedroom - 1 bed - 1.5 shared bathrooms - Wifi - Kitchen - Free parking - Washing Machine",
            star: 4.73,
            price: "30 / night",
            total: "117 total"
        },
    ]
        
    return {
        props: {
            searchResults
        }
    }

}
 