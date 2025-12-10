/*
  # Create contact submissions table

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key) - Unique identifier for each submission
      - `name` (text) - Contact person's name
      - `company` (text) - Company name (optional)
      - `email` (text) - Contact email address
      - `message` (text) - Inquiry message
      - `budget_bracket` (text) - Budget range (optional)
      - `created_at` (timestamptz) - Timestamp of submission
      - `status` (text) - Status of inquiry (default: 'new')
  
  2. Security
    - Enable RLS on `contact_submissions` table
    - Add policy for public inserts (anyone can submit)
    - Add policy for authenticated admin reads
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  company text,
  email text NOT NULL,
  message text NOT NULL,
  budget_bracket text,
  status text DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view all submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);
