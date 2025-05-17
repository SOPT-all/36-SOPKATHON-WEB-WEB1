import { css } from '@emotion/react';

export const typo = {
  // Headings
  h0_sb_22: css`
    font-size: 22px;
    font-weight: 600;
    line-height: 138%;
    letter-spacing: 1%;
  `,
  h1_sb_24: css`
    font-size: 24px;
    font-weight: 600;
    line-height: 140%;
    letter-spacing: 1%;
  `,
  h2_sb_20: css`
    font-size: 20px;
    font-weight: 600;
    line-height: 140%;
    letter-spacing: 1%;
  `,
  h3_sb_18: css`
    font-size: 18px;
    font-weight: 600;
    line-height: 140%;
    letter-spacing: 1%;
  `,
  h4_sb_17: css`
    font-size: 17px;
    font-weight: 600;
    line-height: 140%;
    letter-spacing: 1%;
  `,
  h5_sb_16: css`
    font-size: 16px;
    font-weight: 600;
    line-height: 140%;
    letter-spacing: 1%;
  `,
  h6_r_20: css`
    font-size: 20px;
    font-weight: 400;
    line-height: 140%;
    letter-spacing: 1%;
  `,

  // Body
  b0_r_22: css`
    font-size: 22px;
    font-weight: 400;
    line-height: 138%;
    letter-spacing: 1%;
  `,
  b1_m_20: css`
    font-size: 20px;
    font-weight: 500;
    line-height: 140%;
    letter-spacing: 1%;
  `,
  b2_m_18: css`
    font-size: 18px;
    font-weight: 500;
    line-height: 140%;
    letter-spacing: 1%;
  `,
  b3_r_18: css`
    font-size: 18px;
    font-weight: 400;
    line-height: 140%;
    letter-spacing: 1%;
  `,
  b4_m_17: css`
    font-size: 17px;
    font-weight: 500;
    line-height: 140%;
    letter-spacing: 1%;
  `,
  b5_r_17: css`
    font-size: 17px;
    font-weight: 400;
    line-height: 140%;
    letter-spacing: 1%;
  `,
  b6_m_16: css`
    font-size: 16px;
    font-weight: 500;
    line-height: 140%;
    letter-spacing: 1%;
  `,
  b7_r_16: css`
    font-size: 16px;
    font-weight: 400;
    line-height: 140%;
    letter-spacing: 1%;
  `,
  b8_m_15: css`
    font-size: 15px;
    font-weight: 500;
    line-height: 140%;
    letter-spacing: 1%;
  `,
  b9_r_15: css`
    font-size: 15px;
    font-weight: 400;
    line-height: 140%;
    letter-spacing: 1%;
  `,

  // Captions
  c1_sb_15: css`
    font-size: 15px;
    font-weight: 600;
    line-height: 140%;
    letter-spacing: 1%;
  `,
  c2_r_14: css`
    font-size: 14px;
    font-weight: 400;
    line-height: 128%;
    letter-spacing: 2%;
  `,
  c3_sb_14: css`
    font-size: 14px;
    font-weight: 600;
    line-height: 128%;
    letter-spacing: 2%;
  `,
  c4_m_14: css`
    font-size: 14px;
    font-weight: 500;
    line-height: 128%;
    letter-spacing: 2%;
  `,
  c5_m_13: css`
    font-size: 13px;
    font-weight: 500;
    line-height: 128%;
    letter-spacing: 2%;
  `,
  c6_r_13: css`
    font-size: 13px;
    font-weight: 400;
    line-height: 128%;
    letter-spacing: 2%;
  `,
  c7_r_12: css`
    font-size: 12px;
    font-weight: 400;
    line-height: 128%;
    letter-spacing: 2%;
  `,
  c8_sb_12: css`
    font-size: 12px;
    font-weight: 600;
    line-height: 128%;
    letter-spacing: 2%;
  `,

  // Footer
  f1_sb_11: css`
    font-size: 11px;
    font-weight: 600;
    line-height: 128%;
    letter-spacing: 2%;
  `,
  f2_sb_10: css`
    font-size: 10px;
    font-weight: 600;
    line-height: 128%;
    letter-spacing: 2%;
  `,
  f3_r_10: css`
    font-size: 10px;
    font-weight: 400;
    line-height: 128%;
    letter-spacing: 2%;
  `,

  // Inform
  i1_r_15: css`
    font-size: 15px;
    font-weight: 400;
    line-height: 170%;
    letter-spacing: 1%;
  `,
};

const theme = {
  colors: {
    gray1: '#F6F6F6',
    gray2: '#EBEDEF',
    gray3: '#E1E4E7',
    gray4: '#CDD2D7',
    gray5: '#B9BEC5',
    gray6: '#ABB1B8',
    gray7: '#979EA6',
    gray8: '#868D95',
    gray9: '#787F87',
    gray10: '#111111',
    gray11: '#484D54',
    white: '#ffffff',
    black: '#000000',
    potato_orange: '#EF684A',
    potato_yellow: '#FBFFAC',
  },
  typography: {
    textStyles: typo,
  },
};

export default theme;
