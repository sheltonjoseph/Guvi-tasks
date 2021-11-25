import express from "express";
import { updatemoviedetail,
    querylangrating,
    getmoviebyid,
    createmovie,
    deletemoviebyid, } from "../helper.js";
  
const router = express.Router();

// query language & rating
router
.route("/")
.get(async(request, response) => {
    const filter = request.query;
   
   //   let filteredmovies = movies;
   //   if(language){
   //     filteredmovies = filteredmovies.filter((mv)=> mv.language===language);
   //   }
   //     if(rating){
   //       filteredmovies = filteredmovies.filter((mv)=> mv.Rating===+rating);
   // }
   
   if(filter.rating){
     filter.rating = parseInt(filter.rating);
   }
   // console.log(filter);
     const movies = await querylangrating(filter);
   response.send(movies);
   })
   // to update movie rating
   .put(async(request, response) => {
    const{name} = request.query;
    console.log(request.query,request.body);
    const movie = await updatemoviedetail(name, request);
  
    response.send(movie)
  })
     // create movie
     .post(async(request,response)=>{
      const data = request.body;
      
      const result = await createmovie(data);
    
        response.send(result);
    
    });
   
    // to get id
   router
   .route("/:id")
   .get(async(request, response) => {
       const{id} = request.params;
       const movie = await getmoviebyid(id);
       // const movie = movies.filter((mv)=> mv.id===id);
       response.send(movie?movie:{message:"no matching found"});
   })
     // to delete by id
     .delete(async(request, response) => {
      const{id} = request.params;
      const movie = await deletemoviebyid(id);
      response.send(movie?movie:{message:"no matching found"});
    }); 
   

       
   
   
   

   export const movieRouter = router;