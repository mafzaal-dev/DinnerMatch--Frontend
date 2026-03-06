"use client";

import React from "react";
import PricingCard from "./PricingCard";
import WhySubscription from "./WhySubscription";
import Disclaimer from "./Disclaimer";

const tickIcon = "/yellow-tick.svg";

const annualFeatures = [
  { icon: tickIcon, text: "Unlimited DinnerMatch Dinner for 12 months." },
  { icon: tickIcon, text: "First access to every dinner" },
  {
    icon: tickIcon,
    text: "Discount + First access to exclusive DinnerMatch parties",
  },
  { icon: tickIcon, text: "Community member perks" },
];

const monthlyFeatures = [
  { icon: tickIcon, text: "Access to all Dinners - build your social rhythm." },
  { icon: tickIcon, text: "Early access to exclusive DinnerMatch parties" },
  { icon: tickIcon, text: "Cancel anytime - no question asked." },
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

  if (isAnnual) {
    period = "/year";
    features = annualFeatures;
    badge = "best-value";
    isHighlighted = true;
    savings = "Save when you pay upfront";
  } else {
    savings = "You're saving per dinner when you attend more than one.";
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
  };
};

const PricingSection = ({ onSelectPlan, plans, activePlanId }) => {
  const hasPlans = plans && Array.isArray(plans) && plans.length > 0;

  return (
    <section className="flex relative flex-col gap-10 px-6 py-10 bg-gray-950 max-md:px-5">
      <header className="flex z-0 flex-col gap-4 p-0 w-full leading-none text-center max-md:max-w-full">
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
        <p className="self-center mt-4 text-center text-xl text-neutral-200 max-md:max-w-full">
          No more waiting for plans. Join Cape Town most exciting social
          community.
        </p>
      </header>

      <main className="flex z-0 flex-wrap gap-4 content-start items-start mt-10 w-full max-md:max-w-full">
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

        <WhySubscription />
      </main>

      <Disclaimer />
    </section>
  );
};

export default PricingSection;
