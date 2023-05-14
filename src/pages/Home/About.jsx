import image from "../../assets/images/about_us/person.jpg"
import image2 from "../../assets/images/about_us/parts.jpg"
const About = () => {
  return (
   
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col justify-between items-center w-full lg:flex-row">
        <div className="w-1/2 relative">
        <img
            src={image}
            className="lg:w-3/4 max-w-sm rounded-lg shadow-2xl "
          />
        <img
            src={image2}
            className="max-w-sm rounded-lg shadow-2xl lg:absolute lg:top-1/2 lg:left-1/3 border-8 border-white"
          />
        </div>

          <div className="lg:w-1/2 space-y-3">
          <h1 className="text-4xl font-bold text-warning">About Us</h1>
            <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
    
            <p className="py-3">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
            </p>

            <p className="py-3">
      the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
            </p>
            <button className="btn btn-warning text-white">Get more info</button>
          </div>
        </div>
      </div>
  );
};

export default About;
