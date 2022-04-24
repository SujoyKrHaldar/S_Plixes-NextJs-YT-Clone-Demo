import Link from "next/link";

function Footer() {
  return (
    <div className="footer">
      <Link href="/about" passHref>
        <p className="link">About S-Plixes</p>
      </Link>
      <p>Copyright 2022, All rights reserved.</p>
    </div>
  );
}

export default Footer;
