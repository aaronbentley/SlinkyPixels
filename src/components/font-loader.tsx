/**
 * Font Loader : Google Fonts
 * @link https://nextjs.org/docs/app/api-reference/components/font
 */

/**
 * Import Google Variable Font
 * @link https://fonts.google.com/variablefonts
 */
import { Geist as FontSans } from 'next/font/google'

/**
 * Configure Font(s)
 * Specify variable name for Tailwind css variable referenced in tailwind.config.ts file : extend.fontFamily.sans.
 * Omit the 'weight' property if using a variable font.
 * @link https://nextjs.org/docs/app/building-your-application/optimizing/fonts
 */
const fontSans = FontSans({
    subsets: ['latin'],
    variable: '--font-sans',
    display: 'swap'
    // weight: ['100', '200', '300', '400', '500', '600', '700']
})

/**
 * Combine & export custom fonts for Tailwind classnames
 */
export const fonts = [fontSans.variable].join(' ')
