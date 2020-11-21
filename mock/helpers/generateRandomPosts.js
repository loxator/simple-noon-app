//import generateRandom from "../../utils/generateRandomNumber";
const generateRandom = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const NUMBER_OF_POSTS = 50;
const posts = [];

for (let i = 0; i < NUMBER_OF_POSTS; i++) {
  posts.push({
    id: i,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos at ab voluptatibus natus, necessitatibus libero eligendi laudantium quasi, non, totam praesentium! Id quia nisi consectetur delectus ut nulla quaerat quod.",
    title: "Lorem ipsum dolor sit amet.",
    price: generateRandom(50, 1000),
    postImg: `https://picsum.photos/id/${generateRandom(100, 500)}/600`,
    noOfLikes: generateRandom(1, 1000),
    isFavourite: generateRandom(0, 1),
  });

