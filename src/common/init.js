import ReactDOM from 'react-dom'
import { ConfigProvider } from 'antd'
import moment from 'moment'
import { zhCN } from '../assets/moment_locale'
import zh_CN  from 'antd/lib/locale-provider/zh_CN'
import history from './history'
moment.locale('zh-cn', zhCN)
export const initApp = async (RootComponent) => {
    ReactDOM.render(
        <ConfigProvider locale={zhCN}>
            <RootComponent history={history}/>
        </ConfigProvider>,
        document.getElementById('root'))
}