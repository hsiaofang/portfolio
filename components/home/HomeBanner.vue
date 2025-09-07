<template>
  <div class="banner">
    <div>
      <h1 class="title">Zoe 的作品集</h1>
      <h2 class="subtitle">展示我的作品與技能</h2>
    </div>
    <div class="links">
      <a
        target="_blank"
        href="https://github.com/zoe-github"
        aria-label="github link"
      >
        <font-awesome-icon icon="fa-brands fa-github" />
      </a>
      <a
        target="_blank"
        href="https://discord.com/users/你的DiscordID"
        aria-label="discord link"
      >
        <font-awesome-icon icon="fa-brands fa-discord" />
      </a>
      <a
        target="_blank"
        href="mailto:zoe@example.com"
        aria-label="gmail link"
      >
        <font-awesome-icon icon="fa-solid fa-envelope" />
      </a>
      <a
        target="_blank"
        href="https://www.youtube.com/channel/你的YouTube頻道ID"
        aria-label="youtube link"
      >
        <font-awesome-icon icon="fa-brands fa-youtube" />
      </a>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style scoped lang="scss">
.banner {
  background-image: linear-gradient(60deg, #29323c 0%, #415366 100%);
  height: 95vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  .title {
    opacity: 0;
    animation: fade-in 700ms 0s forwards;
    font-weight: bold;
    font-size: calc(2.5rem + 2vw);
    margin: 0rem;
  }

  .subtitle {
    font-weight: 400;
    animation: fade-in 700ms 0.5s forwards;
    font-size: calc(1rem + 1vw);
    margin: 0rem;
    opacity: 0;
  }

  .links {
    animation: fade-in 700ms 1s forwards;
    background-color: #ffffff10;
    border-radius: 1rem;
    backdrop-filter: blur(1rem);
    padding: 1rem;
    display: flex;
    gap: 2rem;
    opacity: 0;
    margin-bottom: 3rem;

    a {
      &:nth-child(1) { animation: fade-in 700ms 1.2s forwards; }
      &:nth-child(2) { animation: fade-in 700ms 1.4s forwards; }
      &:nth-child(3) { animation: fade-in 700ms 1.6s forwards; }
      &:nth-child(4) { animation: fade-in 700ms 1.8s forwards; }
      color: #dfe1e8;
      opacity: 0;
    }

    svg {
      opacity: 0.5;
      font-size: 3rem;
      transition: 300ms;
      &:hover {
        opacity: 1;
        transform: scale(1.1);
      }
    }
  }
}

@keyframes fade-in {
  0% { opacity: 0; transform: translateY(3rem); }
  100% { opacity: 1; }
}
</style>
