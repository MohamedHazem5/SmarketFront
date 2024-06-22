import "./Sidebar.css"
import Category from "./Category/Category"
import Price from "./Price/Price"

function Sidebar({handleChange}) {
    return (
        <>
            <section className="sidebar">
                <Category handleChange={handleChange}/>
                <Price  handleChange={handleChange}/>
            </section>
            
        </>
    )
}
export default Sidebar
