import { Component } from 'react'
import { UserOutlined } from '@ant-design/icons'
import { Avatar } from 'antd'

class Logo extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render (){
        return (
            <div>
              <Avatar size='large' icon = {<UserOutlined />}>
                </Avatar>  
            </div>    
        )
    }
}
export default Logo