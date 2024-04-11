import { styled } from "styled-components";
import { Color } from "../../styles/style_constants";

function BackSVG({ active, ...props }) {
  return (
    <BackSVGStyled
      fill="currentColor"
      viewBox="0 0 16 16"
      height="1em"
      width="1em"
      $active={active}
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M1 8a7 7 0 1014 0A7 7 0 001 8zm15 0A8 8 0 110 8a8 8 0 0116 0zm-4.5-.5a.5.5 0 010 1H5.707l2.147 2.146a.5.5 0 01-.708.708l-3-3a.5.5 0 010-.708l3-3a.5.5 0 11.708.708L5.707 7.5H11.5z"
      />
    </BackSVGStyled>
  );
}

const BackSVGStyled = styled.svg`
  width: 35px;
  height: 35px;
  fill: ${Color.body_text};
  cursor: ${(props) => (props.$active === "true" ? "pointer" : "default")};
  opacity: ${(props) => (props.$active === "true" ? 1 : 0)};
  transition: all 0.2s ease-out;
  &:hover {
    fill: ${Color.logo_link};
  }
`;

export default BackSVG;
