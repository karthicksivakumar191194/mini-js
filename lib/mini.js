class Mini {
  constructor(selector) {
    this.rootElement = document.querySelector(`${selector}`);
    this.components = {};
    console.info("App Started... Mini initialized!");
  }

  registerComponent(component) {
    this.components[component.name] = component;
    this.updateView();
  }

  updateView() {
    if (this.components) {
      let mergedViews = "";
      Object.keys(this.components).forEach((key) => {
        mergedViews += this.components[key].view();
      });
      this.rootElement.innerHTML = mergedViews;
    }
  }
}
export default Mini;
