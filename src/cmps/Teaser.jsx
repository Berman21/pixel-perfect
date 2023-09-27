import img from '../assets/img/bg-pattern-home-3.svg'
import rectangle from '../assets/img/rectangle.svg'
import cogSvg from '../assets/img/icon-cog.svg'
import personSvg from '../assets/img/icon-person.svg'
import chartSvg from '../assets/img/icon-chart.svg'

export function Teaser() {
    return (
        <section className="teaser full main-layout">

            <img className='' src={rectangle} />
            <h2>Build & manage distributed teams like no one else.</h2>

            <div className='full main-layout'>

                <article className='card flex'>
                    <img className='' src={personSvg} />
                    <div>
                        <h3>Experienced Individuals</h3>
                        <p>Our network is made up of highly experienced professionals who are passionate about what they do.</p>
                    </div>
                </article>


                <article className='card flex'>
                    <img className='' src={cogSvg} />
                    <div>
                        <h3>Easy to Implement</h3>
                        <p>Our processes have been refined over years of implementation meaning our teams always deliver.</p>
                    </div>
                </article>


                <article className='card flex'>
                    <img className='' src={chartSvg} />
                    <div>
                        <h3>Enhanced Productivity</h3>
                        <p>Our customized platform with in-built analytics helps you manage your distributed teams.</p>
                    </div>
                </article>

            </div>

            <img className='' src={img} />

        </section>
    )
}