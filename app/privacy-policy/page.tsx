"use client";
import React from "react";

const PrivacyPolicy = () => {
  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            className="text-3xl lg:text-4xl font-bold mb-4"
            style={{ color: "#1d2530" }}
          >
            Privacy Policy
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: "#6d7b8c" }}
          >
            We respect your privacy. This policy explains how we collect, use,
            and safeguard your information when you use our website.
          </p>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-3" style={{ color: "#1d2530" }}>
              Information We Collect
            </h3>
            <p style={{ color: "#6d7b8c" }} className="leading-relaxed">
              When you use our contact form, we collect the details you provide
              (such as your name, email address, phone number, and message) to
              respond to your inquiry. We may also use cookies and analytics to
              understand website usage and improve our services.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3" style={{ color: "#1d2530" }}>
              How We Use Your Information
            </h3>
            <p style={{ color: "#6d7b8c" }} className="leading-relaxed">
              We use your information solely to respond to your requests and to
              enhance your browsing experience. We <strong>do not sell or
              share</strong> your personal information with third parties.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3" style={{ color: "#1d2530" }}>
              Data Retention & Deletion
            </h3>
            <p style={{ color: "#6d7b8c" }} className="leading-relaxed">
              We retain your information only as long as necessary to fulfill
              the purposes outlined in this policy. You may contact us at any
              time to request deletion of your personal data.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3" style={{ color: "#1d2530" }}>
              Contact Us
            </h3>
            <p style={{ color: "#6d7b8c" }} className="leading-relaxed">
              If you have questions about this Privacy Policy or would like to
              request deletion of your data, please reach out to us at:  
              <br />📧 <span className="font-medium">[your email]</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
