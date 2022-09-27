import "./HomeBanner.scss";
import images from "../../../assets/images";

const HomeBanner = () => {
  return (
    <div className="home-banner">
        <div className="home-banner__content">
            <p className="home-banner__text1">Your product solution partner</p>
            <h3 className="home-banner__text2">We build solutions that scale..</h3>
            <p className="home-banner__text3">With the great ideas you have we help to build product solutions and incoporate.. With the great ideas you have we help to build product solutions and incoporate.</p>
            <div className="home-banner__submission">
                <button className="home-banner__proceed-button" type="submit">Learn more</button>
                <button className="home-banner__request-button" type="submit">Get a quote</button>
            </div>
        </div>
        <div className="home-banner__image">
            <img src={images.homeBannerImage} alt='home-banner__image' />
        </div>
    </div>
  )
}

export default HomeBanner