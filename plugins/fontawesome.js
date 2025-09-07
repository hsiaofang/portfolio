import { library, config } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faDiscord, faYoutube } from '@fortawesome/free-brands-svg-icons';

// 這行很重要，它會停用 CSS 自動注入，避免在伺服器端渲染時重複載入。
config.autoAddCss = false;

// 將所有需要的圖標加入函式庫中
library.add(faEnvelope, faGithub, faDiscord, faYoutube);

export default defineNuxtPlugin((nuxtApp) => {
  // 將 <font-awesome-icon> 元件全域註冊為 Vue 組件
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon);
});