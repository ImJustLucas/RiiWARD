import { useState } from "react";
import { RoundedContainer } from "@components/Common/Containers/RoundedContainer";
import { AuthServices } from "@services/api";
import { validateEmail } from "@utils/ValidateEmail";
import Link from "next/link";
import { useRouter } from "next/router";
import { toast } from "sonner";
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

  const router = useRouter();

  async function signup(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();

    if (email == "" && password == "") {
      setError({
        message: "Please enter a valid email and password",
        isError: true,
      });
      toast.error("Please enter a valid email and password");
      return;
    }

    if (!validateEmail(email)) {
      setError({
        message: "Please enter a valid email",
        isError: true,
      });
      toast.error("Please enter a valid email");
      return;
    }

    if (password == "") {
      setError({
        message: "Please enter a valid password",
        isError: true,
      });
      toast.error("Please enter a valid password");
      return;
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
        router.push("/users/me");
      } else {
        setError({
          message: "Something went wrong FF",
          isError: true,
        });
        toast.error("Something went wrong FF");
      }
    }
  }

  return (
    <HomeContainer>
      <RoundedContainer padding="10% 15%" customStyles={roundedStyles}>
        <FormHeader>
          <BackLink href="/">
            <ArrowBack className="ri-arrow-left-line"></ArrowBack>
          </BackLink>
          <FormTitle>
            R<SpanTitle>ii</SpanTitle>WARD
          </FormTitle>
        </FormHeader>
        <Form action="">
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            className={error.isError ? "has-error" : ""}
          ></Input>

          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            className={error.isError ? "has-error" : ""}
          ></Input>

          <Button type="submit" onClick={signup}>
            Sign up
          </Button>
        </Form>
        <Separator />
        <ButtonLink href="signin">Sign in</ButtonLink>
      </RoundedContainer>
    </HomeContainer>
  );
};

const roundedStyles = `
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 350px;
  position: relative
`;

const HomeContainer = styled.div`
  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
`;

const FormHeader = styled.div`
  position: relative;
`;

const BackLink = styled.a`
  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  left: -16px;
`;

const ArrowBack = styled.i`
  font-size: ${({ theme }) => theme.size.large};
  color: ${({ theme }) => theme.colors.dark};
`;

const FormTitle = styled.h1`
  font-size: ${({ theme }) => theme.size.extraTitle};
  font-family: "Space Grotesk", sans-serif;
  color: ${({ theme }) => theme.colors.dark};
  text-align: center;
`;

const SpanTitle = styled.span`
  font-size: ${({ theme }) => theme.size.extraTitle};
  font-family: "Space Grotesk", sans-serif;
  color: ${({ theme }) => theme.colors.blue};
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const Input = styled.input`
  box-sizing: border-box;
  border: 1px solid ${({ theme }) => theme.colors.black};
  border-radius: 24px;
  width: 100%;
  height: 35px;
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

const Separator = styled.div`
  height: 2px;
  background: ${({ theme }) => theme.colors.dark};
`;

const Button = styled.button`
  box-sizing: border-box;
  border-radius: 24px;
  height: 35px;
  background: ${({ theme }) => theme.colors.blue};
  width: fit-content;
  margin: 0 auto;
  font-weight: 600;
  padding: 8px 24px;
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  font-size: ${({ theme }) => theme.size.normal};
  transition: 0.3s;
  border: 2px solid ${({ theme }) => theme.colors.blue};

  &:hover {
    background: none;
    color: ${({ theme }) => theme.colors.blue};
  }
`;

const ButtonLink = styled(Link)`
  box-sizing: border-box;
  border-radius: 24px;
  height: 35px;
  width: fit-content;
  margin: 0 auto;
  padding: 8px 24px;
  color: ${({ theme }) => theme.colors.dark};
  text-align: center;
  font-size: ${({ theme }) => theme.size.normal};
  transition: 0.3s;
  font-weight: 600;
  border: 2px solid ${({ theme }) => theme.colors.dark};

  &:hover {
    background: ${({ theme }) => theme.colors.dark};
    color: ${({ theme }) => theme.colors.white};
  }
`;
