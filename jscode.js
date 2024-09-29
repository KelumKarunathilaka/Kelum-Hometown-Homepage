var images;


images = ['https://www.thewowstyle.com/wp-content/uploads/2015/01/nature-images..jpg', 'https://thewowstyle.com/wp-content/uploads/2015/01/nature-images-6.jpg', 'https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_640.jpg'];

let element_image = document.getElementById('image');
element_image.setAttribute("src", images[0]);


document.getElementById('next_image').addEventListener('click', (event) => {
  let element_image2 = document.getElementById('image');
  images.push(images[0]);
  images.shift();
  let element_image3 = document.getElementById('image');
  element_image3.setAttribute("src", images[0]);

});

document.getElementById('previous_image').addEventListener('click', (event) => {
  let element_image4 = document.getElementById('image');
  images.push(images[0]);
  images.shift();
  let element_image5 = document.getElementById('image');
  element_image5.setAttribute("src", images[0]);

});