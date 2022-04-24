import { useRouter } from "next/router";

function LogIn() {
  const router = useRouter();
  const handelSubmit = (e) => {
    e.preventDefault();
    // const email = e.target.value;
    // console.log(e);
    router.push("/browse");
  };
  return (
    <div className="log_in">
      <h2>Get started</h2>

      <form onSubmit={handelSubmit}>
        <input
          type="email"
          name="email"
          className="form_input"
          placeholder="Email"
          required
        />
        <button type="submit" className="submit_btn">
          Sign in
        </button>
      </form>

      <p>Check your email please.</p>
    </div>
  );
}

export default LogIn;
