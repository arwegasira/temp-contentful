import heroImg from './assets/hero.svg'
const Hero = () => {
  return (
    <section className='hero'>
      <div className='hero-center'>
        <div className='hero-title'>
          <h1>ContentFull CMS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem odit
            sunt neque. Ut odit, vel ipsam eum rerum explicabo sunt dolore,
            inventore eos ducimus illum labore aut nam corporis molestias eaque
            nostrum rem illo corrupti obcaecati commodi nesciunt eligendi sint.
          </p>
        </div>
        <div className='image-container'>
          <img src={heroImg} alt='' className='img' />
        </div>
      </div>
    </section>
  )
}
export default Hero
