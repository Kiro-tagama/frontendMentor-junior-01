import img from '../assets/images/client-databiz.svg'
import img1 from '../assets/images/client-audiophile.svg'
import img2 from '../assets/images/client-meet.svg'
import img3 from '../assets/images/client-maker.svg'

export default function Main(){
  return(
    <div className="main flex-1">
      <div className='flex flex-col justify-between'>
        <div className='md:mt-16'>
          <h1 className=" text-[3.5rem] ">Make remote work</h1>
          <p className=" text-c2 py-6">
            Get your team in sync, no metter your location.<br/>
            Streamline processes, create team rituals, and watch productivity soar.
          </p>
          <button className=" bg-c3 text-c1 p-3 px-5 rounded-xl border-c3 border-2 hover:bg-opacity-0 hover:text-c3 transition-colors duration-100 font-bold ">
            Learn more
          </button>
        </div>
        <div className="logos flex flex-row flex-wrap mt-10 gap-4">
          <img src={img}/>
          <img src={img1}/>
          <img src={img2}/>
          <img src={img3}/>
        </div>
      </div>
      <div className=' max-h-[80vh]'>
        <img className='img'/>
      </div>
    </div>
  )
}