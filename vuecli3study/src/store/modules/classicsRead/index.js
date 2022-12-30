import mutations from './mutations'
// import * as actions from './actions'

const defaultState = {
  classicsReadScrollList: [], // 名著各书籍的滚动信息
  bookInfo: {}, // 名著书本信息
  personList: [] // 人物列表
}
export default {
  state: () => defaultState,
  mutations,
  // actions
}
