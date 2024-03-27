import propTypes from 'prop-types'
import '../App.css'

const JokeArea = ({text1, text2, typeJoke}) => {

    if(typeJoke == "single"){
        return(
            <section className='section-joke'>
                <div className='text-joke'>{text1}</div>
            </section>
        )
    } else if(typeJoke == "twopart"){
        return(
            <section className='section-joke'>
                <div className='text-joke'>{text1}</div>
                <div className='text-joke'>{text2}</div>
            </section>
        )
    }
}

export default JokeArea

JokeArea.propTypes = {
    text1: propTypes.string.isRequired,
    text2: propTypes.string,
    typeJoke: propTypes.string
}