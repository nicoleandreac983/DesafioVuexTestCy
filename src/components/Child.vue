<script>
export default {
  name: 'Child',
  data() {
    return {
      mensajeEscrito: '', // Variable para almacenar el mensaje escrito
    }
  },
  methods: {
    enviarMensaje() {
      // Emitimos el mensaje al padre
      this.$emit('childMensaje', this.mensajeEscrito)
      this.mensajeEscrito = '' // Limpiamos el campo de texto después de enviarlo
    },
  },
}
</script>

<template>
  <div>
    <h1>Componente del hijo</h1>
    <input class="input" type="text" v-model="mensajeEscrito" placeholder="Escribe algo" />
    <button class="btn primary" @click="enviarMensaje">Enviar</button>
  </div>
</template>
