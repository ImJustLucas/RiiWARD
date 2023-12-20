import { useState } from "react";
import { RoundedContainer } from "@components/Common/Containers/RoundedContainer";
import { AuthServices } from "@services/api";
import { validateEmail } from "@utils/ValidateEmail";
import { useRouter } from "next/router";
import styled from "styled-components";

export const SignupScreen: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const _AuthServices = new AuthServices();
  const router = useRouter();

  async function signin(e) {
    e.preventDefault();

    if (email != "") {
      if (!validateEmail(email)) {
        document.querySelector("#email").classList.add("has-error");
        document.querySelector(".response").innerHTML =
          "Please enter a valid email";
        document.querySelector(".response").classList.add("is-visible");
        return;
      } else {
        email.split("@");
        if (email.split("@")[1] != "edu.devinci.fr") {
          document.querySelector("#email").classList.add("has-error");
          document.querySelector(".response").innerHTML =
            "Please enter a edu.devinci email";
          document.querySelector(".response").classList.add("is-visible");
          return;
        } else {
          document.querySelector("#email").classList.remove("has-error");
          document.querySelector(".response").classList.remove("is-visible");
        }
      }
    }

    if (email != "" && password != "") {
      document.querySelector(".response").classList.remove("is-visible");
      document.querySelector("#email").classList.remove("has-error");
      document.querySelector("#password").classList.remove("has-error");

      const user = await _AuthServices.signUp({
        email,
        password,
      });

      if (user.data.user != null) {
        router.push("/profile");
      } else {
        document.querySelector(".response").innerHTML =
          "Something went wrong FF";
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
        <Title>Sign in</Title>
        <SectionContainer>
          <RoundedContainer padding="15% 15%">
            <Form action="">
              <Response className="response"></Response>
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

              <Button type="submit" onClick={signin}>
                Sign in
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

const Response = styled.p`
  display: none;
  color: red;
  text-align: center;

  &.is-visible {
    display: block;
  }
`;