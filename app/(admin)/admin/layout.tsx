export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // TODO: gate with Supabase auth session check once credentials are wired up.
  return <div className="flex min-h-full flex-col">{children}</div>;
}
