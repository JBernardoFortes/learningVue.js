<template>
  <ul class="stars" id="teste">
    <li
      class="star"
      v-for="star in this.stars"
      @mouseenter="this.activeColor(star)"
      @mouseleave="this.desactiveColor(star)"
      @click="activeStar(star)"
    >
      <img
        src="../assets/images/star.png"
        class="starImg filter dropShadow"
        alt="star"
        :id="star"
      />
    </li>
  </ul>
</template>
<script>
export default {
  name: "Stars",
  data() {
    return {
      stars: [0, 1, 2, 3, 4],
      active: -1,
    };
  },
  methods: {
    activeColor(index) {
      // ativar as estrelas ate o index
      
      const stars = [...document.getElementsByClassName("star")];
      for (let i = 0; i <= index; i++) {
        let star = [...stars[i].getElementsByTagName("img")][0];
        star.classList.remove("filter");
        star.classList.add('filterActive')
      }
    },
    desactiveColor(index) {
      const stars = [...document.getElementsByClassName("star")];
      
      for (let i = 0; i <= index; i++) {
         if (index <= this.active) {
          continue;
        }
        let star = [...stars[i].getElementsByTagName("img")][0];
        star.classList.add("filter");
        star.classList.remove('filterActive')
      }
    },
    activeStar(index) {
      if (this.active == index) {
        this.active = -1;
      } else {
        this.active = index;
      }
      const starC = [...document.getElementsByClassName("star")];
      for (let i = 0; i <= index; i++) {
        let starImg = starC[i].getElementsByTagName("img")[0];
        starImg.classList.remove("filter");
        starImg.classList.add('filterActive');
      }
      let starImgs = [];
      starC.forEach((star) => {
        starImgs.push(star.getElementsByTagName("img")[0]);
      });
      starImgs.forEach((star, index) => {
        if (index <= this.active) {
          // Ativado
          star.classList.remove("filter");
          star.classList.add('filterActive')
        } else {
          // Desativado
          star.classList.add("filter");
          star.classList.remove('filterActive')
        }
      });
    },
    // ==========================================================================================
  },
};
</script>
