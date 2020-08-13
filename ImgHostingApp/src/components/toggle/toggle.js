import React ,{Component} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentAlt } from '@fortawesome/free-solid-svg-icons'



import CommentBox from '../card/comment'

const element = <FontAwesomeIcon icon={faCommentAlt} />
 class Toggle extends Component{
    state={
        on:false
    }
    toggle = () => {
        this.setState({
            on:!this.state.on
        })
    }
    render(){
        return(
            <div>
                {
                    this.state.on && (
                        <CommentBox />
                    )
                }
                <button  className="btn btn-primary" onClick={this.toggle}>{element}</button>
            </div>
        )
    }
}
export default Toggle;