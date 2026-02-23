"use client";

import React from "react";
import PricingCard from "./PricingCard";
import WhySubscription from "./WhySubscription";
import Disclaimer from "./Disclaimer";

const tickIcon = "/yellow-tick.svg";

const annualFeatures = [
  { icon: tickIcon, text: "Unlimited DinnersMatch Dinner for 12 months." },
  { icon: tickIcon, text: "First access to every dinner" },
  {
    icon: tickIcon,
    text: "Discount + First access to exclusive DinnersMatch parties",
  },
  { icon: tickIcon, text: "Community member perks" },
];

const monthlyFeatures = [
  { icon: tickIcon, text: "Access to all Dinners - build your social rhythm." },
  { icon: tickIcon, text: "Early access to exclusive DinnersMatch parties" },
  { icon: tickIcon, text: "Cancel anytime - no question asked." },
];

const singleFeatures = [{ icon: tickIcon, text: "Limited to 1 dinner" }];

const formatPrice = (price) => {
  if (price == null) return "—";
  const p = Number(price);
  return isNaN(p) ? String(price) : `R${p.toFixed(2).replace(/\.00$/, "")}`;
};

const mapPlanToCardProps = (plan, index) => {
  const isSubscription = plan.plan_type === "Subscription";
  const isAnnual = plan.duration_days >= 365;
  const isTicket = plan.plan_type === "Ticket";

  let period = "/month";
  let features = monthlyFeatures;
  let badge = "most-popular";
  let isHighlighted = false;
  let savings = null;
  let originalPrice = null;
  let buttonText = plan.name?.startsWith("Annual")
    ? "Get Annual Pass"
    : plan.name?.startsWith("Monthly")
    ? "Start Monthly Pass"
    : "Get Single Ticket";

  if (isAnnual) {
    period = "/year";
    features = annualFeatures;
    badge = "best-value";
    isHighlighted = true;
    savings = "Save when you pay upfront";
  } else if (isTicket) {
    period = "/once off";
    features = singleFeatures;
    badge = null;
    buttonText = "Get Single Ticket";
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
        <div className="flex justify-between items-center p-0 w-full text-4xl font-bold text-neutral-100 max-md:max-w-full">
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
              DinnersMatch
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
            .filter((p) => p.is_active !== false)
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

            <div className="flex flex-col grow shrink gap-1 px-4 pt-8 pb-4 bg-gray-900 rounded-lg border border-gray-800 border-solid min-h-[356px] min-w-60 w-[251px] max-md:pb-24">
              <header className="text-2xl font-bold leading-none text-center text-neutral-100">
                Single Dinner
              </header>
              <div className="flex gap-2 justify-center items-end self-center mt-4 w-40 max-w-full text-center">
                <div className="text-4xl font-bold leading-none text-[#FFAA55]">
                  R200
                </div>
                <div className="text-sm leading-tight text-neutral-200">
                  /once off
                </div>
              </div>
              <div className="flex gap-3 items-center mt-6 w-full text-sm leading-tight text-neutral-200">
                <img
                  src="/yellow-tick.svg"
                  className="object-contain shrink-0 self-stretch my-auto w-3 aspect-square"
                  alt=""
                />
                <div className="self-stretch my-auto text-neutral-200">
                  Limited to 1 dinner
                </div>
              </div>
              <button
                type="button"
                onClick={() =>
                  onSelectPlan &&
                  onSelectPlan({
                    title: "Single Dinner",
                    price: "R200",
                    period: "/once off",
                  })
                }
                className="flex gap-2 justify-center items-center px-4 py-2 mt-6 w-full text-sm font-semibold leading-none bg-[#FFAA55] rounded-lg min-h-12 text-neutral-800"
              >
                <div className="self-stretch my-auto text-neutral-800">
                  Get Single Ticket
                </div>
              </button>
            </div>
          </>
        )}

        <WhySubscription />
      </main>

      <Disclaimer />
    </section>
  );
};

export default PricingSection;
