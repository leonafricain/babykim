export const state = () => ({
  collapsed: true
})

export const mutations = {
  setCollapsed(state) {
    state.collapsed = !state.collapsed
  }
}