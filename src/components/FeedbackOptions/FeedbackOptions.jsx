import { ButtonsList, ButtonLi, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonsList>
      {options.map(option => {
        return (
          <ButtonLi key={option}>
            <Button
              key={option}
              type="button"
              value={option}
              children={option}
              onClick={() => onLeaveFeedback(option)}
            >
              {option}
            </Button>
          </ButtonLi>
        );
      })}
    </ButtonsList>
  );
};
