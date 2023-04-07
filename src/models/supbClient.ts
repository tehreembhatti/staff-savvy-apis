import { createClient } from '@supabase/supabase-js';
// Create a Superbase client instance
const client = createClient(`https://${process.env.SUPERBASE_PROJECT_ID}.supabase.co`, process.env.SUPERBASE_PUBLIC_CLIENT_ID);
export default client;
