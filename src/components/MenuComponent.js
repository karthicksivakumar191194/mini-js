import Component from "../../lib/Component.js";

//Import Component Template
import MenuTemplate from "../templates/MenuTemplate.js";

const MenuComponent = new Component(
  "menu",
  {
    name: "Jakob",
  },
  MenuTemplate
);

export default MenuComponent;
