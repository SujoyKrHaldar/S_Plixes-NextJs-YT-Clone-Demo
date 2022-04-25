import Image from "next/image";
import { useState } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { BsBookmark } from "react-icons/bs";

function Banner() {
  const [isLoading, setLoading] = useState(true);

  return (
    <>
      <div className="banner">
        <div className="cover_background">
          <Image
            alt="Home page"
            src="/assets/JL.jpg"
            layout="fill"
            objectFit="cover"
            loading="lazy"
            objectPosition="center"
            className={`background_image
              ${isLoading ? "img_loading" : "img_load_stop"}`}
            onLoadingComplete={() => setLoading(false)}
          />
        </div>
        <div className="banner_content">
          <div className="content">
            <p>DC comics</p>
            <h1>Justice league</h1>
            <p className="bottom">
              Fueled by his restored faith in humanity and inspired by
              Superman&apos selfless act, Bruce Wayne enlists the help of his
              new-found ally, Diana Prince, to face an even greater enemy.
            </p>
            <div className="button">
              <div className="icon play_button">
                <AiFillPlayCircle />
              </div>
              <div className="other_btn">
                <div className="icon bookmark">
                  <BsBookmark />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
