# UI Components Guide

This guide documents all the modal components created for the DinnerMatch application.

## Components Overview

All modal components are located in `components/modals/` and follow a consistent design system:
- Dark theme with `#1a1f2e` background
- Orange accent color `#F97315` for primary actions
- Responsive design (mobile and desktop)
- Accessible with proper ARIA labels

## Components

### 1. LoginModal

**File**: `components/modals/LoginModal.jsx`

**Purpose**: User authentication modal for signing in.

**Props**:
- `isOpen` (boolean): Controls modal visibility
- `onClose` (function): Callback when modal is closed

**Usage**:
```jsx
import LoginModal from '@/components/modals/LoginModal';

function MyComponent() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      <button onClick={() => setIsOpen(true)}>Sign In</button>
      <LoginModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
```

**Features**:
- Email and password inputs
- Password visibility toggle
- Forgot password link
- Terms and conditions link

---

### 2. PreferencesForm

**File**: `components/modals/PreferencesForm.jsx`

**Purpose**: Collects user dining preferences (language, budget, dietary restrictions, menu options).

**Props**:
- `onContinue` (function): Callback with preferences data
- `onBack` (function): Callback for back navigation

**Usage**:
```jsx
import PreferencesForm from '@/components/modals/PreferencesForm';

function MyComponent() {
  const handleContinue = (preferences) => {
    console.log('Preferences:', preferences);
    // { language, budget, hasDietaryRestrictions, menuOptions }
  };
  
  return (
    <PreferencesForm
      onContinue={handleContinue}
      onBack={() => console.log('Go back')}
    />
  );
}
```

**Returns Data**:
```javascript
{
  language: 'English' | 'Afrikaans' | 'Xhosa',
  budget: '$' | '$$' | '$$$',
  hasDietaryRestrictions: boolean,
  menuOptions: ['Vegetarian', 'Meat', 'Fish', 'Vegan', 'Halaal']
}
```

---

### 3. DinnerConfirmation

**File**: `components/modals/DinnerConfirmation.jsx`

**Purpose**: Displays selected preferences for confirmation before proceeding.

**Props**:
- `preferences` (object): Preferences object from PreferencesForm
- `onEdit` (function): Callback to edit preferences
- `onConfirm` (function): Callback when user confirms

**Usage**:
```jsx
import DinnerConfirmation from '@/components/modals/DinnerConfirmation';

function MyComponent() {
  const preferences = {
    language: 'English',
    budget: '$$',
    hasDietaryRestrictions: false,
    menuOptions: ['Vegetarian']
  };
  
  return (
    <DinnerConfirmation
      preferences={preferences}
      onEdit={() => console.log('Edit')}
      onConfirm={() => console.log('Confirmed')}
    />
  );
}
```

---

### 4. PricingModal

**File**: `components/modals/PricingModal.jsx`

**Purpose**: Displays subscription plans (Annual, Monthly, Single Dinner).

**Props**:
- `isOpen` (boolean): Controls modal visibility
- `onClose` (function): Callback when modal is closed
- `onSelectPlan` (function): Callback with selected plan ID

**Usage**:
```jsx
import PricingModal from '@/components/modals/PricingModal';

function MyComponent() {
  const [isOpen, setIsOpen] = useState(false);
  
  const handleSelectPlan = (planId) => {
    console.log('Selected:', planId); // 'annual', 'monthly', or 'single'
    // Proceed to checkout
  };
  
  return (
    <PricingModal
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      onSelectPlan={handleSelectPlan}
    />
  );
}
```

**Plan IDs**:
- `'annual'` - Annual Pass
- `'monthly'` - Monthly Pass
- `'single'` - Single Dinner Ticket

---

### 5. CitySelectionModal

**File**: `components/modals/CitySelectionModal.jsx`

**Purpose**: Allows users to select their city.

**Props**:
- `isOpen` (boolean): Controls modal visibility
- `onClose` (function): Callback when modal is closed
- `onSelectCity` (function): Callback with selected city object

