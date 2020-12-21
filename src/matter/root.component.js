import React from 'react'
import { Provider, observer } from 'mobx-react'
import { Route, Router, Switch } from 'react-router-dom'
import moment from 'moment'
import asyncComponent from '../common/asyncComponent'

const app = asyncComponent(() => import('./App'))
const WAY = process.env.WAY

moment.locale('zh-cn')

@observer
class RootComponent extends React.Component {
  componentDidCatch(error, info) {
    console.log(error, info)
  }
  render() {
    console.log('WAY======', WAY)
    console.log('WAY======', process.env)
    let { history } = this.props
    return (
      <Provider>
        <Router history={history}>
          <Switch>
            <Route path={'/app'} component={app} />
          </Switch>
        </Router>
      </Provider>
    )
  }
}

export default RootComponent
