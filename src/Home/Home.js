import React from 'react';
import Banner from '../Banner/Banner';
import Card from '../Card/Card'
import "./Home.css";

function Home() {
    return (
        <div className="home">
           
            <Banner />
            <div className="home__section">
                <Card
                src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
                title="Unique stays"
                description="Spaces that are more than
                 just a place to sleep."
                />
                <Card
                src="https://a0.muscache.com/im/pictures/4a2f688e-0b33-4feb-932f-494b9a37348c.jpg?im_w=720"
                title="Online Experiences"
                description="Unique activities we can do 
                together, led by a world of hosts."/>
                <Card
                src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
                title="Entire homes"
                description="Comfortable 
                private places, with room for
                 friends or family."/>
           

            </div>
            <div className="home__section">
            <Card src="https://a0.muscache.com/im/pictures/d2556cc5-39e5-4f39-8879-80dfc8b628df.jpg?aki_policy=large"
                  title="The Hideaway"
                  description=" Robert 6 guests2 bedrooms 3 beds · 1 bathroom "
                  price="₹1,474"
            />
            <Card src="https://a0.muscache.com/im/pictures/f1599e33-a74f-42c5-8593-5813d5cb8661.jpg?aki_policy=x_large"
                  title="Luxe Bedroom in Resort "
                  description="Take a swim while steeped
                   in the lush environs of the garden"
                  price="₹7,243"
            />
            <Card src="https://a0.muscache.com/im/pictures/89237901-c84a-4953-8370-9fa01ba87a88.jpg?im_w=720"
                  title="Luxury Guest Suite in Resort"
                  description="Welcome to Villa Paradiso!
                  Enjoy our green oasis"
                  price="₹7,211"
            />


            </div>
            

        </div>
    )
}

export default Home
