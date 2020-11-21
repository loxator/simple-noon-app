const PostFooter = ({ description, noOfLikes, comments }) => (
  <div className="footer-container">
    <i className="far fa-heart"></i> {noOfLikes} likes
    <p>{description}</p>
    <p className="footer-hashtags">#random #links #and #tags #here</p>
    <p className="footer-comments">View {comments} comments</p>
    <style jsx>{`
      .footer-container {
        padding-top: 5%;
        background-color: #red;
      }
      .footer-comments {
        color: grey;
        font-size: 12px;
        cursor: pointer;
      }
      .footer-hashtags {
        color: #4392f1;
        cursor: pointer;
      }
    `}</style>
  </div>
);

export default PostFooter;
