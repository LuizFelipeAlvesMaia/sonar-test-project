'use client';

import { useState } from 'react';
import { validateEmail } from '@/utils/helpers';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors: { name?: string; email?: string; message?: string } = {};

    if (!name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validate()) {
      setSubmitted(true);
      // Simulate form submission
      setTimeout(() => {
        setName('');
        setEmail('');
        setMessage('');
        setSubmitted(false);
      }, 3000);
    }
  };

  if (submitted) {
    return (
      <div className="p-6 bg-green-100 border border-green-400 rounded" data-testid="success-message">
        Thank you! Your message has been sent successfully.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-6 border rounded-lg shadow-md">
      <h2 className="text-2xl font-bold">Contact Form</h2>
      
      <div className="flex flex-col gap-1">
        <label htmlFor="name" className="font-medium">Name:</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="px-3 py-2 border rounded"
          data-testid="name-input"
        />
        {errors.name && <span className="text-red-500 text-sm" data-testid="name-error">{errors.name}</span>}
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="font-medium">Email:</label>
        <input
          id="email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="px-3 py-2 border rounded"
          data-testid="email-input"
        />
        {errors.email && <span className="text-red-500 text-sm" data-testid="email-error">{errors.email}</span>}
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="message" className="font-medium">Message:</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="px-3 py-2 border rounded"
          rows={4}
          data-testid="message-input"
        />
        {errors.message && <span className="text-red-500 text-sm" data-testid="message-error">{errors.message}</span>}
      </div>

      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        data-testid="submit-button"
      >
        Send Message
      </button>
    </form>
  );
}
