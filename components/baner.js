import Link from "next/link"

const Banner = () => {
    return (
        <>
            <div className=" mt-2  bg-[url('/banner.jpg')] opacity-70 h-80 bg-fixed bg-no-repeat bg-center bg-cover">
                <div className="flex items-center justify-center h-full bg-black/40  ">
                    <div className="text-xl text-center text-white ">
                        <h1 className="mb-4 text-5xl ">About Us</h1>
                        <ul className="flex justify-center">
                            <li className=" relative mr-8 after:content-[''] after:h-1 after:w-1 after:rounded-full  after:bg-amber-300 after:absolute after:-right-5 after:top-1/2 after:-translate-y-0 ">
                               <Link href="/" >Home</Link> </li>
                            <li className="text-amber-300">About</li>
                        </ul>
                    </div>

                </div>


            </div>

        </>
    )
}
export default Banner;