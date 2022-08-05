import './Message.scss'
const Message = (props) => {
    return (
        <div className="message">
            {props.text}
        </div>
    )
}

export default Message