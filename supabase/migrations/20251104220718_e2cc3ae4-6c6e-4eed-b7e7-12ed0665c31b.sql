-- Create profiles table for user data
CREATE TABLE public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name TEXT,
  email TEXT,
  phone TEXT,
  date_of_birth DATE,
  education_level TEXT,
  interests TEXT[],
  avatar_url TEXT,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Create formations table
CREATE TABLE public.formations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT,
  category TEXT NOT NULL,
  level TEXT NOT NULL,
  duration TEXT,
  country TEXT NOT NULL,
  city TEXT,
  institution TEXT NOT NULL,
  tuition_fees DECIMAL,
  currency TEXT DEFAULT 'USD',
  language TEXT,
  admission_requirements TEXT,
  career_prospects TEXT[],
  website_url TEXT,
  image_url TEXT,
  rating DECIMAL DEFAULT 0,
  total_reviews INTEGER DEFAULT 0,
  is_featured BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Create mentors table
CREATE TABLE public.mentors (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  expertise_areas TEXT[] NOT NULL,
  bio TEXT,
  years_of_experience INTEGER,
  education TEXT,
  current_position TEXT,
  company TEXT,
  hourly_rate DECIMAL,
  currency TEXT DEFAULT 'USD',
  languages TEXT[],
  availability_schedule JSONB,
  total_sessions INTEGER DEFAULT 0,
  average_rating DECIMAL DEFAULT 0,
  is_verified BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Create orientation_tests table
CREATE TABLE public.orientation_tests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  test_type TEXT NOT NULL,
  responses JSONB NOT NULL,
  results JSONB NOT NULL,
  recommended_careers TEXT[],
  recommended_formations UUID[],
  completed_at TIMESTAMPTZ DEFAULT now()
);

-- Create mentorship_sessions table
CREATE TABLE public.mentorship_sessions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  mentor_id UUID REFERENCES public.mentors(id) ON DELETE CASCADE,
  mentee_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  session_date TIMESTAMPTZ NOT NULL,
  duration_minutes INTEGER NOT NULL,
  status TEXT DEFAULT 'scheduled',
  meeting_link TEXT,
  notes TEXT,
  rating INTEGER,
  feedback TEXT,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Create opportunities table
CREATE TABLE public.opportunities (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT,
  type TEXT NOT NULL,
  company TEXT,
  location TEXT,
  country TEXT,
  is_remote BOOLEAN DEFAULT false,
  salary_min DECIMAL,
  salary_max DECIMAL,
  currency TEXT DEFAULT 'USD',
  requirements TEXT[],
  application_url TEXT,
  deadline TIMESTAMPTZ,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Create events table
CREATE TABLE public.events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT,
  event_type TEXT NOT NULL,
  event_date TIMESTAMPTZ NOT NULL,
  end_date TIMESTAMPTZ,
  location TEXT,
  is_online BOOLEAN DEFAULT false,
  meeting_link TEXT,
  organizer TEXT,
  max_participants INTEGER,
  current_participants INTEGER DEFAULT 0,
  registration_url TEXT,
  image_url TEXT,
  is_featured BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Create chat_conversations table
CREATE TABLE public.chat_conversations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  title TEXT,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Create chat_messages table
CREATE TABLE public.chat_messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  conversation_id UUID REFERENCES public.chat_conversations(id) ON DELETE CASCADE,
  role TEXT NOT NULL,
  content TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.formations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.mentors ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.orientation_tests ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.mentorship_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.opportunities ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.events ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.chat_conversations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.chat_messages ENABLE ROW LEVEL SECURITY;

-- RLS Policies for profiles
CREATE POLICY "Users can view their own profile" ON public.profiles FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Users can update their own profile" ON public.profiles FOR UPDATE USING (auth.uid() = id);
CREATE POLICY "Users can insert their own profile" ON public.profiles FOR INSERT WITH CHECK (auth.uid() = id);

-- RLS Policies for formations (public read)
CREATE POLICY "Everyone can view formations" ON public.formations FOR SELECT USING (true);

-- RLS Policies for mentors (public read)
CREATE POLICY "Everyone can view mentors" ON public.mentors FOR SELECT USING (true);
CREATE POLICY "Mentors can update their profile" ON public.mentors FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users can become mentors" ON public.mentors FOR INSERT WITH CHECK (auth.uid() = user_id);

-- RLS Policies for orientation_tests
CREATE POLICY "Users can view their own tests" ON public.orientation_tests FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can create their own tests" ON public.orientation_tests FOR INSERT WITH CHECK (auth.uid() = user_id);

-- RLS Policies for mentorship_sessions
CREATE POLICY "Users can view their sessions" ON public.mentorship_sessions FOR SELECT USING (
  auth.uid() IN (
    SELECT user_id FROM public.mentors WHERE id = mentor_id
    UNION
    SELECT mentee_id
  )
);
CREATE POLICY "Mentees can create sessions" ON public.mentorship_sessions FOR INSERT WITH CHECK (auth.uid() = mentee_id);
CREATE POLICY "Users can update their sessions" ON public.mentorship_sessions FOR UPDATE USING (
  auth.uid() IN (
    SELECT user_id FROM public.mentors WHERE id = mentor_id
    UNION
    SELECT mentee_id
  )
);

-- RLS Policies for opportunities (public read)
CREATE POLICY "Everyone can view active opportunities" ON public.opportunities FOR SELECT USING (is_active = true);

-- RLS Policies for events (public read)
CREATE POLICY "Everyone can view events" ON public.events FOR SELECT USING (true);

-- RLS Policies for chat conversations
CREATE POLICY "Users can view their conversations" ON public.chat_conversations FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can create conversations" ON public.chat_conversations FOR INSERT WITH CHECK (auth.uid() = user_id);

-- RLS Policies for chat messages
CREATE POLICY "Users can view messages from their conversations" ON public.chat_messages FOR SELECT USING (
  conversation_id IN (SELECT id FROM public.chat_conversations WHERE user_id = auth.uid())
);
CREATE POLICY "Users can create messages in their conversations" ON public.chat_messages FOR INSERT WITH CHECK (
  conversation_id IN (SELECT id FROM public.chat_conversations WHERE user_id = auth.uid())
);

-- Create function to handle new user signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  INSERT INTO public.profiles (id, email, full_name)
  VALUES (
    new.id,
    new.email,
    new.raw_user_meta_data->>'full_name'
  );
  RETURN new;
END;
$$;

-- Create trigger for new user signup
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER
LANGUAGE plpgsql
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

-- Create triggers for updated_at
CREATE TRIGGER set_updated_at BEFORE UPDATE ON public.profiles FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();
CREATE TRIGGER set_updated_at BEFORE UPDATE ON public.formations FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();
CREATE TRIGGER set_updated_at BEFORE UPDATE ON public.mentors FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();
CREATE TRIGGER set_updated_at BEFORE UPDATE ON public.mentorship_sessions FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();
CREATE TRIGGER set_updated_at BEFORE UPDATE ON public.opportunities FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();
CREATE TRIGGER set_updated_at BEFORE UPDATE ON public.events FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();
CREATE TRIGGER set_updated_at BEFORE UPDATE ON public.chat_conversations FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();