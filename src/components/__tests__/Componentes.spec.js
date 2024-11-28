import { describe, test, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'
import Contador from '@/components/Contador.vue'

// validar mediante pruebas unitarias la existencia de componentes que controlen cada una de las vistas.
describe('Contador', () => {
  test('Probando la existencia del componente o vista Contador', async () => {
    const router = createRouter({
      history: createWebHistory(),
      routes: [
        {
          path: '/contador',
          name: 'Contador',
          component: Contador,
        },
      ],
    })

    router.push('/contador')
    await router.isReady()

    const wrapper = mount(Contador, {
      global: {
        plugins: [router],
      },
    })

    expect(wrapper.findComponent(Contador).exists()).toBe(true)
  })
})
