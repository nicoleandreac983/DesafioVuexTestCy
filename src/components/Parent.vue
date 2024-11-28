<script>
import Child from '@/components/Child.vue'

export default {
  name: 'Padre',
  components: {
    Child,
  },
  data() {
    return {
      mensajeRecibidoChild: '', // Variable para almacenar el mensaje recibido
    }
  },
  methods: {
    actualizarMensaje(mensajeEscrito) {
      this.mensajeRecibidoChild = mensajeEscrito // Almacena el mensaje recibido desde el hijo
    },
  },
}
</script>

<template>
  <div>
    <h1>Componente del padre</h1>
    <p>Mensaje recibido desde el hijo: {{ mensajeRecibidoChild }}</p>
    <Child @childMensaje="actualizarMensaje" />
  </div>
</template>
