import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";

export function Member() {
  const { user } = useAuth0();

  return <div>Member</div>;
}

export default withAuthenticationRequired(Member, {
  onRedirecting: () => <p>Loading...</p>,
});
