const app = Vue.createApp({
  data() {
    return {
      countEnter: 0,
      countLeave: 0,
      countDb: 1,
      offsetX: 0,
      offsetY: 0
      
    };
  },
  methods: {
    mouseEnter(e) {
      this.countEnter += 1;
    },
    mouseLeave(e) {
      this.countLeave -= 1;
    },
    mouseDb(e) {
      this.countDb *= 2;
    },
    mouseMove(e) { 
      this.offsetX = e.offsetX;
      this.offsetY = e.offsetY;
   }
  },
});

app.mount("#app");
