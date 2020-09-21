var glide = new Glide(".glide", {
  type: "carousel",
  perView: 5,
  startAt: 0,

  breakpoints: {
    990: {
      perView: 3,
      autoplay: 1500,
      hoverpause: true,
    },
    600: {
      perView: 2,
      autoplay: 1500,
      hoverpause: true,
    },
  },
});

glide.mount();
