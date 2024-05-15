import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://xvmdoogeotezpfwoptzl.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh2bWRvb2dlb3RlenBmd29wdHpsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU3NjUyOTgsImV4cCI6MjAzMTM0MTI5OH0.1T1vtWtUFsUbnKGASiNRHdHbim6Yv8oQ7Klr1SOAzqc"
);
