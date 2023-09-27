import kady from '../assets/img/avatar-kady.jpg'
import aiysha from '../assets/img/avatar-aiysha.jpg'
import arthur from '../assets/img/avatar-arthur.jpg'
import quotes from '../assets/img/icon-quotes.svg'


export function Comments() {
    return (
        <section className="comments-container">

            <h1>Delivering real results for top companies. Some of our success stories</h1>

            <section className='cards'>

                <article className='card'>
                    <img className='quotes' src={quotes} alt="" />
                    <p> “The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.”</p>
                    <h2>Kady Baker</h2>
                    <p>Product manager at Bookmark</p>
                    <img className='avater' src={kady} alt="" />
                </article>

                <article className='card'>
                    <img className='quotes' src={quotes} alt="" />
                    <p> “We needed to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone through the roof!”</p>
                    <h2>Aiysha Reese</h2>
                    <p>Founder of Manage</p>
                    <img className='avater' src={aiysha} alt="" />
                </article>

                <article className='card'>
                    <img className='quotes' src={quotes} alt="" />
                    <p>“Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. The launch was an instant success with 100k downloads in the first month.”</p>
                    <h2>Arthur Clarke</h2>
                    <p>Co-founder of MyPhysio</p>
                    <img className='avater' src={arthur} alt="" />
                </article>
            </section>
        </section>
    )
}