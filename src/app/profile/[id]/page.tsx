export default function UserProfile({ params }: any) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>User Profile</h1>
      <hr />
      <p className="text-4xl">
        This is the user profile page content for user {params.id}.
      </p>
    </div>
  );
}
