import Style from '../styles/Home.module.css';

const Footer = () => {
    return (
      <div className={Style.banner}>
        <div className={Style.banner_icon}>
            <img src="/img/contents/icon-banner.png" width="100%" />
        </div>
        <div className={Style.banner_text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam saepe unde nobis sequi illo, rerum, dolorum recusandae repellendus, fugiat itaque perspiciatis iure deleniti esse id dolore. Excepturi saepe minus pariatur!
        </div>
      </div>
    )
}
  
export default Footer