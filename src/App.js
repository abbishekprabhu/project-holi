import './App.css';
import logo from './images/logo.png';
import splash from './images/ColorSplash.png';
import FadeInOnScroll from './FadeInOnScroll'

function App() {
  return (
    <div className="App">
      <div id="cursor"></div>
    <div id="cursor-border"></div>
      <header>
        <img src={logo} alt='logo'/>
      </header>
      <div className="colors">
        <img src={splash} alt='splash'/>
      </div>
      <section className='downo'>
        <h1>What is life without a little bit of <span className='color-change'>colour?</span></h1>
        <p className='h1-below'>Embrace the colours of Holi, embrace happiness. Style is what you carry. Colours are just an add-on.</p>
        <div className='button-moments'>
          <button className='moments'>Post your best moments!</button>
        </div>
      </section>
      <section className='boxed-up two'>
        <p className='contest'>Contest</p>
        <div className='points'>
          <FadeInOnScroll>
          <p>Step 1 : - Open App</p>
          </FadeInOnScroll>
          <FadeInOnScroll>
          <p>Step 2 : - Post Your Holi Moments</p>
          </FadeInOnScroll>
          <FadeInOnScroll>
          <p>Step 3 : - Mention #HOLI</p>
          </FadeInOnScroll>
          <FadeInOnScroll>
          <p>Step 4 : - Share on other social media</p>
          </FadeInOnScroll>
          <FadeInOnScroll>
          <p>Step 5 : - Tag your friends</p>
          </FadeInOnScroll>
          <FadeInOnScroll>
          <p>Maximum Tagged People will Win : -</p>
          </FadeInOnScroll>
          <FadeInOnScroll>
          <p>Apple iPhone,Watch and many more</p>
          </FadeInOnScroll>
        </div>
      </section>
      <div className='three'>
        <section className='boxed-up'>
          <h2>Wanna share your<span className='color-change roll'> moments?</span></h2>
          <div className='button-moments'>
            <button className='moments'>Post your best moments!</button>
          </div>
        </section>
      </div>
      <footer>
        <p>Copyrights © 2023.Holi</p>
      </footer>
    </div>
  );
}

export default App;
