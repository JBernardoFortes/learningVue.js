const app = Vue.createApp({
  data() {
    return {
      numbers: [0, 0, 0, 0, 0, 0, 0, 0],
      isSorted: false,
      entrada: null,
      saida: "",
    };
  },
  methods: {
    // isSorted(array) {
    //   for (let i = 0; i < array.length - 1; i++) {
    //     if (array[i] > array[i + 1]) {
    //       return false;
    //     }
    //   }
    //   return true;
    // },

    intSearch() {
      let x = 0;
      if (this.entrada >= 100) {
        x = Math.floor(this.entrada / 10);
      } else {
        x = this.entrada;
      }

      for (let i = 0; i < this.numbers.length; i++) {
        if (x == this.numbers[i]) {
          this.saida = `Número encontrado na posição ${i + 1}`;
          return;
        }
      }
      this.saida = `Número não encontrado`;
    },
    binSearch(array) {
      if(this.isSorted != true) { 
        this.saida = `Ordene o array antes de fazer uma busca binária`
        return;
      }
      let x;
      if (this.entrada >= 100) {
        x = Math.floor(this.entrada / 10);
      } else {
        x = this.entrada;
      }
      // Jeito interativo

      let low = 0;
      let high = array.length;
      let mid2;
      while (low <= high) {
        mid2 = Math.floor((low + high) / 2);
        if (array[mid2] == x) {
          this.saida = `Número encontrado na posição ${mid2 + 1}`;
          return;
        }
        if (x > array[mid2]) {
          low = mid2 + 1;
        } else if (x < array[mid2]) {
          high = mid2 - 1;
        }
      }
      this.saida = `Número não encontrado`;
    },
    callMergeSort() {
      if (this.isSorted == true) {
        this.alert();
        return;
      }
      this.mergeSort(this.numbers);
      this.isSorted = true;
    },
    callQuickSort() {
      if (this.isSorted == true) {
        this.alert();
        return;
      }
      this.quickSort(this.numbers, 0, this.numbers.length - 1);
      this.isSorted = true;
    },
    alert() {
      window.alert("A lista já está ordenada");
    },
    fillArray(x) {
      for (let i = 0; i < x; i++) {
        this.numbers[i] = Math.floor(Math.random() * 100);
      }
      this.isSorted = false;
    },
    bubbleSort() {
      if (this.isSorted == true) {
        this.alert();
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
      this.isSorted = true;
    },
    insertionSort() {
      if (this.isSorted == true) {
        this.alert();

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
      this.isSorted = true;
    },
    selectionSort() {
      if (this.isSorted == true) {
        this.alert();

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
      this.isSorted = true;
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
    partition(array, start, end) {
      //Achar o lugar do pivot
      let pivot = array[end];
      let i = start - 1;
      for (let j = start; j <= end - 1; j++) {
        if (array[j] <= pivot) {
          // Elemento menor = troca
          i += 1;
          let aux = array[i];
          array[i] = array[j];
          array[j] = aux;
        }
      }
      i += 1;
      aux = array[i];
      array[i] = array[end];
      array[end] = aux;

      return i; // Indice do pivot
    },
    quickSort(array, start, end) {
      if (end <= start) {
        return;
      }
      let pivot = this.partition(array, start, end); // Achar o indice do pivot
      this.quickSort(array, start, pivot - 1); //Como o pivot ta no lugar certo, não considerar ele
      this.quickSort(array, pivot + 1, end);
      this.isSorted = true;
    },
  },
});

app.mount("#app");
