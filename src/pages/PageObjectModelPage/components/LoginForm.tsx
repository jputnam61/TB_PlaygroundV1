import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

export function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(true);
    // Reset success message after 3 seconds
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <Card className="border-2 border-blue-500/20">
      <CardHeader className="border-b border-blue-500/20 bg-blue-500/5">
        <CardTitle className="text-blue-500">Login Page</CardTitle>
        <CardDescription>Authentication form with validation</CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <form className="space-y-4" data-testid="login-form" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              name="username"
              data-testid="username-input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              name="password"
              type="password"
              data-testid="password-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-4">
            <Button data-testid="login-button" type="submit">
              Login
            </Button>
            {showSuccess && (
              <div className="flex items-center gap-2 text-green-500" data-testid="login-success">
                <CheckCircle className="h-5 w-5" />
                <span>Successfully logged in!</span>
              </div>
            )}
          </div>
        </form>
      </CardContent>
    </Card>
  );
}