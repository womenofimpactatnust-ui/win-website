export default async function StoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return (
    <main>
      <h1>Story: {slug}</h1>
    </main>
  );
}
