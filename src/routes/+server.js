// Import the Supabase client and dotenv
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config({ path: './.env' });

// Ensure the environment variables are defined
const supabaseUrl = process.env.SUPABASE_URL1;
const supabaseKey = process.env.SUPABASE_KEY1;

console.log('Supabase URL:', supabaseUrl); // Debugging log
console.log('Supabase Key:', supabaseKey); // Debugging log

if (!supabaseUrl || !supabaseKey) {
  throw new Error("Supabase URL and Key must be provided");
}

// Create a single Supabase client for interacting with your database
const supabase = createClient(supabaseUrl, supabaseKey);

// Load function to fetch data
export async function load() {
  try {
    console.log('Fetching data...');

    const { data, error } = await supabase
      .from('TrumpsDocuments')
      .select('title')
      .limit(10);

    if (error) {
      console.error('Error fetching data:', error);
      return { error: true, data: null };
    }

    // No logging of data here to avoid duplication
    return { error: false, data: data };
  } catch (err) {
    console.error('Fetch error:', err);
    return { error: true, data: null };
  }
}

// Example usage of the load function
load().then(result => {
  if (result.error) {
    console.error('Failed to load data');
  } else {
    console.log('Loaded data:', result.data);
  }
});
