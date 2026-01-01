/**
 * Role Management Utilities
 * 
 * These utilities help manage user roles and permissions.
 * This is a lightweight implementation as per requirements.
 */

export const ROLES = {
  USER: 'user',
  ADMIN: 'admin',
};

/**
 * Check if user has admin role
 * 
 * @param {Object} user - User object with role property
 * @returns {boolean}
 */
export function isAdmin(user) {
  return user?.role === ROLES.ADMIN;
}

/**
 * Check if user has user role (or any role)
 * 
 * @param {Object} user - User object with role property
 * @returns {boolean}
 */
export function isUser(user) {
  return user?.role === ROLES.USER || user?.role === ROLES.ADMIN;
}

/**
 * Require admin role - throws error if user is not admin
 * Use in API routes or server-side code
 * 
 * @param {Object} user - User object with role property
 * @throws {Error} If user is not admin
 */
export function requireAdmin(user) {
  if (!isAdmin(user)) {
    throw new Error('Admin access required');
  }
}

/**
 * Get role display name
 * 
 * @param {string} role - Role string
 * @returns {string} Display name
 */
export function getRoleDisplayName(role) {
  const roleMap = {
    [ROLES.USER]: 'User',
    [ROLES.ADMIN]: 'Admin',
  };
  return roleMap[role] || 'Unknown';
}

