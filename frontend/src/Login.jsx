import React, { useState, useContext } from 'react';
import { AuthContext } from './AuthContext';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const { login, loading } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    const res = await login(email, password);
    if (res.success) {
      navigate('/dashboard');
    } else {
      setError(res.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-200">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white rounded-2xl shadow-lg p-12"
      >
        <h2 className="text-3xl font-bold text-green-900 mb-8 text-center">Sign In</h2>
        {error && (
          <div className="mb-4 text-center bg-red-100 text-red-700 py-2 px-3 rounded">
            {error}
          </div>
        )}
        <div className="mb-6">
          <label className="block mb-2 text-green-900 font-semibold">Email</label>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            className="w-full border border-green-200 px-4 py-3 rounded focus:outline-none"
            placeholder="you@email.com"
          />
        </div>
        <div className="mb-8">
          <label className="block mb-2 text-green-900 font-semibold">Password</label>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            className="w-full border border-green-200 px-4 py-3 rounded focus:outline-none"
            placeholder="••••••••"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-700 text-white py-3 rounded font-bold text-lg"
          disabled={loading}
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>
        <div className="mt-6 text-center text-green-900 text-base">
          Don't have an account?{' '}
          <Link to="/signup" className="text-green-700 font-bold hover:underline">
            Sign up
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
