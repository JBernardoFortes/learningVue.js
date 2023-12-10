// const span = [...document.getElementsByTagName('span')]
// console.log(span)
// let count = 0;
// span.forEach((s) => {
//    s.addEventListener('click', () => {
//      s.innerText += ` ${count}`;
//    })
// })

const app = Vue.createApp({
  //template: `<h3> Cacete <h3>`
  data() {
    return {
      show: true,
      count: 0,
      current: 0,

      book: {
        titles: [
          "The Final Empire",
          "The Well of Ascension",
          "The Hero of Ages",
          "Lord of The Rings - The Fellowship of the ring",
        ],
        author: [
          "Brandson Sanderson",
          "Brandson Sanderson",
          "Brandson Sanderson",
          "Tolkien",
        ],
        imageSrc: ["../image/book/mistborn-TFE.jpg",
         "../image/book/mistborn-TWOA.jpg",
         "../image/book/mistborn-THOA.jpg",
         "../image/book/lotr-fellowship.jpg"],
      },
    };
  },
  methods: {
    changeTitle() {
      this.current >= 3 ? (this.current = 0) : (this.current += 1);
    },
    showInfo() {
      this.show = !this.show;
    },
  },
});

app.mount("#app");
