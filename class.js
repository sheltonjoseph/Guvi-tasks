class movie{
    constructor(title,studio,rating){
        this.title = title;
        this.studio =studio;
        this.rating = rating;
    }
    movie_title(){
        return`the movie name is${this.title}`;
    }
    movie_studio(){
        return`the studio name is ${this.studio}`;

    }
    movie_rating(){
        return`the rating is ${this.rating}`;
    }
}
// instance of movie class
let obj = new movie("Casino royal","Eon Productions","PG13");
console.log(obj);
console.log(obj.movie_title());
console.log(obj.movie_studio());
console.log(obj.movie_rating());



// class person{
//     constructor(name,age,work,nationality){
//         this.name = name;
//         this.age = age;
//         this.work = work;
//         this.nationality = nationality;
//     }
//     person_name(){
//         return`the  name is${this.name}`;
//     }
//     person_age(){
//         return`the age is ${this.age}`;

//     }
//     person_work(){
//         return`the work is ${this.work}`;
//     }
//     person_nationality(){
//         return`the nationality is ${this.nationality}`; 
//     }
// }
// // instance of movie class
// let obj = new person("shelton","21","Software Developer","Indian" );
// console.log(obj.person_name());
// console.log(obj.person_age());q!az2WSXDE3XEDC4RF5VTG6BY

// console.log(obj.person_work());
// console.log(obj.person_nationality());
