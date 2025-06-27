import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@heroui/react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <Button onPress={() => loginWithRedirect()}>Log In</Button>;
};

export default LoginButton;