const PostsTemplate = (state) => {
  return `
  ${state.posts
    .map(
      (post) => `
    <li>
      <div class="article">
        <h3>${post.title}</h3>
        <p>${post.text}</p>
      </div>
    </li>`
    )
    .join("")}
`;
};

export default PostsTemplate;
