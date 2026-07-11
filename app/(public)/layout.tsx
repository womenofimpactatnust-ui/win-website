import { Footer } from "@/components/layout/footer";

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-full flex-col">
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
}
