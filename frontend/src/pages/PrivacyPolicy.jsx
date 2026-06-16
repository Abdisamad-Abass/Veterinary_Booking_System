/* eslint-disable no-unused-vars */
import React from 'react'

const PrivacyPolicy = () => {
    return (
      <div className="px-4 sm:px-8 md:px-16 lg:px-32">
        <div className="pt-10 text-2xl text-center text-gray-500">
          <p>
            PRIVACY <span className="font-medium text-gray-700">POLICY</span>
          </p>
        </div>
  
        <div className="flex flex-col gap-6 my-10 text-sm text-gray-600">
          <p>
            At <strong>vetdoctors</strong>, we are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our platform.
          </p>
  
          <b className="text-gray-800">1. Information We Collect</b>
          <p>
            We may collect personal information such as your name, email address, phone number, and health-related data that you voluntarily provide when creating an account, booking an appointment, or contacting support.
          </p>
  
          <b className="text-gray-800">2. How We Use Your Information</b>
          <p>
            Your information is used to:
          </p>
          <ul className="ml-6 space-y-2 list-disc">
            <li>Facilitate appointment bookings and reminders</li>
            <li>Provide personalized healthcare recommendations</li>
            <li>Improve our services and platform</li>
            <li>Respond to customer service inquiries</li>
          </ul>
  
          <b className="text-gray-800">3. Information Sharing</b>
          <p>
            We do not sell or rent your personal information. Your data may be shared with trusted partners such as licensed healthcare providers, only as necessary to deliver our services.
          </p>
  
          <b className="text-gray-800">4. Data Security</b>
          <p>
            We implement industry-standard security measures to protect your information. However, no method of transmission or storage is 100% secure, and we cannot guarantee absolute security.
          </p>
  
          <b className="text-gray-800">5. Your Rights</b>
          <p>
            You have the right to access, update, or delete your personal information. You can do this through your account settings or by contacting our support team.
          </p>
  
          <b className="text-gray-800">6. Changes to This Policy</b>
          <p>
            We may update this Privacy Policy from time to time. Any changes will be communicated through our website or via email.
          </p>
  
          <p className="text-sm italic text-gray-500">
            If you have any questions or concerns about our Privacy Policy, feel free to contact us at support@vetdoctors.com.
          </p>
        </div>
      </div>
    );
  };
  
  export default PrivacyPolicy;
  