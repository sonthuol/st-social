import React from "react";
import "./register.scss";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Hello world!</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
            nisi. A error ut hic vitae sapiente distinctio explicabo obcaecati
            sunt, officia consequuntur doloribus numquam possimus quibusdam nisi
            accusantium ipsam repellat.
          </p>
          <span>Don you have an account ?</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="text" placeholder="Name" />
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
