import { useState, useEffect } from "react";
import { IoMdClose } from "react-icons/io";

function Favorite() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetchFavorites();
  }, []);

  const fetchFavorites = async () => {
    const token = localStorage.getItem("userToken");
    if (token) {
      try {
        const response = await fetch("https://www.smarketp.somee.com/api/Favorite/GetFavorites", {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
          }
        });

        if (response.ok) {
          const data = await response.json();
          setFavorites(data);
        } else {
          console.error("Failed to fetch favorites");
        }
      } catch (error) {
        console.error("Error fetching favorites:", error);
      }
    } else {
      console.error("Token not found in localStorage");
    }
  };

  const handleDeleteFavorite = async (productId) => {
    const token = localStorage.getItem("userToken");
    if (token) {
      try {
        const response = await fetch("https://www.smarketp.somee.com/api/Favorite/Delete", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ productId: productId })
        });
  
        if (response.ok) {
          // If deletion is successful, reload the page
          fetchFavorites();        
        } else {
          console.error("Failed to delete favorite");
        }
      } catch (error) {
        console.error("Error deleting favorite:", error);
      }
    } else {
      console.error("Token not found in localStorage");
    }
  };

  return (
    <>
      <div className="favorite">
        <h3 className="fw-bold">Favorite Products</h3>
        <table className="table">
          <thead>
            <tr>
              <th className="text-start">Delete</th>
              <th className="text-start">Product Image</th>
              <th className="text-start">Name</th>
              <th className="text-start">Price</th>
              <th className="text-start">Action</th>
            </tr>
          </thead>
          <tbody>
            {favorites.map((fav, index) => (
              <tr key={index}>
                <td className=" justify-content-evenly align-items-center">
                  <IoMdClose className="action text-danger me-2" onClick={() => handleDeleteFavorite(fav.productId)} />
                  </td>
                  <td><img src={fav.imageUrl} alt={`Product ${index}`} width="50" height="50"/></td>
                  <td>                  <div>
                    <h5 className="mx-2 d-inline">{fav.productName.length > 25 ? fav.productName.substring(0, 23) + '...' : fav.productName}</h5>
                  </div></td>
                <td>${fav.price}</td>
                <td>
                <button className="btn bg-orange">Add to Cart</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Favorite;
