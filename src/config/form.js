/** Inbox for consultation form */
export const FORM_EMAIL = 'amanpandey.developer@gmail.com'

/**
 * Optional silent send (no mail app opens):
 * Get free key from https://web3forms.com → put in `.env`
 * VITE_WEB3FORMS_ACCESS_KEY=your_key
 */
export const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || ''
export const WEB3FORMS_URL = 'https://api.web3forms.com/submit'
