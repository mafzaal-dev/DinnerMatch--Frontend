import React from 'react';

const Badge = ({ variant, children }) => {
  const baseClasses = "flex absolute -top-4 left-2/4 z-0 gap-2 justify-center items-center self-start px-5 py-2 text-xs leading-none text-center -translate-x-2/4 rounded-[48px] text-neutral-100 translate-y-[0%]";

  const variantClasses = {
    'best-value': 'bg-yellow-500 h-auto',
    'most-popular': 'bg-blue-500 h-8 font-bold min-h-8'
  };

  return (
    <div className={`${baseClasses} ${variantClasses[variant]}`}>
      {variant === 'best-value' && (
        <img
          src="/king.svg"
          className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
          alt=""
        />
      )}
      <div className="self-stretch my-auto text-neutral-100">
        {children}
      </div>
    </div>
  );
};

export default Badge;
