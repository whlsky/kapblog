import { createHashHistory } from 'history'
const history = createHashHistory()
history.jump = ({ path, state = {}}) => {
  history.push({ pathname: path, state })
  setTimeout(() => { window.scrollTo(0, 0) }, 200)
}
history.returnToPortal = () => {
  // 该方法是在业务办理完成之后返回门户时使用
  history.go(-1)
  setTimeout(() => { window.scrollTo(0, 0) }, 200)
}
export default history
