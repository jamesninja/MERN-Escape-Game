import { useRef, useState, useEffect, useContext } from "react";
import Link from '@mui/material/Link';

 const SignIn = () => {
  const userRef = useRef();
  const errRef = useRef();
  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [firstname, setFirstName] =useState("");
  const [lastname, setLastName] =useState("");
  const [admin, setAdmin] =useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);
  const [click, setClick] = useState(false); 
  
  const activateUser = () => setClick(true);

  useEffect(() => {
    userRef.current.focus();
  }, []);
  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);
 ;
  return (
    <>
      {success ? (
        <section>
          <h1>You are Logged in!</h1>
          <br />
          <p>{/* <a href="#">Go to Home</a> */}</p>
        </section>
      ) : (
        <section>
          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <form className="connexion">
          <h1>Sign In</h1>
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              id="email"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              value={user}
              required
            />
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
            />
           <p>
            Need a Room
            <br />
            <span className="line">
            <button onClick={activateUser}>LogIn</button>
            </span>
          </p>
          <Link href="/signup" variant="body2">
                  Inscrivez-vous ici
          </Link>
          </form>
         
        </section>
      )}
    </>
  );
};

export default SignIn;