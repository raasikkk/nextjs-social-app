import { getProfileByUsername } from "@/actions/profile.action";

export async function generateMetadata({
  params,
}: {
  params: { username: string };
}) {
  const user = await getProfileByUsername(params.username);
  if (!user) return;

  return {
    title: `${user.name ?? user.username}`,
    description: user.bio || `Check out ${user.username}'s profile.`,
  };
}

async function ProfilePage({ params }: { params: { username: string } }) {
  return <div>ProfilePage</div>;
}

export default ProfilePage;
