const MenuTemplate = (state) => {
  return `
    <header>
      <h1>
        <a href="#/posts">${state.name}'s Blog</a>
      </h1>
    </header>
  `;
};

export default MenuTemplate;
