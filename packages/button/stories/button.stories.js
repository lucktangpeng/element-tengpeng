import TpButton from '../'

export default {
  title: 'TpButton',
  component: TpButton
}

export const Text = () => ({
  components: { TpButton },
  template: '<tp-button>123</tp-button>'
})