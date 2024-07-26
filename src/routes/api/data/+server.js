// Import the Supabase client and dotenv
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config({ path: './.env' });

// Ensure the environment variables are defined
const supabaseUrl = process.env.SUPABASE_URL1;
const supabaseKey = process.env.SUPABASE_KEY1;

if (!supabaseUrl || !supabaseKey) {
  throw new Error("Supabase URL and Key must be provided");
}

console.log('Supabase URL:', supabaseUrl);
console.log('Supabase Key:', supabaseKey);

// Create a single Supabase client for interacting with your database
const supabase = createClient(supabaseUrl, supabaseKey);

console.log('Supabase client created');

// GET function to fetch data
export async function GET() {
  console.log('GET function called');
  try {
    const { data, error } = await supabase
      .from('TrumpsDocuments')
      .select('title')
      .limit(10);

    console.log('Attempting Supabase data pull');
    
    if (error) {
      console.error('Error fetching data:', error);
      return {
        status: 500,
        body: { error: true, data: null }
      };
    }

    // Log the fetched data
    console.log('Fetched data:', data);
    return {
      status: 200,
      body: { error: false, data }
    };
  } catch (err) {
    console.error('Fetch error:', err);
    return {
      status: 500,
      body: { error: true, data: null }
    };
  }
}
