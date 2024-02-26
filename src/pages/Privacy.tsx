import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">ConnectGPT Privacy Policy</h1>

      <p><strong>Effective Date:</strong> 27 Feb 2024 </p>

      <h2 className="text-xl font-bold mt-4 mb-2">Introduction</h2>
      <p>
        ConnectGPT respects the privacy of its users and is committed to protecting your personal information.
        This Privacy Policy outlines how we collect, use, disclose, and manage your information when you use our website.
      </p>

      <h2 className="text-xl font-bold mt-4 mb-2">Information We Collect</h2>
      <p className="mb-2">
        We may collect the following types of information when you visit and interact with our website:
      </p>
      <ul className="list-disc pl-6">
        <li><strong>Personal Information:</strong> This may include your name, email address, phone number, and other information you voluntarily provide when contacting us or using certain features of our website.</li>
        <li><strong>Non-Personal Information:</strong> This may include technical information such as your IP address, browser type, operating system, device information, and browsing behavior on our website. This information is collected through cookies and similar tracking technologies.</li>
      </ul>

      {/* Continue with other sections similarly */}

      <h2 className="text-xl font-bold mt-4 mb-2">Your Choices</h2>
      <p className="mb-2">
        You have choices regarding your information:
      </p>
      <ul className="list-disc pl-6">
        <li><strong>Accessing and Updating Your Information:</strong> You can access and update your personal information through your account settings on our website.</li>
        <li><strong>Opting Out of Communications:</strong> You can unsubscribe from our marketing communications by clicking the "unsubscribe" link at the bottom of any email we send you.</li>
      </ul>

      {/* Continue with other sections similarly */}

      <h2 className="text-xl font-bold mt-4 mb-2">Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy, please contact us:
      </p>
      <ul className="list-disc pl-6">
        <li><strong>By email:</strong> admin@connectgpt.tech </li>
      </ul>
    </div>
  );
};

export default PrivacyPolicy;
