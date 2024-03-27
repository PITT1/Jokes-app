import propTypes from "prop-types"
import '../App.css'

const Button = ({ text, fun }) => {
    return(
        <div className="container-button">
            <button onClick={fun}>{text}</button>
        </div>
    )
}

export default Button

Button.propTypes = {
    text: propTypes.string,
    fun: propTypes.func
}