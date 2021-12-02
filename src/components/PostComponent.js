import Component from "../../lib/Component.js";

//Import Component Template
import PostsTemplate from "../templates/PostTemplate.js";

const PostsComponent = new Component(
  "posts",
  {
    posts: [
      {
        title: "My first blog post",
        text: "This is my first blog post EVER, its awesome!",
      },
      {
        title: "Writing my own component library",
        text: "In this article I want to share with you my experience on how to write a component library!",
      },
    ],
  },
  PostsTemplate
);

export default PostsComponent;
