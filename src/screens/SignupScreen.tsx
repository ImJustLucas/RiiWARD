import { useState } from "react";
import { useEffect } from "react";
import { RoundedContainer } from "@components/Common/Containers/RoundedContainer";
import { AuthServices } from "@services/api";
import { validateEmail } from "@utils/ValidateEmail";
import { useRouter } from "next/router";
import styled from "styled-components";

const _AuthServices = new AuthServices();

type ErrorType = {
  message: string;
  isError: boolean;
};

export const SignupScreen: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<ErrorType>({
    message: "",
    isError: false,
  });
  const [disabled, setDisabled] = useState<boolean>(false);

  const router = useRouter();

  useEffect(() => {
    if (email != "" && password != "") {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [email, password]);

  async function signup(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();

    if (email !== "") {
      if (!validateEmail(email)) {
        setError({
          message: "Please enter a valid email",
          isError: true,
        });
        return;
      }
    }

    if (email !== "" && password !== "") {
      setError({
        message: "",
        isError: false,
      });
      const user = await _AuthServices.signUp({
        email,
        password,
      });
      console.log(user);
      if (user.data.user !== null) {
        router.push("/profile");
      } else {
        setError({
          message: "Something went wrong FF",
          isError: true,
        });
      }
    }
  }

  return (
    <HomeContainer>
      <Title>Sign up</Title>
      <SectionContainer>
        <RoundedContainer padding="15% 15%">
          <Form action="">
            {error.isError && <ErrorDisplay>{error.message}</ErrorDisplay>}

            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            ></Input>

            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            ></Input>

            <Button type="submit" onClick={signup} disabled={disabled}>
              Sign in
            </Button>
          </Form>
        </RoundedContainer>
      </SectionContainer>
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  height: calc(100vh - 100px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.size.extraTitle};
  text-transform: uppercase;
`;

const SectionContainer = styled.div`
  width: 80vw;
  max-width: 750px;
`;
const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const Input = styled.input`
  box-sizing: border-box;
  border: 1px solid ${({ theme }) => theme.colors.black};
  border-radius: 24px;
  width: 100%;
  height: 70px;
  padding: 8px 16px;

  &.has-error {
    border-color: red;
  }
`;

const Label = styled.label`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
`;

const Button = styled.button`
  box-sizing: border-box;
  border: 1px solid ${({ theme }) => theme.colors.black};
  border-radius: 24px;
  height: 70px;
  background: #212529;
  color: white;
  text-align: center;
  font-size: ${({ theme }) => theme.size.title};
`;

const ErrorDisplay = styled.p`
  color: red;
  text-align: center;
`;
