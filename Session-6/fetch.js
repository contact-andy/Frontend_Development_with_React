//fetch
// url : https://api.sampleapis.com/avatar/info

let url = "https://api.sampleapis.com/avatar/info";
// const getMovies = async () => {
//   let listOfMovies = await fetch(url);
//   console.log(listOfMovies.json());
// };

const getMovies = () => {
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      console.log(data[0].creators[0].name);
    })
    .catch((error) => {
      console.log(error);
    });
};
getMovies();
console.log("Just working");
