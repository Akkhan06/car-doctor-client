import img1 from "../../assets/images/banner/1.jpg"
import img2 from "../../assets/images/banner/2.jpg"
import img3 from "../../assets/images/banner/3.jpg"
import img4 from "../../assets/images/banner/4.jpg"
import img5 from "../../assets/images/banner/5.jpg"
import img6 from "../../assets/images/banner/6.jpg"

const Banner = () => {
    return (
        <div className="carousel w-full h-[600px] rounded-xl">
        <div id="slide1" className="carousel-item relative w-full rounded-xl">
          <img src={img1} className="w-full" />
          <div className="absolute text-white h-full flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] right-0 left-0 ">
            <div className="w-1/3 ml-10"><h2 className="text-6xl font-bold">Affordable Price For Car Servicing</h2> 
            <p className="py-4">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>

            <button className="btn btn-warning text-white">Discover More</button>
            <button className="btn btn-outline btn-warning ml-3 f">Letest Project</button></div>
          </div>

          <div className="absolute flex justify-end gap-3 transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide4" className="btn btn-circle">❮</a> 
            <a href="#slide2" className="btn btn-circle bg-warning border-none">❯</a>
          </div>
        </div> 
        <div id="slide2" className="carousel-item relative w-full rounded-xl">
          <img src={img2} className="w-full" />
          <div className="absolute text-white h-full flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] right-0 left-0 ">
            <div className="w-1/3 ml-10"><h2 className="text-6xl font-bold">Affordable Price For Car Servicing</h2> 
            <p className="py-4">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>

            <button className="btn btn-warning text-white">Discover More</button>
            <button className="btn btn-outline btn-warning ml-3 f">Letest Project</button></div>
          </div>
          <div className="absolute flex transform -translate-y-1/2 left-5 right-5 justify-end gap-3 bottom-0">
            <a href="#slide1" className="btn btn-circle">❮</a> 
            <a href="#slide3" className="btn btn-circle bg-warning border-none">❯</a>
          </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full rounded-xl">
          <img src={img3} className="w-full" />
          <div className="absolute text-white h-full flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] right-0 left-0 ">
            <div className="w-1/3 ml-10"><h2 className="text-6xl font-bold">Affordable Price For Car Servicing</h2> 
            <p className="py-4">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>

            <button className="btn btn-warning text-white">Discover More</button>
            <button className="btn btn-outline btn-warning ml-3 f">Letest Project</button></div>
          </div>
          <div className="absolute flex transform -translate-y-1/2 left-5 right-5 justify-end gap-3 bottom-0">
            <a href="#slide2" className="btn btn-circle">❮</a> 
            <a href="#slide4" className="btn btn-circle bg-warning border-none">❯</a>
          </div>
        </div> 
        <div id="slide4" className="carousel-item relative w-full rounded-xl">
          <img src={img4} className="w-full" />
          <div className="absolute text-white h-full flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] right-0 left-0 ">
            <div className="w-1/3 ml-10"><h2 className="text-6xl font-bold">Affordable Price For Car Servicing</h2> 
            <p className="py-4">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>

            <button className="btn btn-warning text-white">Discover More</button>
            <button className="btn btn-outline btn-warning ml-3 f">Letest Project</button></div>
          </div>
          <div className="absolute flex transform -translate-y-1/2 left-5 right-5 justify-end gap-3 bottom-0">
            <a href="#slide3" className="btn btn-circle">❮</a> 
            <a href="#slide1" className="btn btn-circle bg-warning border-none">❯</a>
          </div>
        </div>
      </div>
    );
};

export default Banner;