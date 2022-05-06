const filter = () => {

    return `   <div id="CategProd">
    <div id="SortBy">
        <p id="tagHead">SORT BY :</p>
        <select name="" id="priceSort" onchange="PriceSort()">
            <option>Featured</option>
            <option value="low">Price-Low to High</option>
            <option value="high">Price-High to Low</option>
            <option>Ratings</option>
            <option>Best Seller</option>
        </select>
    </div>
    <div id="FilterBy">
        <p id="tagHead">FILTER BY :</p>
        <p id="tagSort">COLOR</p>
        <br>
        <p class="catNm">Black</p>
        <p class="catNm">Purple</p>
        <p class="catNm">Abstract</p>
        <p class="catNm">Red</p>
        <p class="catNm">Creme</p>
        <p class="catNm">Pink</p>
        <br>
        <br>
        <p id="tagSort">TYPE</p>
        <br>
        <p class="catNm">Tops & Tees</p>
        <p class="catNm">Jackets & Coats</p>
        <p class="catNm">Jumpsuits</p>
        <p class="catNm">Dresses</p>
        <p class="catNm">Jeans</p>
        <br>
        <br>
        <p id="tagSort">SIZE</p>
        <span class="catNm" style="border:1px solid #26262c75; padding:1px">XS</span>
        <span class="catNm" style="border:1px solid #26262c75; padding:1px">S</span>
        <span class="catNm" style="border:1px solid #26262c75; padding:1px">M</span>
        <span class="catNm" style="border:1px solid #26262c75; padding:1px">L</span>
        <span class="catNm" style="border:1px solid #26262c75; padding:1px">XL</span>
    </div>
    
</div> `
    };
    
    export default filter;