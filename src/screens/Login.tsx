import { useState } from "react";
import { RoundedContainer } from "@components/Common/Containers/RoundedContainer";
import { AuthServices } from "@services/api";
import { useRouter } from "next/router";
import styled from "styled-components";

export const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const _AuthServices = new AuthServices();
  const router = useRouter();

  async function login(e) {
    e.preventDefault();

    if (email != "") {
      const validateEmail = (email) => {
        return email.match(
          /^(([^<>()[\]\\.,;:\s@]+(\.[^<>()[\]\\.,;:\s@]+)*)|(.+))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3})|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        );
      };

      if (!validateEmail(email)) {
        document.querySelector("#email").classList.add("has-error");
        document.querySelector(".response").innerHTML =
          "Please enter a valid email";
        document.querySelector(".response").classList.add("is-visible");
        return;
      }
    }

    if (email != "" && password != "") {
      document.querySelector(".response").classList.remove("is-visible");
      document.querySelector("#email").classList.remove("has-error");
      document.querySelector("#password").classList.remove("has-error");

      const user = await _AuthServices.signIn({
        email,
        password,
      });
      if (user.data.user != null) {
        router.push("/profile");
      } else {
        document.querySelector(".response").innerHTML =
          "Wrong email or password";
        document.querySelector(".response").classList.add("is-visible");
      }
    } else {
      if (email == "") {
        document.querySelector("#email").classList.add("has-error");
      } else {
        document.querySelector("#email").classList.remove("has-error");
      }

      if (password == "") {
        document.querySelector("#password").classList.add("has-error");
      } else {
        document.querySelector("#password").classList.remove("has-error");
      }

      document.querySelector(".response").innerHTML = "Please fill all fields";
      document.querySelector(".response").classList.add("is-visible");
    }
  }
  return (
    <>
      <HomeContainer>
        <Title>Log in</Title>
        <SectionContainer>
          <RoundedContainer padding="15% 15%">
            <Form action="">
              <Response className="response">test</Response>
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />

              <Label htmlFor="password">Password</Label>
              <Input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />

              <Button type="submit" onClick={login}>
                Log in
              </Button>
            </Form>
          </RoundedContainer>
        </SectionContainer>
      </HomeContainer>
    </>
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
  gap: 50px;
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
  background: ${({ theme }) => theme.colors.dark};
  color: white;
  text-align: center;
  font-size: ${({ theme }) => theme.size.title};
`;

const Response = styled.p`
  display: none;
  color: red;
  text-align: center;

  &.is-visible {
    display: block;
  }
`;
