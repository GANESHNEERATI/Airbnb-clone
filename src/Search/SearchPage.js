import { Button } from '@material-ui/core'
import React from 'react'
import './SearchPage.css'
import SearchResult from './SearchResult';

function SearchPage() {
    return (
        <div className="searchpage">
             <div className=" ">
                <p>62 stays . 26 augest to 30 augest . 2 guests  </p>
                <h1>Stays nearby</h1>
                <Button variant='outlined'>Cancellation Flexibility</Button>
                <Button variant='outlined'>Type of Place</Button>
                <Button variant='outlined'>Price</Button>
                <Button variant='outlined'>Rooms and beds</Button>
                <Button variant='outlined'>More filters</Button>
                </div>
                <SearchResult
                img="https://a0.muscache.com/im/pictures/d9130f2a-92bc-4c77-bd40-c0fe0d191d26.jpg?aki_policy=large"
                location="Gurugram, Haryana, India"
                title="Aravali Woods Villa, Non-Sharing Social Dist Home"
                description="Right next to Aravalli Hills, 
                a rare quiet retreat in the lap of nature, 
                while just being 3 km from epicenter of commercial
                 activities in India, CyberCity."
                star={5}
                price="₹8,233/ night"
                total="₹20,000 total"
                 />
                 <SearchResult
                img="https://a0.muscache.com/im/pictures/31f40bf2-dd3a-4b32-871f-6ad4536c703a.jpg?im_w=720"
                location="Vagator, Anjuna, Goa, India"
                title="Casa Caisua- A Susegad Goan Loft Style Villa"
                description="Casa Caisua is a Susegad Village house located at Anjuna and Nestled right in the middle of the village, 
                it is set in a private 12000-square-feet Orchard
                 and is a few minutes walk to Vagator beach. "
                star={5}
                price="₹7,584/ night"
                total="₹30,000 total"
                 />

                <SearchResult
                img="https://a0.muscache.com/im/pictures/f4d6de60-c592-47c4-9331-527cf665c5cd.jpg?im_w=720"
                location="Penha de França, Goa, India"
                title="Rent a Villa with a Private Swimming Pool"
                description="Welcome to Carpe Diem a bespoke five bedroom villa in North Goa. 
                The villa has a private pool and a pantry "
                star={4.77}
                price="₹4,000/ night"
                total="₹4,000 total"
                 />
        </div>
    ) 
}

export default SearchPage
 