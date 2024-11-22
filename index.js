const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3010;

let cors = require('cors');

app.use(cors());

app.use(express.static('static'));

let hotels = [
  {
    id: 1,
    name: "Romantic Getaway",
    category: "Resort",
    rating: 2.2,
    reviews: 4572,
    amenity: "Spa",
    price: 10464,
    country: "South Africa",
  },
  {
    id: 2,
    name: "Wellness Retreat",
    category: "Family",
    rating: 2.8,
    reviews: 2114,
    amenity: "Pool",
    price: 13243,
    country: "Australia",
  },
  {
    id: 3,
    name: "Romantic Getaway",
    category: "Luxury",
    rating: 3.1,
    reviews: 4359,
    amenity: "Restaurant",
    price: 3299,
    country: "Germany",
  },
  {
    id: 4,
    name: "Luxury Suites",
    category: "Family",
    rating: 4.9,
    reviews: 3651,
    amenity: "Bar",
    price: 16359,
    country: "United Kingdom",
  },
  {
    id: 5,
    name: "Luxury Suites",
    category: "Budget",
    rating: 4.6,
    reviews: 688,
    amenity: "Gym",
    price: 15570,
    country: "France",
  },
  {
    id: 6,
    name: "Cultural Heritage Hotel",
    category: "Boutique",
    rating: 2.0,
    reviews: 219,
    amenity: "Pet Friendly",
    price: 2321,
    country: "USA",
  },
  {
    id: 7,
    name: "Business Hotel",
    category: "Mid-Range",
    rating: 3.7,
    reviews: 1040,
    amenity: "Free WiFi",
    price: 4523,
    country: "India",
  },
  {
    id: 8,
    name: "Historic Plaza Hotel",
    category: "Mid-Range",
    rating: 3.5,
    reviews: 300,
    amenity: "Parking",
    price: 8543,
    country: "Australia",
  },
  {
    id: 9,
    name: "Adventure Resort",
    category: "Boutique",
    rating: 4.2,
    reviews: 1222,
    amenity: "Gym",
    price: 11894,
    country: "South Africa",
  },
  {
    id: 10,
    name: "Mountain Retreat",
    category: "Resort",
    rating: 4.8,
    reviews: 4015,
    amenity: "Spa",
    price: 17560,
    country: "India",
  },
  {
    id: 11,
    name: "Eco Friendly Lodge",
    category: "Family",
    rating: 2.4,
    reviews: 528,
    amenity: "Restaurant",
    price: 3124,
    country: "Germany",
  },
  {
    id: 12,
    name: "Urban Boutique Hotel",
    category: "Mid-Range",
    rating: 3.9,
    reviews: 1401,
    amenity: "Free WiFi",
    price: 9245,
    country: "France",
  },
  {
    id: 13,
    name: "Beachfront Hotel",
    category: "Luxury",
    rating: 4.5,
    reviews: 489,
    amenity: "Pool",
    price: 14567,
    country: "USA",
  },
  {
    id: 14,
    name: "Ocean View Resort",
    category: "Budget",
    rating: 3.3,
    reviews: 783,
    amenity: "Spa",
    price: 7432,
    country: "United Kingdom",
  },
  {
    id: 15,
    name: "City Central Hotel",
    category: "Boutique",
    rating: 4.1,
    reviews: 2133,
    amenity: "Bar",
    price: 9823,
    country: "Australia",
  },
  {
    id: 16,
    name: "Casino Resort",
    category: "Luxury",
    rating: 4.9,
    reviews: 5000,
    amenity: "Bar",
    price: 18900,
    country: "South Africa",
  },
  {
    id: 17,
    name: "Golf Resort",
    category: "Mid-Range",
    rating: 4.7,
    reviews: 789,
    amenity: "Gym",
    price: 16340,
    country: "France",
  },
  {
    id: 18,
    name: "Family Fun Hotel",
    category: "Family",
    rating: 3.2,
    reviews: 1322,
    amenity: "Pool",
    price: 7500,
    country: "Germany",
  },
  {
    id: 19,
    name: "Spa and Relaxation Hotel",
    category: "Luxury",
    rating: 4.4,
    reviews: 2314,
    amenity: "Spa",
    price: 14900,
    country: "United Kingdom",
  },
  {
    id: 20,
    name: "Country House Hotel",
    category: "Budget",
    rating: 3.6,
    reviews: 1876,
    amenity: "Parking",
    price: 6234,
    country: "Australia",
  },
];     
    function SortAscendingPrice(Hotel1,Hotel2){
      return Hotel1.price - Hotel2.price;
    }

    function SortDesecendingPrice(Hotel1,Hotel2){
      return Hotel2.price - Hotel1.price;
    }

  function GetSortPrice( hotelscopy,pricing){
    if (pricing=="low-to-high"){
      return hotelscopy.sort(SortAscendingPrice)
    }else{
      return hotelscopy.sort(SortDesecendingPrice)
    }

  }

