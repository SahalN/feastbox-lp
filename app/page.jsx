/** @format */

export default function LandingPage() {
  return (
    <>
      {/*  */}
      <div className='flex flex-col flex-wrap px-4 py-8 bg-black'>
        <div className='text-[#FFAA00]'>
          <div>
            <img src='' alt='' />
          </div>
          <div>
            <h1 className='pb-4 font-oi'>Discover a world of flavors!</h1>
            <p>
              FeastBox brings the finest dishes from around the world straight
              to your doorstep. With stunning imagery and heartwarming tales,
              each dish has a story to tell.
            </p>
          </div>
        </div>
        <div className='text-[#FFAA00] py-8'>
          <div>
            <img src='' alt='' />
          </div>
          <div>
            <h1 className='pb-4 font-oi'>Discover a world of flavors!</h1>
            <p>
              FeastBox brings the finest dishes from around the world straight
              to your doorstep. With stunning imagery and heartwarming tales,
              each dish has a story to tell.
            </p>
          </div>
        </div>
      </div>
      {/*  */}
      <div className='px-4 py-8 font-normal text-black'>
        <div>
          <h1 className='font-oi'>Why Choose FeastBox</h1>
        </div>
        <div>
          <img src='' alt='' />
        </div>
        <div className='flex flex-col gap-4 py-4'>
          <div>
            <h3>Global Cuisine</h3>
            <p>Bring the world to your kitchen with our exotic menu</p>
          </div>
          <div>
            <h3>Effortless Ordering</h3>
            <p>A few clicks and get ready to feast!</p>
          </div>
          <div>
            <h3>Quality Ingredients</h3>
            <p>Fresh and locally sourced produce just for you</p>
          </div>
        </div>
      </div>
      {/*  */}
      <div className='px-4 py-8 text-black'>
        <div>
          <h3 className='flex justify-center pb-4 text-2xl font-oi'>
            Get Started
          </h3>
          <p>
            Are you ready to become a global home-chef? Say goodbye to mundane
            meals and hello to an epic culinary journey. Click below to start
            the feast!
          </p>
        </div>
        <div className='py-4'>
          <button className='focus:outline-none text-black  bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium  rounded-lg text-sm px-5 py-2.5 me-2 mb-2 w-full'>
            Order Now
          </button>
        </div>
      </div>
      {/*  */}
      <div className='flex flex-col gap-4 px-4 py-8 text-black '>
        <div className='font-oi'>Got Questions? We’ve Got Answers!</div>
        <div>
          <h3>How does the menu selection work?</h3>
          <p>
            Our dynamic menu changes every week, giving you a variety to choose
            from. You simply select, and we deliver!
          </p>
        </div>
        <div>
          <h3>What is your cancellation policy?</h3>
          <p>
            We believe in total flexibility - you can cancel or skip your orders
            by notifying us a week in advance.
          </p>
        </div>
      </div>
    </>
  );
}
