import { supabase } from '../config/supabase';

export async function updateProfile(
  userId: string,
  updates: Record<string, unknown>
): Promise<unknown> {
  const client = supabase;
  if (!client) return null;
  const { data, error } = await client
    .from('user_profiles')
    .update({ ...updates, updated_at: new Date().toISOString() })
    .eq('id', userId)
    .select()
    .single();
  if (error) throw error;
  return data;
}
