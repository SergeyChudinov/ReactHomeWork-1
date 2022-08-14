import Typography from '@mui/material/Typography';
import './Message.scss'
const Message = ({author, text}) => {
    return (
        <div className="message">
            {/* {props.text} - {props.author} */}
            <Typography variant='h5' component='div' color='primary'>{author}</Typography>
            <Typography variant='body2'>{text}</Typography>
        </div>
    )
}

export default Message