import './Design.css';
import Signing from './Signin';
function Search() {
    return (
        <div className="header">
            <h1 className="tex">Amozon.in</h1>
            
            <input type="text" className ="searchbox" placeholder=" Amazon.in"></input>

            <input list="ice-cream-flavors" placeholder="All" className="option"></input>
            
<datalist id="ice-cream-flavors">
<option>All Categories</option>
            <option>Alexa Skills</option>
            <option>Amazon Devices</option>
            <option>Amazon Fashion</option>
            <option>Amazon Fresh</option>
            <option>Amazon Pharmacy</option>
            <option>Appliances</option>
            <option>Apps & Game</option>
            <option>Audible Audiobooks</option>
            <option>Baby</option>
            <option>Beauty</option>
            <option>Book</option>
            <option>Car & Motorbike</option>
            <option>Clothing & Accessories</option>
            <option>Collectibles</option>
            <option>Computers & Accessories</option>
            <option>Deals</option>
            <option>Electronics</option>
            <option>Furniture</option>
            <option>Garden & Outdoors</option>
            <option>Gift Card</option>
            <option>Grocery & Gourmet Foods</option>
            <option>Health & Personal Care</option>
            <option>Home & Kitchen</option>
            <option>Industrial & Scientific</option>
            <option>Jewellery</option>
            <option>Kindle Store</option>
            <option>Luggage & Bags</option>
            <option>Luxury Beauty</option>
            <option>Movies & TV Shows</option>
            <option>Mp3 Music</option>
            <option>Music</option>
            <option>Musical Instruments</option>
            <option>Office Products</option>
            <option>Pet Supplies</option>
            <option>Prime Video</option>
            <option>Shoes & Handbages</option>
            <option>Software</option>
            <option>Sports, Fitness & Outdoors</option>
            <option>Subscribe & Save</option>
            <option>Tools & Home Improvement</option>
            <option>Toys & Games</option>
            <option>Under ₹500</option>
            <option>Video Games</option>
            <option>Watches</option>
</datalist>
<Signing></Signing>
            
        </div>

    )
}
export default Search;