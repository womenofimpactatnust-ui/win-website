export default async function NewsletterArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return (
    <main>
      <h1>Newsletter: {slug}</h1>
    </main>
  );
}
