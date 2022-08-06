import React, { Component } from "react";
import Slider from "react-slick";
import styles from "./styles.module.css";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      dots: false,
    };
    return (
      <div>
        {/* <h2>  </h2> */}
        <Slider {...settings}>
          <div className={styles.picbox}>
            <a target={"_blank"} href="https://inannan423.github.io/Svg_Board/#/">
              <img src="https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/svg8-6.png" />
            </a>
          </div>
          <div className={styles.picbox}>
            <a target={"_blank"} href="https://csspano.netlify.app/#/">
              <img src="https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/csspano86.png" />
            </a>
          </div>
          <div className={styles.picbox}>
            <a target={"_blank"} href="https://github.com/inannan423/orange-nan-mini_program">
              <img src="https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/wxmini86.png" />
            </a>
          </div>
        </Slider>
      </div>
    );
  }
}
