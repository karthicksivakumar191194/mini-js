import Mini from "./lib/mini.js";

//Import App Components
import MenuComponent from "./src/components/MenuComponent.js";
import PostsComponent from "./src/components/PostComponent.js";

const app = new Mini("#app");

// Register our App Components Here
app.registerComponent(MenuComponent);
app.registerComponent(PostsComponent);
