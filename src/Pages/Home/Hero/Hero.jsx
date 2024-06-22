
import { Link } from 'react-router-dom'

function Hero() {
  return <>
    <div className="hero mb-3">
        <div className="overlay">
            <div className="container">
                <div className="row ">
                    <div className="left col-6 col-md-6 py-5 d-flex flex-column" data-aos="zoom-in">
                        <h1 className='fw-bold'>Discover the Best Deals Today!</h1>
                        <p className='text-white'>
                        At Smarket, we bring you a curated selection of the finest products across various categories.
                        </p>
                        <Link to='/shop' className='btn bg-orange'>View More</Link>
                    </div>
                    <div className="col-6 col-md-6 right align-self-start">
                        <div className='offer'>
                            <p className='fs-1'>40%</p>
                            <p className='fs-1 '>off</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        
    </div>
  </>
}
export default Hero