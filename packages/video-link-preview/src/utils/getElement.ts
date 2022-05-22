const getElement = (el: string | HTMLElement) => {
  let element = null;

  if (typeof el === "string") {
    const res = document.querySelector(el);
    if (res instanceof HTMLElement) {
      element = res;
    } else {
      console.log(`could not access element ${el}`);
    }
  } else if (el instanceof HTMLElement) {
    element = el;
  } else {
    console.log("unknown element type; must be a string or HTMLElement");
  }

  return element;
};

export default getElement;
