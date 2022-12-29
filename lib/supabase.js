import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://jxwoycuaqkohdlgqlrrf.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp4d295Y3VhcWtvaGRsZ3FscnJmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzE4NDMyOTAsImV4cCI6MTk4NzQxOTI5MH0.1HLothrRLPNaH-El2q-U3BxFbLI7N-BcW0Zg_hjHqes"

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})