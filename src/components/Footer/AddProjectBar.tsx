import styled from "styled-components";

type AddProjectBarProps = {
  step: {
    get: number;
    set: (newStep: number) => void;
    max: number;
  };
  translate: {
    get: number;
    set: (newTranslate: number) => void;
  };
  submit: () => void;
};

export const AddProjectBar: React.FC<AddProjectBarProps> = ({
  step,
  translate,
  submit,
}) => {
  const previousStep = () => {
    step.set(step.get - 1);
    const stepElement = document.getElementById(`step-${step.get - 1}`);
    if (stepElement) {
      translate.set(translate.get - stepElement.offsetHeight - 20);
      if (step.get - 1 === 1) {
        translate.set(0);
      }
    }
  };

  const nextStep = () => {
    step.set(step.get + 1);
    const stepElement = document.getElementById(`step-${step.get}`);
    if (stepElement) {
      translate.set(translate.get + stepElement.offsetHeight + 20);
    }
  };

  return (
    <Container>
      <div>
        {step.get !== 1 && (
          <LeftButton
            onClick={previousStep}
            style={{ opacity: `${step.get === 1 ? "0" : "1"}` }}
            type="button"
          >
            <i className="ri-arrow-left-line"></i>
            Previous
          </LeftButton>
        )}
      </div>
      <StepBar>
        {Array.from({ length: step.max }, (_, index) => (
          <Segment key={index} active={(index + 1 <= step.get).toString()} />
        ))}
      </StepBar>
      <RightButtonContainer>
        <RightButton onClick={step.get !== step.max ? nextStep : submit}>
          {step.get != 6 ? "Next" : "Submit"}
        </RightButton>
      </RightButtonContainer>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.white};
  position: absolute;
  bottom: 32px;
  margin: 0 auto;
  border-radius: 16px;

  & > * {
    width: 33%;
  }
`;

const LeftButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  color: ${({ theme }) => theme.colors.black};
  background: none;
  border: none;
  cursor: pointer;
`;

const RightButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const RightButton = styled.button`
  display: flex;
  width: auto;
  align-items: center;
  justify-content: center;
  padding: 6px 18px;
  background-color: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 24px;
  cursor: pointer;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(80%);
  }
`;

const StepBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;

  & > div:first-child {
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }

  & > div:last-child {
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
  }
`;

const Segment = styled.div<{ active: string }>`
  height: 12px;
  width: 16px;
  transition: background-color 0.2s;
  background-color: ${({ theme, active }) =>
    active === "true" ? theme.colors.blue : theme.colors.lightgrey};
`;
