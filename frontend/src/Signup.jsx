import React, { useState, useContext } from 'react';
import { AuthContext } from './AuthContext';
import { useNavigate, Link } from 'react-router-dom';

const Signup = () => {
  const { signup, loading } = useContext(AuthContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    const res = await signup(name, email, password);
    if (res.success) {
      navigate('/dashboard');
    } else {
      setError(res.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 via-white to-green-50">
      <div className="w-full max-w-lg bg-white border border-green-200 rounded-2xl shadow-lg p-0 flex flex-col md:flex-row">
        {/* Left Icon/Info Panel */}
        <div className="hidden md:flex flex-col justify-center items-center bg-gradient-to-b from-green-600 to-green-400 rounded-l-2xl p-8 w-1/3">
          <svg className="w-14 h-14 mb-4 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <circle cx="12" cy="8" r="4" stroke="white" strokeWidth="2" fill="none"/>
            <path d="M4 20c0-4 4-6 8-6s8 2 8 6" stroke="white" strokeWidth="2" fill="none"/>
          </svg>
          <h2 className="text-xl font-bold text-white mb-2">Welcome!</h2>
          <p className="text-green-100 text-center text-sm">Join our community and grow with us.</p>
        </div>
        {/* Signup Form */}
        <form
          onSubmit={handleSubmit}
          className="flex-1 p-8"
        >
          <h2 className="text-3xl font-extrabold text-green-700 mb-2 text-left">Create Account</h2>
          <p className="text-green-500 mb-8 text-left text-sm">Sign up to get started</p>
          {error && (
            <div className="mb-6 text-center bg-red-100 text-red-700 font-semibold py-2 px-4 rounded-lg border border-red-300">
              {error}
            </div>
          )}
          <div className="mb-5">
            <label className="block mb-2 font-semibold text-green-700">Full Name</label>
            <input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              required
              className="w-full bg-green-50 border border-green-300 px-4 py-3 rounded-lg text-green-900 focus:outline-none focus:border-green-500 transition placeholder:text-green-400"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-5">
            <label className="block mb-2 font-semibold text-green-700">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              className="w-full bg-green-50 border border-green-300 px-4 py-3 rounded-lg text-green-900 focus:outline-none focus:border-green-500 transition placeholder:text-green-400"
              placeholder="you@email.com"
            />
          </div>
          <div className="mb-8">
            <label className="block mb-2 font-semibold text-green-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              className="w-full bg-green-50 border border-green-300 px-4 py-3 rounded-lg text-green-900 focus:outline-none focus:border-green-500 transition placeholder:text-green-400"
              placeholder="••••••••"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-green-500 to-green-400 text-white py-3 rounded-lg font-bold text-lg shadow hover:from-green-600 hover:to-green-500 transition disabled:opacity-60"
            disabled={loading}
          >
            {loading ? 'Signing up...' : 'Sign Up'}
          </button>
          <div className="mt-8 text-center text-green-700 text-sm">
            Already have an account?{' '}
            <Link to="/login" className="text-green-600 font-bold hover:underline">
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
