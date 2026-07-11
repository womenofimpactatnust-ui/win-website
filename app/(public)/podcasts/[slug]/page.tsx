export default async function PodcastPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return (
    <main>
      <h1>Podcast: {slug}</h1>
    </main>
  );
}
