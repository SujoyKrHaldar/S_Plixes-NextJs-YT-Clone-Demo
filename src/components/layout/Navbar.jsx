import Link from "next/link";
import { useRouter } from "next/router";
import {
  AiOutlineHome,
  AiTwotoneHome,
  AiOutlineLike,
  AiTwotoneLike,
} from "react-icons/ai";
import { IoMdArrowDropdown } from "react-icons/io";
import { BiSearch } from "react-icons/bi";
import { FaRegUserCircle } from "react-icons/fa";

import { BsBookmarks, BsBookmarksFill } from "react-icons/bs";

function Navbar() {
  const router = useRouter();

  return (
    <>
      <div className="navbar">
        <Link href="/" passHref>
          <p className="logo">S-Plixes</p>
        </Link>

        <div className="navbar_icons">
          <Link href="/browse">
            <div className="icon">
              {router.pathname === "/browse" ? (
                <AiTwotoneHome />
              ) : (
                <AiOutlineHome />
              )}
            </div>
          </Link>

          <Link href="/likes">
            <div className="icon">
              {router.pathname === "/likes" ? (
                <AiTwotoneLike />
              ) : (
                <AiOutlineLike />
              )}
            </div>
          </Link>

          <Link href="/bookmarks">
            <div className="icon" style={{ fontSize: "1.3rem" }}>
              {router.pathname === "/bookmarks" ? (
                <BsBookmarksFill />
              ) : (
                <BsBookmarks />
              )}
            </div>
          </Link>

          <div className="icon">
            <BiSearch />
          </div>
        </div>

        <div className="avatar">
          <div className="icon">
            <FaRegUserCircle />
          </div>
          <p>Hello Sujoy</p>
          {/* <div className="icon">
              <IoMdArrowDropdown />
            </div>  */}
        </div>
      </div>
    </>
  );
}

export default Navbar;
