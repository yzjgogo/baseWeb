import * as types from '../../types'

const mutations = {
  [types.SET_CLASSICS_READ_SCROLL_LIST](state, payload = {}) {
    const { page, scrollTop, scrollTopPX } = payload
    console.log("看看",page,scrollTop,scrollTopPX)
    if (state.classicsReadScrollList.length === 0) {
      state.classicsReadScrollList.push({
        page: page,
        scrollTop: scrollTop,
        scrollTopPX: scrollTopPX
      })
    } else {
      const findIndex = state.classicsReadScrollList.findIndex(item => item.page === page)
      if (findIndex === -1) {
        // 未找到
        state.classicsReadScrollList.push({
          page: page,
          scrollTop: scrollTop,
          scrollTopPX: scrollTopPX
        })
      } else {
        // 已找到
        state.classicsReadScrollList.splice(findIndex, 1, {
          page: page,
          scrollTop: scrollTop,
          scrollTopPX: scrollTopPX
        })
      }
    }
  }
}

export default mutations
