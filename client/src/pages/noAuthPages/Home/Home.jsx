import './Home.scss';
import primaryComponents from "../../../components/primaryComponents";
import images from '../../../assets/images';

const Home = () => {
  return (
    <div className="home">
        <div className='home__banner-wrapper'>
          <primaryComponents.HomeBanner />
          <img className='home__cloud-image' src={images.cloudImage} alt="cloud" />
        </div>
        <div className="home__about">
          <div className="home__about-image-wrapper">
            <img className="home__about-image" src={images.homeAboutImage} alt="" />
          </div>
          <div className="home__about-content">
            <h4 className="home__about-tag landing-tag font-weight-normal">About us</h4>
            <h2 className="home__about-title landing-title">We help you get to the top of your industry with Software Solutions</h2>
            <h4 className="home__about-sub-title landing-sub-title">Scale fast with our solution</h4>
            <p className="home__about-text landing-text">We help you get to the top of your industrxDesign is your digital development partner. We work beyond methodologies, taking into account your unique goals and specific needs to help you build powerful products and highly capable integrated teams. From discovery to delivery, we work with you to uncover the most powerful and effective solutions for your projects, processes, and people with Software Solutions</p>
            <button className="home__about-submit">Learn more</button>
          </div>
        </div>
        {/* cards */}
        <div className="home__services">
          <h4 className="home__services-tag landing-tag">What we offer</h4>
          <h2 className="home__services-title landing-title">We help you get to the top of your industry with Software Solutions</h2>
          <div className="home__services__cards">
            <div className="home__services__card">
              <div className="home__services__card-image-wrapper">
                <img className='home__services__card-image' src={images.homeAboutImage} alt="cards" />
              </div>
              <h4 className="home__services__card-text">Product Engineering</h4>
            </div>
            <div className="home__services__card">
              <div className="home__services__card-image-wrapper">
                <img className='home__services__card-image' src={images.homeAboutImage} alt="cards" />
              </div>
              <h4 className="home__services__card-text">Custom Software/Web/App Development</h4>
            </div>
            <div className="home__services__card">
              <div className="home__services__card-image-wrapper">
                <img className='home__services__card-image' src={images.homeAboutImage} alt="cards" />
              </div>
              <h4 className="home__services__card-text">Dedicated development team</h4>
            </div>
            <div className="home__services__card">
              <div className="home__services__card-image-wrapper">
                <img className='home__services__card-image' src={images.homeAboutImage} alt="cards" />
              </div>
              <h4 className="home__services__card-text">Digital transformation</h4>
            </div>
          </div>
        </div>
        {/* projects */}
        <div className="home__projects">
          <h4 className="home__project-tag landing-tag">Our Projects</h4>
          <p className="home__project-title landing-title">Recent Projects</p>
          <p className="home__project-sub-title landing-text">With the great ideas you have we help to build product solutions and incoporate.. With the great ideas you have we help to build product solutions and incoporate.. With the great ideas you have we help to build product solutions and incoporate.</p>
          <div className="home__projects__cards">
            <div className="home__projects__card">
              <h4 className="home__projects__card-title">Mulan App</h4>
              <p className="home__projects__card-description">A mobile app done for the mulan cooperation to engage the audience of the mulan movie</p>
              <button className="home__projects__card-proceed">Learn more</button>
            </div>
            <div className="home__projects__card">
              <h4 className="home__projects__card-title">Mulan App</h4>
              <p className="home__projects__card-description">A mobile app done for the mulan cooperation to engage the audience of the mulan movie</p>
              <button className="home__projects__card-proceed">Learn more</button>
            </div>
            <div className="home__projects__card">
              <h4 className="home__projects__card-title">Mulan App</h4>
              <p className="home__projects__card-description">A mobile app done for the mulan cooperation to engage the audience of the mulan movie</p>
              <button className="home__projects__card-proceed">Learn more</button>
            </div>
          </div>
        </div>
        <primaryComponents.Testimonials />
        <div className="home__why-us">
          <h2 className="home__why-us__title">Reasons why you should choose us</h2>
          <div className="home__why-us__cards">
            <div className="home__why-us__card">
              <h3>Cross-Industry Expertise</h3>
              <p>As a diverse and multi-faceted team, we are empowed to develop product solutions accress industries. As a diverse and multi-faceted team, we are empowed to develop product solutions accress industries.</p>
            </div>
            <div className="home__why-us__card">
              <h3>Cross-Industry Expertise</h3>
              <p>As a diverse and multi-faceted team, we are empowed to develop product solutions accress industries. As a diverse and multi-faceted team, we are empowed to develop product solutions accress industries.</p>
            </div>
            <div className="home__why-us__card">
              <h3>Cross-Industry Expertise</h3>
              <p>As a diverse and multi-faceted team, we are empowed to develop product solutions accress industries. As a diverse and multi-faceted team, we are empowed to develop product solutions accress industries.</p>
            </div>
          </div>
        </div>
        <div className="home__our-goals">
          <div className="home__our-goals__image-wrapper">
            <img src={images.pointAtMacLaptop} alt="our-goals-img" />
          </div>
          <div className="home__our-goals__content">
            <h2>What we aim to achieve</h2>
            <h4 className='font-weight-normal'>Our Mission is to make you take advantage of the tech space with a satisfying experience.</h4>
            <button className='font-weight-bold'>Learn more about how we work</button>
          </div>

        </div>
    </div>
  )
}

export default Home