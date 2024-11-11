import img from '../../assets/images/login/login.svg'
import { Link } from 'react-router-dom';

const SignUp = () => {
    const handleSignUp =() =>{

    }
    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row gap-16">
          <div className="text-center lg:text-left w-1/2">
           <img src={img} alt="" />
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSignUp} className="card-body">
            <h1 className="text-3xl font-bold text-center">SignUp now!</h1>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name='name' placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="confirm password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary" type='submit' value="signup">Sign Up</button>
              </div>
            </form>
           <p>Have you already <strong>SignUp</strong> to Car Doctors plsease <Link to="/login" className='text-orange-600 font-bold'>LogIn</Link></p>


          </div>
        </div>
      </div>
    );
};

export default SignUp;