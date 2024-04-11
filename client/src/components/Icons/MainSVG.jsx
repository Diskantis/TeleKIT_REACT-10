import { styled } from "styled-components";
import { Color } from "../../styles/style_constants";

function MainSVG({ active, ...props }) {
  return (
    <MainSVGStyled
      fill="currentColor"
      viewBox="0 0 16 16"
      height="1em"
      width="1em"
      $active={active}
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M2 13.5V7h1v6.5a.5.5 0 00.5.5h9a.5.5 0 00.5-.5V7h1v6.5a1.5 1.5 0 01-1.5 1.5h-9A1.5 1.5 0 012 13.5zm11-11V6l-2-2V2.5a.5.5 0 01.5-.5h1a.5.5 0 01.5.5z"
      />
      <path
        fillRule="evenodd"
        d="M7.293 1.5a1 1 0 011.414 0l6.647 6.646a.5.5 0 01-.708.708L8 2.207 1.354 8.854a.5.5 0 11-.708-.708L7.293 1.5z"
      />
    </MainSVGStyled>
  );
}

const MainSVGStyled = styled.svg`
  width: 35px;
  height: 35px;
  fill: ${Color.body_text};
  cursor: pointer;
  opacity: ${(props) => (props.$active === "true" ? 1 : 0)};
  transition: all 0.2s ease-out;
  &:hover {
    fill: ${Color.logo_link};
  }
`;

export default MainSVG;
