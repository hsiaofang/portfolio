<template>
  <section>
    <HomeBanner />
    <AboutMe />
  </section>
</template>

<script lang="ts" setup>

import AboutMe from "../components/home/AboutMe.vue";
import HomeBanner from "../components/home/HomeBanner.vue";
import { useHead } from "#imports";

useHead({
  title: "Zoe 的作品集",
  htmlAttrs: { lang: "zh-TW" },
  meta: [
    {
      name: "description",
      content: "歡迎來到 Zoe 的作品集！這裡展示了我的作品、技能和聯絡方式。",
    },
    {
      property: "og:title",
      content: "Zoe 的作品集",
    },
    {
      property: "og:description",
      content: "歡迎來到 Zoe 的作品集！這裡展示了我的作品、技能和聯絡方式。",
    },
    {
      property: "og:url",
      content: "https://你的網站網址.com",
    },
    {
      property: "og:image",
      content: "https://你的網站網址.com/logo.png",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      name: "keywords",
      content: "Zoe, 作品集, 個人網站, Zoe 的作品集",
    },
  ],
});
</script>
