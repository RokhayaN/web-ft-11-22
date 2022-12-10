console.log("hello");
const joe = "joe";

const doggopics = [
  "https://images.unsplash.com/photo-1616567214738-22fc0c6332b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  "https://images.unsplash.com/photo-1616567214738-22fc0c6332b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  "https://images.unsplash.com/photo-1616567214738-22fc0c6332b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
];

const mainContainer = document.querySelector(".mainContainer");
console.log(mainContainer);

const dogPics = [
  "https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=767&q=80",
  "https://images.unsplash.com/photo-1605725657590-b2cf0d31b1a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  "https://images.unsplash.com/photo-1613656741959-70b2eaeb6db8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=662&q=80",
];
for (const dog of dogPics) {
  // all of your creation goes here
  const img = document.createElement("img");
  const header = document.createElement("h2");
  const paragraph = document.createElement("p");
  const button = document.createElement("button");
  const dogContainer = document.createElement("div");

  img.src = dog;
  img.classList = "dogPic";
  dogContainer.classList = "dogCard";

  header.innerText = "Joe";

  button.innerText = "🔥";
  const clickConsole = () => {
    console.log("click");
  };
  button.addEventListener("click", () => clickConsole());

  paragraph.innerText = "This is how joe would look like in dog form";

  dogContainer.append(img, header, paragraph, button);
  mainContainer.append(dogContainer);
}

mainContainer.append();