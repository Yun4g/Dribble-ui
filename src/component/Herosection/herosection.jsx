import './herosection.css'


function HeroSection() {
    return (
        <section>
            <div className='container'>
            <div className='heroText'>
                <h1>Discover the world’s top designers</h1>
                <p className='heroPragraph'>Explore work from the most talented and accomplished designers ready to take on your next project</p>
           
                <div className='input'>
                <input type="text" placeholder='what are you looking for?' />
              <div className='icons'>
                <button>
                    Shots
                    <span className='chevron'>
                        <svg xmlns="http://www.w3.org/2000/svg" height={'10px'} viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" /></svg>
                    </span>
                </button>
                <button className='searchIcon'>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" role="img" className="icon ">
                 <path d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
               </svg>
                </button>
            </div>

            </div>

           
            </div>
            <div className='linksPage'>
                <p>Trending searches</p>
                 <div className='Pages'>
                <a href="">landing page</a>
                <a href="">e-commerce</a>
                <a href="">moble app</a>
                <a href="">logo design</a>
                <a href="">dashboard</a>
                <a href="">icons</a>
                </div>
            </div>
            </div>

            
        </section>
    )
}



export default HeroSection;