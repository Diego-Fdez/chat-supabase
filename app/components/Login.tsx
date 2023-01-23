import { useSupabase } from '~/hooks/useSupabase';

export function Login() {
  const supabase = useSupabase();

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error(error);
    }
  };

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'github',
    });

    if (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ display: 'flex', gap: '12px' }}>
      <button onClick={handleLogout}>Close Session</button>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
