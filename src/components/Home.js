import React from 'react'
import Header from './Header'
import Footer from './Footer'
import LoginForm from './LoginForm'
function Home() {
  return (

    <>
     <Header/>

     <div className='alone'>
     <h1> Welcome to Athens Tourism</h1>
     </div>
        
        <div className='homeheading'> 
        </div>


        <div className='contentOne'>
            <h2> What to expect</h2>

            <div className='doubleColoumn'>

                <div className='item-col'>
                    <h4>Tourism</h4>

                    <p> Find the best spots in Athens with our up
                        to date additions with constant users adding new
                        and excited places everyday. Wether it would be comedy clubs 
                        concert venues around town. Or Delecioous spots to eat. We make sure
                        to keep you updated everyday
                    </p>
                </div>
                <div className='item-col'>
                    <h4>Dynamic</h4>      
                    <p>
                        Over the course of this app we vow to give our customers what they want by making the
                        neccesary changes everyday to given them the best product. Therefore by giving them 
                        the power for them to add and delete Events to authenticated users to giving them a emerse world
                        full of oppurtunies. Not only will a list be created with a multitude of applicants.
                        but this can be benificial to the world. No Kizzy
                    </p>
                </div>
            </div>
            <Footer/>



        </div>

    


    


    </>
    
  )
}

export default Home