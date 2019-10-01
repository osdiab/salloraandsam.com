import { mediaQueries } from "@app/presentation/theme/mediaQueries";
import { palette } from "@app/presentation/theme/palette";
import { text } from "@app/presentation/theme/text";
import { spacingInRem } from "@app/presentation/theme/spacing";

export const theme = {
  palette,
  text,
  spacingInRem,
  mediaQueries
};

export type ThemeInterface = typeof theme;