app.get('/hotels/sort/pricing',(req,res)=>{
  let pricing = req.query.pricing;
  let hotelscopy=hotels.slice()
  let result =GetSortPrice(hotelscopy,pricing);
  res.json({ hotels: result })
})
 // - -- - -----------------------------------------------------//
   function SortAscendingRating(Hotel1,Hotel2){
     return Hotel1.rating - Hotel2.rating
   }
    function SortDesecendingRating(Hotel1 ,Hotel2){
      return Hotel2.rating - Hotel1.rating
    }
 function GetSortRating(hotelscopy,rating){
   if(rating == "low-to-high"){
     return hotelscopy.sort(SortAscendingRating)
   }else{
     return hotelscopy.sort(SortDesecendingRating)
   }
 }

app.get('/hotels/sort/rating',(req,res)=>{
  let rating =req.query.rating;
  let hotelscopy=hotels.slice();

  let result =GetSortRating(hotelscopy,rating)

  res.json({ hotels: result })
})

  // - -- - -----------------------------------------------------//
   function SortAscendingReviews(Hotels1 ,Hotels2){
     return Hotels1.reviews - Hotels2.reviews
   }
   
     function  SortDesecendingReviews(Hotels1,Hotel2){
       return Hotel2.reviews - Hotels1.reviews
     }
function GetSortReviews(hotelcopy,reviews){
  if(reviews == "least-to-most"){
    return hotelcopy.sort(SortAscendingReviews)
  }else{
    return hotelcopy.sort(SortDesecendingReviews)
  }
}

 app.get('/hotels/sort/reviews',(req,res)=>{
   let reviews =req.query.reviews;
   let hotelcopy=hotels.slice();
   let result = GetSortReviews(hotelcopy,reviews)
   res.json({ hotels: result })
 })

    // - -- - -----------------------------------------------------//

    function filterByCountry(hotelobj,country){
        return hotelobj.country === country;
    }

  app.get('/hotels/filter/country' ,(req,res)=>{
    let country =req.query.country;
    let result =  hotels.filter((hotelobj) =>filterByCountry(hotelobj,country))  ;
    res.json({hotels: result})
  })

   // - -- - -----------------------------------------------------//
     function filterByAmenity(hotelsobj,amenity){
       return hotelsobj.amenity === amenity
     }

  app.get('/hotels/filter/amenity' ,(req,res)=>{
    let amenity = req.query.amenity;
    let result = hotels.filter((hotelsobj) => filterByAmenity(hotelsobj,amenity)) 
    res.json({hotels: result})
  })


   // - -- - -----------------------------------------------------//
    function filterByCategory(hotelsobj,category){
      return hotelsobj.category === category
    }
   
  app.get('/hotels/filter/category',(req,res)=>{
    let category = req.query.category;
    let result = hotels.filter((hotelsobj) => filterByCategory(hotelsobj,category))
    res.json({hotels : result})
  })

    // - -- - -----------------------------------------------------//
   app.get('/hotels',(req,res)=>{
     res.json({hotels:hotels})
   })
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});