import React, { useState } from 'react';

const PreorderForm = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      // Replace with your API endpoint
      const response = await fetch('https://your-api-endpoint.com/preorder', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      if (response.ok) {
        setMessage('Thank you! You will be notified when the product is available.');
      } else {
        setMessage('Failed to submit your email. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('An error occurred. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Preorder Now</h1>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        required
      />
      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Submitting...' : 'Preorder'}
      </button>
      {message && <p>{message}</p>}
    </form>
  );
};

export default PreorderForm;