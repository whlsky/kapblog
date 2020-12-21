import { Component } from "react"
import { Spin } from 'antd'

export default function asyncComponent(importComponent) {
    class AsyncComponent extends Component {
        constructor(props) {
            super(props)

            this.state = {
                component: null,
            }
        }

        // eslint-disable-next-line
        async UNSAFE_componentWillMount() {
            const { default: component } = await importComponent()
            setTimeout(() => {
                this.setState({
                    component
                })
            }, 0)
        }

        render() {
            const C = this.state.component

            return C
                ? <C {...this.props} />
                : <div style={{ width: '100%', paddingTop: '20px', textAlign: 'center' }}><Spin /></div>
        }
    }
    return AsyncComponent
}