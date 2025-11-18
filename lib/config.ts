/**
 * Configuration for backend URLs
 * Automatically switches between local and production based on environment
 */

// Check if we're in production environment
const isProduction = process.env.NEXT_PUBLIC_ENV === 'production';

// Backend URLs
const LOCAL_BACKEND_URL = 'http://localhost:8000';
const PRODUCTION_BACKEND_URL = 'http://34.93.96.58:8000';

/**
 * Get the appropriate backend URL based on environment
 */
export function getBackendUrl(): string {
  // Allow override via environment variable
  if (process.env.BACKEND_URL) {
    return process.env.BACKEND_URL;
  }
  
  if (process.env.NEXT_PUBLIC_BACKEND_URL) {
    return process.env.NEXT_PUBLIC_BACKEND_URL;
  }
  
  // Default based on environment
  return isProduction ? PRODUCTION_BACKEND_URL : LOCAL_BACKEND_URL;
}

// Export the current backend URL
export const BACKEND_URL = getBackendUrl();

// Log which backend we're using (only in development)
if (process.env.NODE_ENV === 'development') {
  console.log(`🔗 Using backend: ${BACKEND_URL} (${isProduction ? 'production' : 'local'})`);
}

