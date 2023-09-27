import img from '../assets/img/bg-pattern-home-2.svg'
import rectangle from '../assets/img/rectangle.svg'

export function Hero() {
    return (
        <section className="hero full main-layout">

            <article className='flex'>

                <h2>Find the <br></br> best <span>talent</span></h2>

                <section>
                    <img className='hero-img' src={rectangle} />
                    <p>Finding the right people and building high performing teams can be hard. Most companies aren’t tapping into the abundance of global talent. We’re about to change that.</p>
                </section>

            </article>

            <img className='hero-img' src={img} />

        </section>
    )
}