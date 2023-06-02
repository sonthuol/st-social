import React from "react";
import "./posts.scss";
import Post from "../post/Post";

const Posts = () => {
  // TEMPORARY

  const posts = [
    {
      id: 1,
      name: "Thuỳ Tiên",
      userId: 1,
      profilePic:
        "https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/241202022_138012718563022_1115319494027379234_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=BfWSbT6a1-gAX8Ix7Bx&_nc_ht=scontent.fsgn2-5.fna&oh=00_AfCxnwlGxjt5eHfIIi1SxCN_TF_M9V-uMQ3KGq02RwAJ4w&oe=647FA971",
      desc: "Đáng yêu hông ạ 💋♥️",
      img: "https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/350957694_953366232451109_150064709347339723_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=JU95QXxUxw8AX_srjj1&_nc_ht=scontent.fsgn2-5.fna&oh=00_AfCMl8XKtLUnLkGIQ7xQLDkICsWwfz2oRql4e0TQ1kfOsw&oe=647E6D6A",
    },
    {
      id: 2,
      name: "Nguyễn Chế Huỳnh Như",
      userId: "2",
      profilePic:
        "https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/346449811_946755033176020_2949480601573452192_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=gwtpeYrcincAX9ial90&_nc_ht=scontent.fsgn2-4.fna&oh=00_AfCDwx0dGBbdAvi41zM_0wXLxWuzqlpqeZB_AS8slm5ziA&oe=647F84DD",
      desc: "Embe chỉ biết uống nước ngọt thôi😍",
      img: "https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-6/350534485_1221760248507398_3484321707244851719_n.jpg?stp=dst-jpg_s1080x2048&_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=MB1HVsm8cYEAX-ZbONb&_nc_ht=scontent.fsgn2-9.fna&oh=00_AfDMNwY7h4j_U0TwS0R8Zi-na2CGhFwLSY5lMFAAjKmuaA&oe=647EF890",
    },
    {
      id: 2,
      name: "Nguyễn Chế Huỳnh Như",
      userId: "2",
      profilePic:
        "https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/346449811_946755033176020_2949480601573452192_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=gwtpeYrcincAX9ial90&_nc_ht=scontent.fsgn2-4.fna&oh=00_AfCDwx0dGBbdAvi41zM_0wXLxWuzqlpqeZB_AS8slm5ziA&oe=647F84DD",
      desc: "Embe chỉ biết uống nước ngọt thôi😍",
      img: "https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/346449811_946755033176020_2949480601573452192_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=gwtpeYrcincAX9ial90&_nc_ht=scontent.fsgn2-4.fna&oh=00_AfCDwx0dGBbdAvi41zM_0wXLxWuzqlpqeZB_AS8slm5ziA&oe=647F84DD",
    },
  ];

  return (
    <div className="posts">
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
};

export default Posts;
