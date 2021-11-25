import express from "express";

const router = express.Router();
// query language & rating
router.get('/',async(request, response) => {
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
   });
   
    // to get id
   router.get(`/:id`,async(request, response) => {
       const{id} = request.params;
       const movie = await getmoviebyid(id);
       // const movie = movies.filter((mv)=> mv.id===id);
       response.send(movie?movie:{message:"no matching found"});
   });
     
   
   // create movie
   router.post("/",async(request,response)=>{
     const data = request.body;
     
     const result = await createmovie(data);
   
       response.send(result);
   
   })
       
    // to delete by id
    router.delete(`/:id`,async(request, response) => {
     const{id} = request.params;
     const movie = await deletemoviebyid(id);
     response.send(movie?movie:{message:"no matching found"});
   });
   
   // to update movie rating
   router.put("/",async(request, response) => {
     const{name} = request.query;
     console.log(request.query,request.body);
     const movie = await updatemoviedetail(name, request);
   
     response.send(movie)
   });

   export const movieRouter = router;