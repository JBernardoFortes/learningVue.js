const app = Vue.createApp({
  components: {},
  data() {
    return {
      stars: [0, 1, 2, 3, 4],
      active: -1,
      book: {
        title: "Nascidos da Bruma: O Império Final",
        img: "../image/book/mistborn-TFE.jpg",
      },
      show: true,
    };
  },
  methods: {
    printMode() {
      this.show = !this.show;
    },
    activeColor(itemIndex) {
      const starC = [...document.getElementsByClassName("item")];
      // const starC = [...document.getElementsByClassName("item")][itemIndex];
      // const starImg = [...starC.getElementsByTagName("img")][0];
      for (let i = 0; i <= itemIndex; i++) {
        let starImg = starC[i].getElementsByTagName("img")[0];
        starImg.style.filter = "none";
      }

      // starImg.style.filter = "none";
    },
    desactiveColor(itemIndex) {
      const starC = [...document.getElementsByClassName("item")];
      // const starC = [...document.getElementsByClassName("item")][itemIndex];
      // const starImg = [...starC.getElementsByTagName("img")][0];
      for (let i = 0; i <= itemIndex; i++) {
        if (itemIndex <= this.active) {
          continue;
        }
        let starImg = starC[i].getElementsByTagName("img")[0];
        starImg.style.filter = "grayscale()";
        this.activeColor(this.active);
      }

      // starImg.style.filter = "grayscale()";
    },
    activeStar(itemIndex) {
      if (this.active == itemIndex) {
        this.active = -1;
      } else {
        this.active = itemIndex;
      }
      const starC = [...document.getElementsByClassName("item")];
      for (let i = 0; i <= itemIndex; i++) {
        let starImg = starC[i].getElementsByTagName("img")[0];
        starImg.style.filter = "none";
      }
      let starImgs = [];
      starC.forEach((star) => {
        starImgs.push(star.getElementsByTagName("img")[0]);
      });
      starImgs.forEach((star, index) => {
        if (index <= this.active) {
          // Ativado
          star.style.filter = "none";
        } else {
          // Desativado
          star.style.filter = "grayscale()";
        }
      });
    },
  },
});
app.mount("#app");
