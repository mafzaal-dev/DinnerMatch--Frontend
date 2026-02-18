import React from 'react';

const Disclaimer = () => {
  return (
    <footer className="z-0 self-start mt-10 text-xs leading-tight text-center text-neutral-200 max-md:max-w-full">
      <span style={{ fontFamily: 'Roboto, -apple-system, Roboto, Helvetica, sans-serif' }}>
        By selecting a plan, you agree to our
      </span>
      <a
        href="https://dinnermatch.co.za/terms-conditions"
        style={{ fontFamily: 'Roboto, -apple-system, Roboto, Helvetica, sans-serif', textDecoration: 'underline', color: 'rgba(249,180,86,1)' }}
        target="_blank"
        rel="noopener noreferrer"
      >
        Terms & Conditions
      </a>
      <span style={{ fontFamily: 'Roboto, -apple-system, Roboto, Helvetica, sans-serif' }}>
        {' '}and
      </span>
      {' '}
      <a
        href="https://dinnermatch.co.za/privacy-policy"
        style={{ fontFamily: 'Roboto, -apple-system, Roboto, Helvetica, sans-serif', textDecoration: 'underline', color: 'rgba(249,180,86,1)' }}
        target="_blank"
        rel="noopener noreferrer"
      >
        Privacy Policy
      </a>
      <span style={{ fontFamily: 'Roboto, -apple-system, Roboto, Helvetica, sans-serif' }}>
        . Subscriptions can be cancelled anytime. Single tickets are non-refundable.
      </span>
    </footer>
  );
};

export default Disclaimer;
