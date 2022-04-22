function LogIn() {
  return (
    <div className="log_in">
      <h2>Get started</h2>

      <form>
        <input type="text" className="form_input" placeholder="Email" />
        <button type="submit" className="submit_btn">
          Sign in
        </button>
      </form>

      <p>Check your email please.</p>
    </div>
  );
}

export default LogIn;
