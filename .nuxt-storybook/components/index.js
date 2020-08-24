export { default as Logo } from '../../components/Logo.vue'
export { default as TestComponent } from '../../components/TestComponent.vue'

export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/Logo" */).then(c => c.default || c)
export const LazyTestComponent = import('../../components/TestComponent.vue' /* webpackChunkName: "components/TestComponent" */).then(c => c.default || c)
