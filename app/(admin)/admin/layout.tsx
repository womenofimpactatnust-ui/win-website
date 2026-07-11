export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // TODO: gate with Supabase auth session check once credentials are wired up.
  return <div className="min-h-full bg-secondary/30">{children}</div>;
}