**Usage**:
```jsx
import CitySelectionModal from '@/components/modals/CitySelectionModal';

function MyComponent() {
  const [isOpen, setIsOpen] = useState(false);
  
  const handleSelectCity = (city) => {
    console.log('Selected:', city);
    // { id: 'cape-town', name: 'Cape Town', province: 'Western Cape' }
  };
  
  return (
    <CitySelectionModal
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      onSelectCity={handleSelectCity}
    />
  );
}
```

---

### 6. AreaSelectionModal

**File**: `components/modals/AreaSelectionModal.jsx`

**Purpose**: Allows users to select their area within a city.

**Props**:
- `isOpen` (boolean): Controls modal visibility
- `onClose` (function): Callback when modal is closed
- `onSelectArea` (function): Callback with selected area object
- `city` (string): City name to display in subtitle

**Usage**:
```jsx
import AreaSelectionModal from '@/components/modals/AreaSelectionModal';

function MyComponent() {
  const [isOpen, setIsOpen] = useState(false);
  
  const handleSelectArea = (area) => {
    if (area) {
      console.log('Selected:', area);
      // { id: 'southern-suburbs', name: 'Southern Suburbs' }
    } else {
      // User clicked "Continue to Quiz" without selecting
      console.log('Continue to quiz');
    }
  };
  
  return (
    <AreaSelectionModal
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      onSelectArea={handleSelectArea}
      city="Cape Town"
    />
  );
}
```

---

### 7. PersonalityQuiz

**File**: `components/modals/PersonalityQuiz.jsx`

**Purpose**: Multi-step personality quiz for matching users. Supports multiple question types including choice questions and scale questions (1-10).

**Props**:
- `isOpen` (boolean): Controls modal visibility
- `onClose` (function): Callback when modal is closed
- `onComplete` (function): Callback with array of answers when quiz is complete
- `onBack` (function, optional): Callback for back navigation

**Question Types**:
- **Choice**: Two-option questions with icons (e.g., "Big Ideas" vs "Everyday Life")
- **Scale**: 1-10 scale questions with labels (e.g., "I am an introverted person")

**Usage**:
```jsx
import PersonalityQuiz from '@/components/modals/PersonalityQuiz';

function MyComponent() {
  const [isOpen, setIsOpen] = useState(false);
  
  const handleComplete = (answers) => {
    console.log('Quiz answers:', answers);
    // ['big-ideas', 'new-experiences', 7, 'deep']
  };
  
  return (
    <PersonalityQuiz
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      onComplete={handleComplete}
      onBack={() => console.log('Go back')}
    />
  );
}
```

---

### 8. IdentityQuiz

**File**: `components/modals/IdentityQuiz.jsx`

**Purpose**: Collects user identity information (gender, relationship status, industry, nationality).

**Props**:
- `isOpen` (boolean): Controls modal visibility
- `onClose` (function): Callback when modal is closed
- `onComplete` (function): Callback with array of answers when quiz is complete
- `onBack` (function, optional): Callback for back navigation

**Question Types**:
- **Single Select**: Multiple choice questions (e.g., gender, relationship status, industry)
- **Searchable Select**: Searchable dropdown for nationality

**Usage**:
```jsx
import IdentityQuiz from '@/components/modals/IdentityQuiz';

function MyComponent() {
  const [isOpen, setIsOpen] = useState(false);
  
  const handleComplete = (answers) => {
    console.log('Identity answers:', answers);
    // ['women', 'flying-solo', 'technology', 'South African']
  };
  
  return (
    <IdentityQuiz
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      onComplete={handleComplete}
      onBack={() => console.log('Go back')}
    />
  );
}
```

---

### 9. QuizResult

**File**: `components/modals/QuizResult.jsx`

**Purpose**: Displays quiz completion result with compatibility percentage.

**Props**:
- `isOpen` (boolean): Controls modal visibility
- `onClose` (function): Callback when modal is closed
- `compatibilityScore` (number, default: 90): Compatibility percentage to display
- `onContinue` (function, optional): Callback when user clicks continue

**Usage**:
```jsx
import QuizResult from '@/components/modals/QuizResult';

function MyComponent() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <QuizResult
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      compatibilityScore={90}
      onContinue={() => {
        setIsOpen(false);
        // Navigate to next step
      }}
    />
  );
}
```

