import mockPosts from "../../mock/mockPosts";
import mockUsers from "../../mock/mockUsers";
import generateRandom from "../../utils/generateRandomNumber";
const getPosts = async (req, res) => {
  const result = [];

  for (let i = 0; i < mockPosts.length; i++) {
    result.push({
      ...mockPosts[i],
      ...mockUsers[generateRandom(0, 9)],
    });
  }
  res.statusCode = 200;
  res.json(result);
};

export default getPosts;
