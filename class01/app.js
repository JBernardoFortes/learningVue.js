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
            titles: ['The Final Empire', 'The Well of Ascension','The Hero of Ages'],
            author: 'Brandson Sanderson'
         }
         
      }

   },
   methods: { 
      changeTitle() { 
         this.current >= 2? this.current = 0: this.current += 1
      },
      showInfo() { 
         this.show = !this.show;
      }
   }

});

app.mount('#app');