---

## Complete User Flow Example

Here's an example of how to chain these modals together for a complete user flow:

```jsx
"use client";

import { useState } from 'react';
import {
  CitySelectionModal,
  AreaSelectionModal,
  PersonalityQuiz,
  IdentityQuiz,
  QuizResult,
  PreferencesForm,
  DinnerConfirmation,
  PricingModal,
} from '@/components/modals';

export default function OnboardingFlow() {
  const [step, setStep] = useState('city');
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedArea, setSelectedArea] = useState(null);
  const [personalityAnswers, setPersonalityAnswers] = useState(null);
  const [identityAnswers, setIdentityAnswers] = useState(null);
  const [preferences, setPreferences] = useState(null);

  return (
    <>
      {/* Step 1: City Selection */}
      <CitySelectionModal
        isOpen={step === 'city'}
        onClose={() => setStep(null)}
        onSelectCity={(city) => {
          setSelectedCity(city);
          setStep('area');
        }}
      />

      {/* Step 2: Area Selection */}
      <AreaSelectionModal
        isOpen={step === 'area'}
        onClose={() => setStep('city')}
        onSelectArea={(area) => {
          if (area) {
            setSelectedArea(area);
          }
          setStep('personality-quiz');
        }}
        city={selectedCity?.name}
      />

      {/* Step 3: Personality Quiz */}
      <PersonalityQuiz
        isOpen={step === 'personality-quiz'}
        onClose={() => setStep('area')}
        onBack={() => setStep('area')}
        onComplete={(answers) => {
          setPersonalityAnswers(answers);
          setStep('identity-quiz');
        }}
      />

      {/* Step 4: Identity Quiz */}
      <IdentityQuiz
        isOpen={step === 'identity-quiz'}
        onClose={() => setStep('personality-quiz')}
        onBack={() => setStep('personality-quiz')}
        onComplete={(answers) => {
          setIdentityAnswers(answers);
          setStep('quiz-result');
        }}
      />

      {/* Step 5: Quiz Result */}
      <QuizResult
        isOpen={step === 'quiz-result'}
        onClose={() => setStep('identity-quiz')}
        compatibilityScore={90}
        onContinue={() => {
          setStep('preferences');
        }}
      />

      {/* Step 6: Preferences */}
      {step === 'preferences' && (
        <div className="fixed inset-0 bg-[#0F1123] md:bg-black/80 z-50 flex items-center justify-center p-4">
          <PreferencesForm
            onContinue={(prefs) => {
              setPreferences(prefs);
              setStep('confirmation');
            }}
            onBack={() => setStep('quiz-result')}
          />
        </div>
      )}

      {/* Step 7: Confirmation */}
      {step === 'confirmation' && (
        <div className="fixed inset-0 bg-[#0F1123] md:bg-black/80 z-50 flex items-center justify-center p-4">
          <DinnerConfirmation
            preferences={preferences}
            onEdit={() => setStep('preferences')}
            onConfirm={() => setStep('pricing')}
          />
        </div>
      )}

      {/* Step 8: Pricing */}
      <PricingModal
        isOpen={step === 'pricing'}
        onClose={() => setStep(null)}
        onSelectPlan={(planId) => {
          console.log('Selected plan:', planId);
          // Proceed to checkout
        }}
      />
    </>
  );
}
```

## Styling

All components use Tailwind CSS with the following design tokens:
- Background: `bg-[#1a1f2e]` (dark blue-gray)
- Primary: `bg-[#F97315]` (orange)
- Text: `text-white` for headings, `text-gray-400` for secondary text
- Borders: `border-gray-700` for inputs and cards

## Accessibility

- All modals include proper ARIA labels
- Close buttons have `aria-label="Close modal"`
- Form inputs have proper labels
- Keyboard navigation supported (ESC to close)

## Responsive Design

All modals are responsive and work on:
- Mobile (320px+)
- Tablet (768px+)
- Desktop (1024px+)

Modals automatically adjust their width and padding based on screen size.

