const app = Vue.createApp({
  data() {
    return {
      books: [
        {
          title: "O Império Final",
          author: "Brandon Sanderson",
          img: "../image/book/mistborn-TFE.jpg",
          isFav: false,
        },
        {
          title: "O Poço da Ascensão",
          author: "Brandon Sanderson",
          img: "../image/book/mistborn-TWOA.jpg",
          isFav: false,
        },
        {
          title: "O Herói das Eras",
          author: "Brandon Sanderson",
          img: "../image/book/mistborn-THOA.jpg",
          isFav: false,
        },
      ],
    };
  },
  methods: {
    favorite(book) {
      console.log(this)
      console.log(book)
      console.log(book.isFav)
      book.isFav = !book.isFav
    },
  },
});

app.mount("#app");
