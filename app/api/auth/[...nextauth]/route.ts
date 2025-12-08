import { auth } from '@/auth';

// Use `any` in the wrapper to avoid TypeScript type incompatibilities
// between the NextAuth middleware type and the App Router handler
// signature during the Vercel build. At runtime NextAuth will handle
// the request as expected.
export const GET = async (req: any) => {
	return (auth as any)(req);
};

export const POST = async (req: any) => {
	return (auth as any)(req);
};
