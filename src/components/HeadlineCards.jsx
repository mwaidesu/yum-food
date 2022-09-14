import React from 'react'

function HeadlineCards() {
  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
        {/* Card */}

        <div className="rounded-xl relative">
            {/* overlay */}
            <div className=" absolute w-full h-full bg-black/50 rounded-xl text-white">
                <p className="font-bold text-2xl px-2 pt-4">Sun's Out, Brunch Now! </p>
                <p className="px-2">Through 9/26</p>
                <button className="border-white bg-white text-black mx-2 absolute bottom-4">Order Now</button>

            </div>
            <img src="https://images.pexels.com/photos/824635/pexels-photo-824635.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="card eggs" 
            className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"/>
        </div>

        <div className="rounded-xl relative">
            {/* overlay */}
            <div className=" absolute w-full h-full bg-black/50 rounded-xl text-white">
                <p className="font-bold text-2xl px-2 pt-4">New Restaurants </p>
                <p className="px-2">Including Chef's Specials</p>
                <button className="border-white bg-white text-black mx-2 absolute bottom-4">Order Now</button>

            </div>
            <img src="https://images.pexels.com/photos/3535395/pexels-photo-3535395.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="card eggs" 
            className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"/>
        </div>

        <div className="rounded-xl relative">
            {/* overlay */}
            <div className=" absolute w-full h-full bg-black/50 rounded-xl text-white">
                <p className="font-bold text-2xl px-2 pt-4">Have a sweet tooth? </p>
                <p className="px-2">We deliver deserts</p>
                <button className="border-white bg-white text-black mx-2 absolute bottom-4">Order Now</button>

            </div>
            <img src="https://images.unsplash.com/photo-1542826438-bd32f43d626f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=992&q=80" alt="card eggs" 
            className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"/>
        </div>





    </div>
  )
}

export default HeadlineCards