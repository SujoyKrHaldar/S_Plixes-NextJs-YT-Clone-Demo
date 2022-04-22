import Link from "next/link";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <Link href="/" passHref>
          <p className="logo">S-Plixes</p>
        </Link>

        <Link href="/about" passHref>
          <p>About</p>
        </Link>
      </div>
    </>
  );
}

export default Navbar;
