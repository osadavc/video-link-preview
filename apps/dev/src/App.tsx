import { Component, onMount } from "solid-js";
import { videoLinkPreview } from "video-link-preview";

import logo from "./logo.svg";
import styles from "./App.module.css";

const App: Component = () => {
  let videoLink: HTMLAnchorElement;

  onMount(() => {
    if (videoLink) {
      videoLinkPreview(videoLink);
    }
  });

  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          class={styles.link}
          href="https://www.w3schools.com/tags/movie.mp4"
          target="_blank"
          rel="noopener noreferrer"
          ref={(el) => (videoLink = el)}
        >
          Learn Solid
        </a>
      </header>
    </div>
  );
};

export default App;
