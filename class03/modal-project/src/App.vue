<template>
  <button @click="toggleModal()" :class='{sale:this.modalTheme === "sale"}'>Show Modal 01</button>
  <button @click="toggleModal2()" :class='{sale : this.modalTheme === "sale"}'>Show Modal 02</button>
  <button @click="changeTheme()" :class="{sale : this.modalTheme === 'sale'}">&#8486;</button>

  <transition name="fade" mode="out-in">
    <Message
      v-if="this.showModal"
      @hide="toggleModal()"
      :theme="this.modalTheme"
    >
      <template v-slot:links>
        <a href="#">Link01</a>
        <a href="#">Link02</a>
      </template>
      <h1>
        <span> {{ this.modalTitle }}</span>
      </h1>
      <h3>
        <span> {{ this.modalMessage }} </span>
      </h3>
    </Message>
  </transition>
  <transition name="fade" mode="out-in">
    <Message
      v-if="this.showModal2"
      @hide="toggleModal2()"
      :theme="this.modalTheme"
    >
      <!-- pique login -->
      <h2 class="loginTitle">Login</h2>
      <h4 class="loginName">Name:</h4>
      <h4 class="loginPass">Password:</h4>
      <input
        type="text"
        class="inputModal"
        id="loginName"
        placeholder="Type your name "
      />
      <input
        type="password"
        class="inputModal"
        id="loginPass"
        placeholder="Type your password"
      />
      <template v-slot:buttons>
        <button class='button' @click='submit()'>Sign in</button>
        <button class='button' @click="submit()">Sign up</button>
      </template>
    </Message>
  </transition>
</template>

<script>
import Message from "./components/Message.vue";
export default {
  name: "app",
  components: {
    Message,
  },
  data() {
    return {
      showModal: false,
      showModal2: false,
      modalTitle: "TITTLE",
      modalMessage: "MESSAGE",
      modalTheme: "sale",
    };
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
      const body = [...document.getElementsByTagName("body")][0];
      body.classList.contains("modalActive")
        ? body.classList.remove("modalActive")
        : body.classList.add("modalActive");
    },
    submit() { 
      const inputs = [...document.getElementsByClassName('inputModal')];
      inputs.forEach( input => { 
        input.value = '';

      })
      
    },
    toggleModal2() {
      this.showModal2 = !this.showModal2;
      const body = [...document.getElementsByTagName("body")][0];
      body.classList.contains("modalActive")
        ? body.classList.remove("modalActive")
        : body.classList.add("modalActive");
    },
    changeTheme() {
      this.modalTheme === "sale"
        ? (this.modalTheme = "standard")
        : (this.modalTheme = "sale");
    },
  },
};

// import Modal from './components/Modal.vue'
// export default {
//   name: 'app',
//   components: {

//   }, data() {
//     return {

//     }
//   }, methods: {
//     // toggleComponent() {
//     //   this.showModal = !this.showModal;
//     // }

//   }
// }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
