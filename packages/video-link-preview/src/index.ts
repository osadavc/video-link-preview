import basicTemplate from "./templates/basic";
import getElement from "./utils/getElement";

const videoLinkPreview = (el: string | HTMLElement) => {
  const element = getElement(el);

  if (!element || !element.hasAttribute("href")) {
    return console.log("No element or no href attribute");
  }

  const domElement = document.createElement("div");

  domElement.innerHTML = basicTemplate(element.getAttribute("href")!);
  document.body.insertAdjacentElement("afterbegin", domElement);

  const popup = document.querySelector<HTMLElement>(".link-popup-wrapper")!;
  popup.style.opacity = "0";

  const video = popup.querySelector<HTMLVideoElement>(".vlp-video")!;

  element?.addEventListener("mouseenter", () => {
    const rect = element?.getBoundingClientRect();

    video.play();
    popup.style.opacity = "1";
    popup.style.top = `${rect!.top + window.scrollY + rect!.height + 10}px`;
    popup.style.left = `${rect!.left}px`;
  });

  element?.addEventListener("mouseleave", () => {
    video.pause();
    popup.style.opacity = "0";
  });
};

export { videoLinkPreview };
