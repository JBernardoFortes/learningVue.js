const app = Vue.createApp({
  data() {
    return {
      numbers: [0, 0, 0, 0, 0, 0, 0, 0],
    };
  },
  methods: {
    fillArray(x) {
      for (let i = 0; i < x; i++) {
        this.numbers[i] = Math.floor(Math.random() * 100);
      }
    },
    bubbleSort() {
      if (this.numbers.length == 0) {
        window.alert("Não há números para ordenar");
        return;
      }
      for (let i = 0; i < this.numbers.length; i++) {
        for (let j = 0; j < this.numbers.length; j++) {
          if (this.numbers[i] < this.numbers[j]) {
            let aux = this.numbers[i];
            this.numbers[i] = this.numbers[j];
            this.numbers[j] = aux;
          }
        }
      }
    },
    insertionSort() {
      if (this.numbers.length == 0) {
        window.alert("Não há números para ordenar");
        return;
      }
      for (let i = 1; i < this.numbers.length; i++) {
        let temp = this.numbers[i];
        j = i - 1;

        while (j >= 0 && this.numbers[j] > temp) {
          this.numbers[j + 1] = this.numbers[j];
          j -= 1;
        } // Caso o j chegue no último elemento, ele vai parar no -1
        this.numbers[j + 1] = temp;
      }
    },
    selectionSort() {
      if (this.numbers.length == 0) {
        window.alert("Não há números para ordenar");
        return;
      }

      for (let i = 0; i < this.numbers.length - 1; i++) {
        let min = i;
        for (j = i + 1; j < this.numbers.length; j++) {
          if (this.numbers[j] < this.numbers[min]) {
            min = j;
          }
        }
        let aux = this.numbers[i];
        this.numbers[i] = this.numbers[min];
        this.numbers[min] = aux;
      }
    },
    mergeSort(Arr) {
      if (Arr.length < 2) {
        return Arr;
      }
      let mid = Math.floor(Arr.length / 2);
      let leftArr = [];
      let rightArr = [];

      for (let i = 0; i < Arr.length; i++) {
        if (i < mid) {
          leftArr.push(Arr[i]);
        } else {
          rightArr.push(Arr[i]);
        }
      }
      this.mergeSort(leftArr);
      this.mergeSort(rightArr);
      this.numbers = this.merge(leftArr, rightArr, Arr);
    },
    merge(leftAr, rightAr, Arr) {
      let leftArrLen = leftAr.length;
      let rightArrLen = rightAr.length;
      let i = 0;
      let l = 0;
      let r = 0;

      while (l < leftArrLen && r < rightArrLen) {
        if (leftAr[l] < rightAr[r]) {
          Arr[i] = leftAr[l];
          i += 1;
          l += 1;
        } else {
          Arr[i] = rightAr[r];
          i += 1;
          r += 1;
        }
      }
      while (l < leftArrLen) {
        Arr[i] = leftAr[l];
        i += 1;
        l += 1;
      }
      while (r < rightArrLen) {
        Arr[i] = rightAr[r];
        i += 1;
        r += 1;
      }

      return Arr;
    },
    walk(steps) {
      if (steps == 0) {
        return;
      }
      console.log(steps);
      this.walk(steps - 1);
    },
  },
});

app.mount("#app");