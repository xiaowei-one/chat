import { createSSRApp } from "vue";
import App from "./App.vue";
import {
  Tabbar,
  TabbarItem,
  NavBar,
  Image as VanImage,
  Empty,
} from 'vant';
import 'vant/lib/index.css';
import './style.css';

export function createApp() {
  const app = createSSRApp(App);
  app.use(Tabbar);
  app.use(TabbarItem);
  app.use(NavBar);
  app.use(VanImage);
  app.use(Empty);
  return {
    app,
  };
}
