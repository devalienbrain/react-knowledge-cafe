const Blog = ({ blog }) => {
  // console.log(blog);
  const { cover, id, title, author_img } = blog;
  return (
    <div>
      <img src={cover} alt="" />
    </div>
  );
};

export default Blog;
