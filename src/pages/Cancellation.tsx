import { useState } from "react";

const Cancellation = () => {

return (
    <div className="max-w-2xl mx-auto p-4">
    <h1 className="text-2xl font-bold mb-4">Cancellation & Refund Policy for connectgpt.tech</h1>

    <p className="mb-4">
      Thank you for your interest in connectgpt.tech! We understand that situations may change,
      and you might need to cancel your purchase. This policy outlines the conditions under which
      you can cancel your order and receive a refund.
    </p>

    <ol className="list-decimal pl-6 mb-6">
      <li className="mb-2">
        <strong>Cancellations before access is granted:</strong> If you cancel your order before you
        are granted access to the service or product, you will receive a full refund.
      </li>
      <li className="mb-2">
        <strong>Cancellations after access is granted:</strong> Due to the digital nature of our products
        and services, refunds will not be granted once you have been granted access. This includes, but is
        not limited to, situations where you:
        <ul className="list-disc pl-6 mb-2">
          <li>Download resources.</li>
          <li>Use any features or services offered.</li>
          <li>Activate or register any licenses or codes.</li>
        </ul>
      </li>
    </ol>

    <p className="mb-4">
      We may offer exceptional refunds in special circumstances, such as:
    </p>

    <ul className="list-disc pl-6 mb-6">
      <li className="mb-2">Technical issues preventing you from accessing the product or service.</li>
      <li className="mb-2">Major discrepancies between the product description and the actual product.</li>
      {/* Add more list items for other exceptional circumstances */}
    </ul>

    <p className="mb-4">
      To request a cancellation, please contact us at <span className="font-bold">admin@connectgpt.tech</span>
      {' '}with the subject line "<span className="font-bold">Cancellation Request - Your email id </span>".
    </p>

    <p className="mb-4">
      If your refund is approved, it will be processed within <span className="font-bold">[number]</span> business days
      using the original payment method. Please note that it may take additional time for your bank to reflect the refund in your account.
    </p>

    <p className="mb-4">
      If you have any questions about this policy, please feel free to contact us at <span className="font-bold">[your email address]</span>.
    </p>

    <p>
      We hope this policy is clear and informative. By using connectgpt.tech, you agree to be bound by the terms of this policy.
    </p>
  </div>
    );
};

export default Cancellation;
