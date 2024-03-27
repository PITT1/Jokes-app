import propTypes from 'prop-types'
import '../App.css'

const JokeArea = ({text}) => {
    return(
        <section className='section-joke'>
            <div className='text-joke'>{text}</div>
        </section>
    )
}

export default JokeArea

JokeArea.propTypes = {
    text: propTypes.string.isRequired
}