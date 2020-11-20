const PostFooter = ({ description }) => (
  <div className="container">
    <i className="far fa-heart"></i> 32 likes
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
