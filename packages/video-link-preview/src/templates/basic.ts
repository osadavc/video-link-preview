const basicTemplate = (videoLink: string) => {
  return /*html*/ `
   <style>
    .link-popup-wrapper {
      border: none;
      padding: 10px;
      background: white;
      box-shadow: 0px 5px 15px rgba(101, 101, 110, 0.3);
      border-radius: 6px;
      font-family: inherit;
      font-weight: normal;
      position:absolute;
      transition: all 0.3s ease-in-out;
    }
  </style>

  <div class="link-popup-wrapper">
    <video class="vlp-video" muted src="${videoLink}"></video>
  </div>
`;
};

export default basicTemplate;
