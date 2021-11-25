import express, { response } from "express";
import{ MongoClient } from "mongodb";
import dotenv from "dotenv";
 
import { movieRouter } from "./routes/movie.js";

dotenv.config();

// console.log(process.env);

const app = express();

app.use(express.json());
// const movies = [
//   {
    
//     id: "101",
//     name: "No Country for Old Men",
//     poster: "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
//     rating: 8.1,
//     summary: "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money.",
//     trailer: "https://www.youtube.com/embed/38A__WT3-o0"
//   },
//   {
    
//     id: "102",
//     name: "Jai Bhim",
//     poster: "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
//     summary: "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
//     rating: 8.8,
//     trailer: "https://www.youtube.com/embed/nnXpbTFrqXA"
//   },
//   {
    
//     id: "103",
//     name: "The Avengers",
//     rating: 8.2,
//     summary: "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
//     poster: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
//     trailer: "https://www.youtube.com/embed/eOrNdBpGMv8"
//   },
   
//     {
      
//       id: "105",
//       name: "Baahubali",
//       poster: "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
//       rating: 8,
//       summary: "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.",
//       trailer: "https://www.youtube.com/embed/sOEg_YZQsTI"
//     }
//   ];

  
const PORT = 9000;

const MONGO_URL ="mongodb://localhost";
// const MONGO_URL= process.env.MONGO_URL;

 async function createConnection(){
  const client = new MongoClient(MONGO_URL);
  await client.connect();
  console.log("mongodb is connected");
 
 
  return client;
  

}
export const client = await createConnection();
// createConnection();

app.get('/',(request, response) => {
    response.send("hello,🌍");
})

app.use('/movies',movieRouter)
// app.use('/users',useRouter)

   
app.listen(PORT ,()=>console.log("The APP Succesfully started in LocalHost",PORT));


