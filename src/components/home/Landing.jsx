import Image from "next/image";
import LogIn from "../Form/LogIn";
import { useState } from "react";

function Landing() {
  const [isLoading, setLoading] = useState(true);

  return (
    <div className="home_page">
      <div className="home_page_background">
        <Image
          alt="Home page"
          src="/assets/Landing.jpg"
          layout="fill"
          objectFit="cover"
          loading="lazy"
          objectPosition="center"
          className={`home_page_background_image
              ${isLoading ? "img_loading" : "img_load_stop"}`}
          onLoadingComplete={() => setLoading(false)}
        />
      </div>
      <div className="home_page_contents">
        <div className="content">
          <p>Watch anywhere, anytime.</p>
          <h1>Unlimited videos, TV shows and more.</h1>
          <p className="bottom">
            Ready to watch? Enter your email to <span>Start watching...</span>
          </p>

          <div className="arrow_right">
            <Image
              alt="Abstract background"
              src="/assets/Arrow_right.png"
              layout="responsive"
              objectFit="contain"
              width={1000}
              height={500}
              loading="eager"
            />
          </div>
        </div>

        <div className="log_in_form">
          <LogIn />
        </div>
      </div>
    </div>
  );
}

export default Landing;
