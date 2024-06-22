import "./Category.css";
import Input from "../../../component/Input";

function Category({ handleChange }) {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>
      <div>
        <label className="sidebar-label-container">
          <input type="radio" onChange={handleChange} value="" name="test" />
          <span className="checkmark"></span>All
        </label>

        <Input
            handleChange={handleChange}
            value="fashion"
            title="Fashion"
            name="test"
        />
        <Input
            handleChange={handleChange}
            value="school"
            title="School"
            name="test"
        />
        <Input
            handleChange={handleChange}
            value="electroincs"
            title="Electroincs"
            name="test"
        />
        <Input
            handleChange={handleChange}
            value="supermarket"
            title="Supermarket"
            name="test"
        />
        <Input
            handleChange={handleChange}
            value="beauty"
            title="Beauty"
            name="test"
        />
        <Input
            handleChange={handleChange}
            value="mobile"
            title="Mobile"
            name="test"
        />
        <Input
            handleChange={handleChange}
            value="footweat"
            title="Footweat"
            name="test"
        />
        <Input
            handleChange={handleChange}
            value="toys"
            title="Toys"
            name="test"
        />
        <Input
            handleChange={handleChange}
            value="laptops"
            title="Laptops"
            name="test"
        />
      </div>
    </div>
  );
}
export default Category;
