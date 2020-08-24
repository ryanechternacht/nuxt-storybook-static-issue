import Vuex from 'vuex'
import TestComponent from '@/components/TestComponent'

export default {
  title: 'Image Test'
}

export const component = () => ({
  components: { TestComponent },
  template: '<test-component />'
})
