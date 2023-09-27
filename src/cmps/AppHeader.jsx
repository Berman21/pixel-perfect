export function AppHeader() {
    return (
        <header className='main-layout app-header'>
            <h2>myteam</h2>

            <article className="nav-container flex justify-between">

                <nav className='nav-links'>
                    <ul className="flex">
                        <li>home</li>
                        <li>about</li>
                    </ul>
                </nav>

                <button>contact us</button>
            </article>
        </header>
    )
}