import styled from "styled-components/macro";
import { Color } from "../../styles/style_constants";

function LogoutSVG({ active, ...props }) {
  return (
    <LogoutSVGStyled
      fill="currentColor"
      viewBox="0 0 16 16"
      height="1em"
      width="1em"
      $active={active}
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M6 12.5a.5.5 0 00.5.5h8a.5.5 0 00.5-.5v-9a.5.5 0 00-.5-.5h-8a.5.5 0 00-.5.5v2a.5.5 0 01-1 0v-2A1.5 1.5 0 016.5 2h8A1.5 1.5 0 0116 3.5v9a1.5 1.5 0 01-1.5 1.5h-8A1.5 1.5 0 015 12.5v-2a.5.5 0 011 0v2z"
      />
      <path
        fillRule="evenodd"
        d="M.146 8.354a.5.5 0 010-.708l3-3a.5.5 0 11.708.708L1.707 7.5H10.5a.5.5 0 010 1H1.707l2.147 2.146a.5.5 0 01-.708.708l-3-3z"
      />
    </LogoutSVGStyled>
  );
}

const LogoutSVGStyled = styled.svg`
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

export default LogoutSVG;
