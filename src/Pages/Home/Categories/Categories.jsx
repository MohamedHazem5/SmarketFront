/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable array-callback-return */
import { useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

function Categories() {

  const [category, setData] = useState([])
  const api = "https://www.smarketp.somee.com/api/Category"

  useEffect(() => {
    const getCategory = async () => {
      const response = await fetch(api)
      const data = await response.json()
      setData(data)
    };
    getCategory()
  }, [])

  return (
    <>
    <div className="py-2 my-2" >
      <div className="container" >
        <div className="row">
          <h3 className="mb-2 fw-bold sixth-color">Categories</h3>
          <div className="parent d-flex flex-wrap justify-content-between overflow-hidden" data-aos="zoom-in">
            {
              category.map((element) => 
                <Link to="/shop" 
                  className="category d-flex flex-column align-items-center justify-content-center " 
                >
                  <div className="d-flex flex-column" style={{"background":element.color, "borderRadius" :"10px"}}>
                    <a className="background" href="#"> 
                      <img src={element.image.url} alt="" />
                    </a>
                  </div>
                  <h3 className="mt-3 fs-6 text-black">{element.name}</h3>
                </Link>
              )
            }
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
export default Categories;
