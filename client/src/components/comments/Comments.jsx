import React, { useContext } from "react";
import "./comments.scss";
import { AuthContext } from "../../context/authContext";

const Comments = () => {
  const { currentUser } = useContext(AuthContext);

  const comments = [
    {
      id: 1,
      name: "Thuỳ Tiên",
      userId: 1,
      profilePic:
        "https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/241202022_138012718563022_1115319494027379234_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=BfWSbT6a1-gAX8Ix7Bx&_nc_ht=scontent.fsgn2-5.fna&oh=00_AfCxnwlGxjt5eHfIIi1SxCN_TF_M9V-uMQ3KGq02RwAJ4w&oe=647FA971",
      desc: "Đáng yêu hông ạ 💋♥️",
    },
    {
      id: 2,
      name: "Nguyễn Chế Huỳnh Như",
      userId: 2,
      profilePic:
        "https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/346449811_946755033176020_2949480601573452192_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=gwtpeYrcincAX9ial90&_nc_ht=scontent.fsgn2-4.fna&oh=00_AfCDwx0dGBbdAvi41zM_0wXLxWuzqlpqeZB_AS8slm5ziA&oe=647F84DD",
      desc: "Embe chỉ biết uống nước ngọt thôi😍",
    },
  ];

  return (
    <div className="comments">
      <div className="write">
        <img src={currentUser.profilePic} alt="" />
        <input type="text" placeholder="Write a comment" />
        <button>Send</button>
      </div>
      {comments.map((comment) => (
        <div className="comment" key={comment.id}>
          <img src={comment.profilePic} alt="" />
          <div className="info">
            <span>{comment.name}</span>
            <p>{comment.desc}</p>
          </div>
          <span className="data">1 hour ago</span>
        </div>
      ))}
    </div>
  );
};

export default Comments;
