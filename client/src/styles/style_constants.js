export const Color = {
  body_bg: "#111111ff",
  body_text: "#ffffff",

  page_bg: "#2c2c2cff",
  page_title: "#474747ff",
  logo_link: "rgba(255, 255, 255, 0.5)",

  sidebar_bg: "#252525",
  sidebar_sel_hover: "#42d312",

  btn_submit: "#003eb8",
  btn_submit_hover: "#0958d9",
  btn_submit_active: "#4096ff",

  btn_edit_green: "#198754",
  btn_delete_red: "#dc3545",

  label_auth: "#ffc36a",
  label_auth_err: "#d32f2f",
  input_auth_bg: "#232323",
  input_auth_border: "#0958d9",

  input_create_bg: "#212529",
  input_create_shadow: "#003a6e",

  table_text: "#adb5bd",
  table_bg: "#2c2c2c",
  table_inputBorder: "#495057",

  gradient_head_foot_bg:
    "linear-gradient(90deg, rgba(32, 62, 39, 1) 0%, rgba(40, 80, 50, 1) 100%)",
};

export const mixinFontParams = ({ size, height, weight, style, spacing }) => `
  font-size: ${size || "1rem"};
  line-height: ${height || "normal"};
  font-weight: ${weight || 400};
  font-style: ${style || "normal"};
  letter-spacing: ${spacing || "0rem"};
`;

export const mixinFontFamily = ({ family }) => `
  font-family: ${family || "Roboto, sans-serif"};
`;
