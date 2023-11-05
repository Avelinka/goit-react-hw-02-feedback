import { SectionWrap, Tittle } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <SectionWrap>
      <Tittle title={title}>{title}</Tittle>
      {children}
    </SectionWrap>
  );
};
