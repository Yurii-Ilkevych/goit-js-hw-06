const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryEl = document.querySelector(".gallery");

// ********************** Version one ***********************
const createGAllery = ({ url, alt }) => {
  const liTag = document.createElement("li");
  const imgTag = document.createElement("img");
  imgTag.src = url;
  imgTag.alt = alt;
  imgTag.width = 680;
  liTag.append(imgTag);
  return liTag;
};

const el = images.map(createGAllery);
galleryEl.append(...el);

// ********************** Version two ***********************
// images.forEach( function (image) {
//  const listLiImage = document.createElement("li")
// const ImageEl = document.createElement("img");
// ImageEl.src = image.url;
// ImageEl.alt = image.alt;
// ImageEl.width = 480;
// listLiImage.append(ImageEl)
// galleryEl.append(listLiImage)
//  });
//********************** or ***********************
// const elements = images.map( (image) => {
//   const listLiImage = document.createElement("li")
// const ImageEl = document.createElement("img");
// ImageEl.src = image.url;
// ImageEl.alt = image.alt;
// ImageEl.width = 480;
// listLiImage.append(ImageEl)
// return listLiImage;
// })
// galleryEl.append(...elements)

//********************** Version three ***********************
// images.forEach( function (image) {

//   const addimagesTeg = `<li><img src="${image.url}" alt="${image.alt}" ></li>`

//  galleryEl.innerHTML += addimagesTeg;

// });

// ********************** Version four ***********************
// images.forEach( function (image) {
//   const markingImages = `<li><img src="${image.url}" alt="${image.alt}" ></li>`
//   galleryEl.insertAdjacentHTML("beforeend", markingImages)
//  });

galleryEl.style.display = "flex";
galleryEl.style.columnGap = "100px";
galleryEl.style.listStyle = "none";
