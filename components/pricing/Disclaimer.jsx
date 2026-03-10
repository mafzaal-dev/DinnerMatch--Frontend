import React from 'react';

const Disclaimer = () => {
  return (
    <footer className="">
      <div className="text-xs text-gray-500 text-center">
        <p>
          By selecting a plan, you agree to our{" "}
          <a
            href="/terms-conditions"
            className="text-[#F9B456] hover:underline cursor-pointer"
          >
            Terms &amp; Conditions
          </a>{" "}
          and{" "}
          <a
            href="/privacy-policy"
            className="text-[#F9B456] hover:underline cursor-pointer"
          >
            Privacy Policy
          </a>
          . Subscriptions can be cancelled anytime. Single tickets are
          non-refundable.
        </p>
      </div>
    </footer>
  );
};

export default Disclaimer;
