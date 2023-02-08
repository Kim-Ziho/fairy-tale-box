import WebFont from 'webfontloader';
import { Text } from "./text.js";

class App {
  constructor() {

    WebFont.load({
      google: {
        families: ['Hind:700'],
      },
      fontactive: () => {
        this.Text = new Text();
        this.Text.setText(
          'A',
          2,
          document.body.clientWidth,
          document.body.clientHeight,
        );
      },
    });
  }
}

window.onload = () => {
  new App();
};

export default App;