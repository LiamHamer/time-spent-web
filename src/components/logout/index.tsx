import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@heroui/react";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <Button onPress={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </Button>
  );
};

export default LogoutButton;