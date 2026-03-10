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
          {originalPrice && (
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
        className={`${buttonClasses} ${buttonBgClass}`}
        style={buttonStyle}
      >
        <div className="self-stretch my-auto text-neutral-800">
          {buttonText}
          {isActivePlan && (
            <span className="ml-1.5 opacity-90 text-xs">(Current Plan)</span>
          )}
        </div>
      </button>
    </article>
  );
};

export default PricingCard;
