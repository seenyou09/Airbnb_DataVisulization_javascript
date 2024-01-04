function filterPrice (airbnbs, priceRange) {
    const result = airbnbs.filter((airbnb)=>{
        return airbnb.price >= priceRange[0] && airbnb.price <= priceRange[1];
        
    })
    return result
}

export {filterPrice}