import { shallowMount } from '@vue/test-utils'
import Contador from '@/components/Contador.vue'
import { describe, it, expect, test } from 'vitest'

describe('Componente Contador.vue', () => {
  test('Validación de match con el snapshot', () => {
    //Selección el Sujeto de pruebas
    const wrapper = shallowMount(Contador)
    //Aserción
    expect(wrapper.html()).toMatchSnapshot()
  })
})

// funcionalidad de incremento y decremento del contador

describe('Componente Contador.vue', () => {
  test('Incrementar en 1 el valor del contador', async () => {
    const wrapper = shallowMount(Contador)
    const botonIncrementar = wrapper.find('button')
    botonIncrementar.trigger('click')
    const valor = wrapper.find('.incrementar').text()
    expect(valor).toBe('+1')
  })
})

describe('Componente Contador.vue', () => {
  test('Disminuir en 1 el valor del contador', async () => {
    const wrapper = shallowMount(Contador)
    const botonDisminuir = wrapper.find('button')
    botonDisminuir.trigger('click')
    const valor = wrapper.find('.disminuir').text()
    expect(valor).toBe('-1')
  })
})

// Verificar que se reciba un valor inicial en el contador

describe('Componente Contador.vue', () => {
  test('Valor inicial del contador es 0', () => {
    const wrapper = shallowMount(Contador)
    const valor = wrapper.find('.counter').text()
    expect(valor).toBe('0')
  })
})
