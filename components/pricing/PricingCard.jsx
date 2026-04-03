import React from "react";
import Badge from "./Badge";
import FeatureList from "./FeatureList";

const PricingCard = ({
  title,
  price,
  originalPrice,
  period,
  savings,
  features,
  buttonText,
  buttonColor,
  badge,
  isHighlighted = false,
  onSelect,
  plan,
  isActivePlan = false,
  initialPrice = 0,
  loadingPlanId = null,
}) => {
  const cardClasses = isHighlighted
    ? "flex relative flex-col grow shrink self-stretch gap-3 px-4 pt-8 pb-4 font-bold rounded-lg border-2 border-yellow-500/50 min-w-60 w-[251px]"
    : "flex relative flex-col grow shrink self-stretch gap-3 px-4 pt-8 pb-4 bg-gray-900 rounded-lg border border-gray-800 border-solid min-h-[356px] min-w-60 w-[251px]";

  const titleClasses = isHighlighted
    ? "z-0 text-2xl leading-none text-center text-yellow-400"
    : "z-0 text-2xl font-bold leading-none text-center text-neutral-100";

  const priceColor = isHighlighted ? "text-yellow-400" : "text-[#FFAA55]";

  const isHexColor =
    typeof buttonColor === "string" && buttonColor.startsWith("#");
  const buttonClasses =
    "flex z-0 gap-2 justify-center cursor-pointer items-center px-4 py-2 mt-6 w-full text-sm font-semibold leading-none rounded-lg min-h-12 text-neutral-800";
  const buttonStyle = isHexColor ? { backgroundColor: buttonColor } : undefined;
  const buttonBgClass = !isHexColor
    ? buttonColor === "yellow"
      ? "bg-yellow-500"
      : "bg-[#FFAA55]"
    : "";

  const cardStyle = isHighlighted
    ? { background: "linear-gradient(180deg, #281914 0%, #111121 75%)" }
    : undefined;

  const planId = plan?.id;
  const isThisCheckoutLoading =
    loadingPlanId != null &&
    planId != null &&
    String(loadingPlanId) === String(planId);
  const checkoutBusy = loadingPlanId != null;

  return (
    <article className={cardClasses} style={cardStyle}>
      {badge && (
        <Badge variant={badge}>
          {badge === "best-value" ? "BEST VALUE" : "MOST POPULAR"}
        </Badge>
      )}

      <header className={titleClasses}>{title}</header>

      <div className="flex z-0 flex-col gap-3 mt-2 w-full text-center">
        <div className="flex gap-1 justify-center items-end self-center leading-none whitespace-nowrap text-neutral-200">
          {isHighlighted && initialPrice > 0 && (
            <span className="text-xl text-gray-500 line-through">R{initialPrice}</span>
          )}
          {!isHighlighted && originalPrice && (
            <div className="text-xl line-through text-neutral-200">
              {originalPrice}
            </div>
          )}
          <div className={`text-4xl font-bold leading-none ${priceColor}`}>
            {price}
          </div>
          <div className="text-sm leading-tight text-neutral-200">{period}</div>
        </div>
        {savings && (
          <div className="mt-1 text-sm leading-tight text-green-600">
            {savings}
          </div>
        )}
      </div>

      <FeatureList features={features} />

      <button
        type="button"
        onClick={() => onSelect && onSelect({ title, price, period, plan })}
        className={`${buttonClasses} ${buttonBgClass} ${checkoutBusy ? "opacity-70 cursor-wait" : ""}`}
        style={buttonStyle}
        disabled={checkoutBusy}
      >
        <div className="self-stretch my-auto text-neutral-800 flex items-center justify-center gap-2">
          {isThisCheckoutLoading && (
            <svg
              className="h-4 w-4 shrink-0 animate-spin text-neutral-800"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              aria-hidden
            >
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
          )}
          <span>
            {isThisCheckoutLoading ? "Redirecting…" : buttonText}
            {isActivePlan && (
              <span className="ml-1.5 opacity-90 text-xs">(Current Plan)</span>
            )}
          </span>
        </div>
      </button>
    </article>
  );
};

export default PricingCard;
