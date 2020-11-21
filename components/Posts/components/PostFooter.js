const PostFooter = ({ description, noOfLikes }) => (
  <div className="container">
    <i className="far fa-heart"></i> {noOfLikes} likes
    <p>{description}</p>
    <style jsx>{`
      .container {
        padding-top: 5%;
        background-color: #red;
      }
    `}</style>
  </div>
);

export default PostFooter;
