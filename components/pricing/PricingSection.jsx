"use client";

import React from "react";
import PricingCard from "./PricingCard";
import WhySubscription from "./WhySubscription";
import Disclaimer from "./Disclaimer";

const tickIcon = "/yellow-tick.svg";

const annualFeatures = [
  { icon: tickIcon, text: "Unlimited DinnerMatch dinners for 12 months" },
  { icon: tickIcon, text: "First access to every dinner" },
  {
    icon: tickIcon,
    text: "Discounts + first access to exclusive DinnerMatch parties",
  },
  { icon: tickIcon, text: "Community member perks" },
];

const monthlyFeatures = [
  { icon: tickIcon, text: "Access to all dinners — build your social rhythm." },
  { icon: tickIcon, text: "Early access to exclusive DinnerMatch parties" },
  { icon: tickIcon, text: "Cancel anytime — no questions asked." },
];

const formatPrice = (price) => {
  if (price == null) return "—";
  const p = Number(price);
  return isNaN(p) ? String(price) : `ZAR ${p.toFixed(2).replace(/\.00$/, "")}`;
};

const mapPlanToCardProps = (plan, index) => {
  const isSubscription = plan.plan_type === "Subscription";
  const isAnnual = plan.duration_days >= 365;

  let period = "/month";
  let features = monthlyFeatures;
  let badge = "most-popular";
  let isHighlighted = false;
  let savings = null;
  let originalPrice = null;
  let buttonText = plan.name?.startsWith("Annual")
    ? "Get Annual Pass"
    : "Start Monthly Pass";
  let initialPrice = 2500;

  if (isAnnual) {
    period = "/year";
    features = annualFeatures;
    badge = "best-value";
    isHighlighted = true;
    savings = "Save R500 when you pay upfront";
  } else {
    savings = "Full flexibility — cancel anytime.";
  }

  return {
    title: plan.name,
    price: formatPrice(plan.price),
    originalPrice,
    period,
    savings,
    features,
    buttonText,
    buttonColor: isAnnual ? "#EAB308" : "#FFAA55",
    badge,
    isHighlighted,
    plan,
    initialPrice,
  };
};

const PricingSection = ({ onSelectPlan, plans, activePlanId }) => {
  const hasPlans = plans && Array.isArray(plans) && plans.length > 0;

  return (
    <section className="flex relative flex-col gap-6 px-6 pt-5 py-10 bg-gray-950 max-md:px-5">
      <header className="flex z-0 flex-col gap-2 p-0 w-full leading-none text-center max-md:max-w-full">
        <div className="flex justify-between items-center p-0 w-full text-2xl md:text-4xl font-bold text-neutral-100 max-md:max-w-full">
          <h1 className="flex-1 shrink self-stretch my-auto basis-0 max-md:max-w-full">
            <span
              style={{
                fontFamily:
                  "Roboto, -apple-system, Roboto, Helvetica, sans-serif",
              }}
            >
              Choose Your{" "}
            </span>
            <span
              style={{
                fontFamily:
                  "Roboto, -apple-system, Roboto, Helvetica, sans-serif",
                color: "rgba(255,170,85,1)",
              }}
            >
              DinnerMatch
            </span>
            <span
              style={{
                fontFamily:
                  "Roboto, -apple-system, Roboto, Helvetica, sans-serif",
              }}
            >
              {" "}
              Pass
            </span>
          </h1>
        </div>
        <p className="text-lg md:text-xl text-gray-300">
        No more waiting for plans. Join Cape Town's most exciting social community.
        </p>
      </header>

      <main className="flex z-0 flex-col gap-4 mt-4 w-full max-md:max-w-full">
        <div className="flex flex-wrap gap-8 md:gap-4 items-stretch w-full">
          {hasPlans ? (
            plans
              .filter((p) => p.is_active !== false && p.plan_type !== "Ticket")
              .map((plan, i) => {
                const props = mapPlanToCardProps(plan, i);
                return (
                  <PricingCard
                    key={plan.id}
                    {...props}
                    onSelect={onSelectPlan}
                    isActivePlan={activePlanId === plan.id}
                  />
                );
              })
          ) : (
            <>
              <PricingCard
                title="Annual Pass"
                price="R2000"
                originalPrice="R2500"
                period="/year"
                savings="Save R500 when you pay upfront"
                features={annualFeatures}
                buttonText="Get Annual Pass "
                buttonColor="#EAB308"
                badge="best-value"
                isHighlighted={true}
                initialPrice={2500}
                onSelect={onSelectPlan}
              />

              <PricingCard
                title="Monthly Pass"
                price="R250"
                period="/month"
                savings="You're saving R75 per dinner when you attend more than one."
                features={monthlyFeatures}
                buttonText="Start Monthly Pass"
                buttonColor="#FFAA55"
                badge="most-popular"
                onSelect={onSelectPlan}
              />
            </>
          )}
        </div>

        <WhySubscription />
      </main>

      <Disclaimer />
    </section>
  );
};

export default PricingSection;
