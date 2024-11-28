<template>
  <h2 class="titulo-principal">{{ tituloPorDefecto }}</h2>
  <p class="counter">{{ contador }}</p>

  <div>
    <button class="btn primary incrementar" v-on:click="incrementar">+1</button>
    <button class="btn warning disminuir" v-on:click="disminuir">-1</button>
  </div>
</template>

<script>
export default {
  name: 'Contador',
  props: {
    titulo: String,
    inicio: {
      default: 0, // Define que que el contador empiece en 0
    },
  },

  data() {
    return {
      contador: this.inicio,
    }
  },
  methods: {
    aumentar() {
      return this.contador + this.contador
    },

    incrementar() {
      this.contador++
    },

    disminuir() {
      this.contador--
    },
  },
  computed: {
    // Las propieades computadas se guardan en cache
    aumentarContador() {
      return this.contador * this.contador
    },

    tituloPorDefecto() {
      return this.titulo || 'Contador'
    },
  },
}
</script>

<style>
.btn {
  border-radius: 1rem;
  margin: 0 5px;
  width: 100px;
  padding: 5px;
  font-size: 1rem;
}
.primary {
  background-color: rgb(77, 77, 231);
  color: rgb(255, 255, 255);
}
.counter {
  font-size: 36px;
}

.warning {
  background-color: rgb(230, 53, 53);
  color: rgb(255, 255, 255);
}

.second {
  background-color: rgb(255, 165, 0);
  color: rgb(0, 0, 0);
}
</style>
