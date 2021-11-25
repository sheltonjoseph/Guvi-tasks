// import { createConnection } from "./index.js";
import {client} from "./index.js";
 async function updatemoviedetail(name, request) {
  // const client = await createConnection();
  const result = await client
    .db("moviedata")
    .collection("movies")
    .updateOne({ name: name }, { $set: request.body });
  console.log(result);
  // to see it in postman
  const movie = await client
    .db("moviedata")
    .collection("movies")
    .findOne({ name: name });
  console.log(movie);
  return movie;
}


async function querylangrating(filter) {
  // const client = await createConnection();
  const movies = await client
    .db("moviedata")
    .collection("movies")
    .find(filter)
    .toArray();
  console.log(movies);
  return movies;
}

async function getmoviebyid(id) {
  // const client = await createConnection();
  const movie = await client
    .db("moviedata")
    .collection("movies")
    .findOne({ id: id });
  console.log(movie);
  return movie;
}

async function createmovie(data) {
  // const client = await createConnection();
  console.log(data);
  const result = await client
    .db("moviedata")
    .collection("movies")
    .insertMany(data);
  return result;
}

async function deletemoviebyid(id) {
  // const client = await createConnection();
  const movie = await client
    .db("moviedata")
    .collection("movies")
    .deleteOne({ id: id });
  console.log(movie);
  return movie;
}

export{
  updatemoviedetail,
  querylangrating,
  getmoviebyid,
  createmovie,
  deletemoviebyid,

};