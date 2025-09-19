"use client";
import React from "react";

const TermsOfService = () => {
  return (
    <section className="py-16" style={{ backgroundColor: "#ffffff" }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            className="text-3xl lg:text-4xl font-bold mb-4"
            style={{ color: "#1d2530" }}
          >
            Terms of Service
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: "#6d7b8c" }}
          >
            By accessing and using our website, you agree to the following terms
            and conditions.
          </p>
        </div>

        <div className="space-y-8">
          <div>
            <h3
              className="text-xl font-semibold mb-3"
              style={{ color: "#1d2530" }}
            >
              Use of Our Website
            </h3>
            <p style={{ color: "#6d7b8c" }} className="leading-relaxed">
              Our website and its content are provided for informational
              purposes only. You agree not to misuse the site or interfere with
              its operation in any way.
            </p>
          </div>

          <div>
            <h3
              className="text-xl font-semibold mb-3"
              style={{ color: "#1d2530" }}
            >
              Intellectual Property
            </h3>
            <p style={{ color: "#6d7b8c" }} className="leading-relaxed">
              All content, trademarks, logos, images, and designs displayed on
              this website are the property of RhinoDesk (or respective owners)
              and may not be reproduced, copied, or used without prior written
              permission.
            </p>
          </div>

          <div>
            <h3
              className="text-xl font-semibold mb-3"
              style={{ color: "#1d2530" }}
            >
              Limitation of Liability
            </h3>
            <p style={{ color: "#6d7b8c" }} className="leading-relaxed">
              We make every effort to ensure accuracy, but we do not guarantee
              that the information provided on this site is free of errors or
              omissions. We are not liable for any damages resulting from the
              use of this site.
            </p>
          </div>

          <div>
            <h3
              className="text-xl font-semibold mb-3"
              style={{ color: "#1d2530" }}
            >
              External Links
            </h3>
            <p style={{ color: "#6d7b8c" }} className="leading-relaxed">
              Our website may contain links to third-party sites. We are not
              responsible for the content or practices of those websites.
            </p>
          </div>

          <div>
            <h3
              className="text-xl font-semibold mb-3"
              style={{ color: "#1d2530" }}
            >
              Changes to These Terms
            </h3>
            <p style={{ color: "#6d7b8c" }} className="leading-relaxed">
              We may update these Terms of Service at any time. Continued use of
              the website after changes means you accept the updated terms.
            </p>
          </div>

          <div>
            <h3
              className="text-xl font-semibold mb-3"
              style={{ color: "#1d2530" }}
            >
              Contact Us
            </h3>
            <p style={{ color: "#6d7b8c" }} className="leading-relaxed">
              If you have questions about these terms, please contact us at:  
              <br />📧{" "}
              <span className="font-medium">[your email here]</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsOfService;
