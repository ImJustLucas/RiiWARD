import { RoundedContainer } from "@components/Common/Containers/RoundedContainer";
import styled from "styled-components";

export const Signin: React.FC = () => {
  return (
    <>
      <HomeContainer>
        <Title>Sign in</Title>
        <SectionContainer>
          <RoundedContainer padding="15% 15%">
            <Form action="">
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
              ></Input>

              <InputGroup>
                <Label htmlFor="firstname">First name</Label>
                <Input
                  type="firstname"
                  id="firstname"
                  name="firstname"
                  placeholder="First name"
                ></Input>

                <Label htmlFor="lastname">Last name</Label>
                <Input
                  type="lastname"
                  id="lastname"
                  name="lastname"
                  placeholder="Last name"
                ></Input>
              </InputGroup>

              <Label htmlFor="password">Password</Label>
              <Input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
              ></Input>

              <Button type="submit">Sign in</Button>
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

const InputGroup = styled.div`
  display: flex;
  gap: 30px;
`;

const Input = styled.input`
  box-sizing: border-box;
  border: 1px solid ${({ theme }) => theme.colors.black};
  border-radius: 24px;
  width: 100%;
  height: 70px;
  padding: 8px 16px;
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
