import * as yup from 'yup';

const emailValidation = yup.string().email('Please enter a valid email address').required('Email is required');
const passwordValidation = yup.string()
  .min(8, 'Password must be at least 8 characters')
  .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, 'Password must contain at least one uppercase letter, one lowercase letter, and one number')
  .required('Password is required');
const requiredString = (label) => yup.string().required(`${label} is required`);
export const isSAPhone = (value) => {
  if (!value) return false;
  const stripped = value.replace(/[\s\-\(\)]/g, '');
  return /^(\+27|27)[0-9]{9}$/.test(stripped) || /^0[0-9]{9}$/.test(stripped);
};

/** Compact +27… form for API payloads (register / profile). */
export const normalizeSAPhoneForApi = (value) => {
  if (!value || typeof value !== 'string') return '';
  const stripped = value.replace(/[\s\-\(\)]/g, '');
  if (/^\+27[0-9]{9}$/.test(stripped)) return stripped;
  if (/^27[0-9]{9}$/.test(stripped)) return `+${stripped}`;
  if (/^0[0-9]{9}$/.test(stripped)) return `+27${stripped.slice(1)}`;
  return '';
};
const phoneValidation = yup.string().test(
  'sa-phone',
  'Please enter a valid South African phone number (e.g. 082 123 4567 or +27 82 123 4567)',
  (value) => !value || isSAPhone(value)
);

export const loginSchema = yup.object().shape({
  email: emailValidation,
  password: yup.string().required('Password is required'),
});

export const adminLoginSchema = yup.object().shape({
  email: emailValidation,
  password: yup.string().required('Password is required'),
});

export const signupSchema = yup.object().shape({
  first_name: requiredString('First name'),
  last_name: requiredString('Last name'),
  email: emailValidation,
  password: passwordValidation,
  mobile_number: phoneValidation.optional(), // Optional for now as SignupPage doesn't have it
});

export const forgotPasswordSchema = yup.object().shape({
  email: emailValidation,
});

export const resetPasswordSchema = yup.object().shape({
  new_password: passwordValidation,
  confirm_password: yup
    .string()
    .required('Please confirm your password')
    .oneOf([yup.ref('new_password')], 'Passwords must match'),
});

export const editProfileSchema = yup.object().shape({
  fullName: requiredString('Full name'),
  email: yup.string().email('Invalid email').optional(),
  phoneNumber: yup.string()
    .test('sa-phone', 'Please enter a valid South African phone number (e.g. 082 123 4567 or +27 82 123 4567)', (value) => !value || isSAPhone(value))
    .nullable()
    .optional(),
  languages: yup.array().of(yup.string()).min(1, 'Select at least one language'),
  priceRange: requiredString('Price range'),
  menuPreferences: yup.array().of(yup.string()).optional(),
  gender: yup.string().optional(),
  relationship_status: yup.string().optional(),
  industry: yup.string().optional(),
  nationality: yup.string().optional(),
  language: yup.string().optional(),
  date_of_birth: yup.string().optional(),
});

export const dinnerSchema = yup.object().shape({
  title: requiredString('Title'),
  date: requiredString('Date and time'),
  location: requiredString('Location'),
  dinner_type: requiredString('Status'),
  is_published: yup.boolean(),
});

/** IDs from APIs / dropdowns may be non-strings; coerce so validation matches UI selection. */
const requiredIdLike = (label) =>
  yup
    .mixed()
    .transform((v) => {
      if (v == null || v === '') return '';
      return String(v).trim();
    })
    .test('required', `${label} is required`, (v) => typeof v === 'string' && v.length > 0);

export const restaurantSchema = yup.object().shape({
  name: requiredString('Name'),
  city: requiredIdLike('City'),
  location: requiredIdLike('Location'),
  number: yup
    .string()
    .required('Contact number is required')
    .test(
      'sa-phone',
      'Please enter a valid South African phone number (e.g. 082 123 4567 or +27 82 123 4567)',
      (value) => isSAPhone(value),
    ),
  price: yup
    .number()
    .nullable()
    .optional()
    .transform((value, orig) => (orig === '' || orig === undefined ? null : (isNaN(Number(orig)) ? undefined : Number(orig))))
    .positive('Price must be greater than 0'),
  budget: requiredString('Budget'),
  is_meat: yup.boolean(),
  is_vegetarian: yup.boolean(),
  is_vegan: yup.boolean(),
  is_fish: yup.boolean(),
  is_halal: yup.boolean(),
  is_others: yup.boolean(),
});

export const quizSchema = yup.object().shape({
  code: requiredString('Title').max(150, 'Title must be at most 150 characters'),
  text: requiredString('Question').max(150, 'Question must be at most 150 characters'),
  section: requiredString('Section'),
  answer_type: requiredString('Answer type'),
  min_value: yup.number()
    .nullable()
    .transform((v, o) => (o === '' ? null : v))
    .when('answer_type', {
      is: 'scale',
      then: (schema) => schema
        .required('Min value is required for scale questions')
        .min(1, 'Min value must be at least 1')
        .test('less-than-max', 'Min value must be less than Max value', function (value) {
          const { max_value } = this.parent;
          return !max_value || !value || value < max_value;
        }),
      otherwise: (schema) => schema.nullable(),
    }),
  max_value: yup.number()
    .nullable()
    .transform((v, o) => (o === '' ? null : v))
    .when('answer_type', {
      is: 'scale',
      then: (schema) => schema
        .required('Max value is required for scale questions')
        .max(15, 'Max value must be at most 15')
        .moreThan(yup.ref('min_value'), 'Max value must be greater than Min value'),
      otherwise: (schema) => schema.nullable(),
    }),
  sort_order: yup.number().integer().min(1),
  is_active: yup.boolean(),
});

export const contactSchema = yup.object().shape({
  email: emailValidation,
  name: requiredString('Name'),
  reason: requiredString('Reason'),
  subject: requiredString('Subject'),
  description: requiredString('Description'),
});

export const createGroupSchema = yup.object().shape({
  groupName: requiredString('Group Name'),
  selectedDinnerForGroup: requiredString('Dinner'),
  selectedUsers: yup.array().of(yup.string()).min(1, 'Select at least one user'),
});
