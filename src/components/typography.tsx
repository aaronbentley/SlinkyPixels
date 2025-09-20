/**
 * SlinkyPixels : Typography component
 * @description Compliments ShadCN UI by providing a set of composable typography components
 */
import { cn } from '@/lib/utils'
import { Slot } from '@radix-ui/react-slot'
import { VariantProps, cva } from 'class-variance-authority'
import React from 'react'

/**
 * Define base classes for typography components
 */
export const headingBaseClasses = [
    'text-pretty',
    'font-bold',
    'tracking-tighter'
]
export const proseBaseClasses = [
    // 'text-balance', 
    'text-lg', 
    'tracking-tight'
]

const typographyVariants = cva([], {
    variants: {
        variant: {
            h1: [
                ...headingBaseClasses,
                'text-4xl',
                'md:text-5xl',
                'lg:text-6xl',
                'xl:text-7xl'
            ],
            h2: [
                ...headingBaseClasses,
                'font-semibold',
                'text-2xl',
                'md:text-3xl',
                'lg:text-4xl',
                'xl:text-5xl'
            ],
            h3: [
                ...headingBaseClasses,
                'font-semibold',
                'text-xl',
                'md:text-2xl',
                'lg:text-3xl',
                'xl:text-4xl'
            ],
            h4: [
                ...headingBaseClasses,
                'font-semibold',
                'text-lg',
                'md:text-xl',
                'lg:text-2xl',
                'xl:text-3xl'
            ],
            h5: [
                ...headingBaseClasses,
                'font-semibold',
                'text-base',
                'md:text-lg',
                'lg:text-xl',
                'xl:text-2xl'
            ],
            h6: [
                ...headingBaseClasses,
                'font-semibold',
                'text-sm',
                'md:text-base',
                'lg:text-lg',
                'xl:text-xl'
            ],
            link: [
                ...proseBaseClasses,
                'inline',
                'transition-all',
                'duration-200',
                'underline-offset-4',
                'hover:text-brand-foreground',
                'hover:underline'
            ],
            p: [...proseBaseClasses],
            span: [...proseBaseClasses],
            lead: [
                ...proseBaseClasses,
                'sm:text-xl',
                'md:text-2xl',
                'lg:text-3xl'
            ],
            blockquote: [
                ...proseBaseClasses,
                'my-6',
                'border-l-2',
                'border-secondary',
                'bg-muted',
                'py-12',
                'px-8',
                'mx-auto',
                'text-xl',
                'italic',
                'max-w-prose'
            ],
            ul: ['list-disc', 'list-inside', 'ps-4', 'space-y-2', 'my-2'],
            ol: ['list-decimal', 'list-inside', 'ps-4', 'space-y-2', 'my-2'],
            li: [...proseBaseClasses],
            em: [...proseBaseClasses, 'italic', 'inline'],
            strong: [...proseBaseClasses, 'font-semibold', 'inline'],
            small: ['text-sm'],
            address: [...proseBaseClasses, 'not-italic!', 'max-w-xs'],
            del: [...proseBaseClasses, 'line-through']
        },
        muted: {
            true: ['text-muted-foreground']
        },
        size: {
            xs: ['text-xs'],
            sm: ['text-sm'],
            base: ['text-base'],
            lg: ['text-lg'],
            xl: ['text-xl'],
            '2xl': ['text-2xl'],
            '3xl': ['text-3xl'],
            '4xl': ['text-4xl'],
            '5xl': ['text-5xl'],
            '6xl': ['text-6xl'],
            '7xl': ['text-7xl'],
            '8xl': ['text-8xl'],
            '9xl': ['text-9xl']
        },
        weight: {
            thin: ['font-thin'],
            extralight: ['font-extralight'],
            light: ['font-light'],
            normal: ['font-normal'],
            medium: ['font-medium'],
            semibold: ['font-semibold'],
            bold: ['font-bold'],
            extrabold: ['font-extrabold'],
            black: ['font-black']
        },
        display: { true: '' }
    },
    compoundVariants: [
        {
            variant: 'h1',
            display: true,
            className: ['text-6xl', 'md:text-7xl', 'lg:text-8xl', 'xl:text-9xl']
        },
        {
            variant: 'h2',
            display: true,
            className: ['text-5xl', 'md:text-6xl', 'lg:text-7xl', 'xl:text-8xl']
        },
        {
            variant: 'h3',
            display: true,
            className: ['text-4xl', 'md:text-5xl', 'lg:text-6xl', 'xl:text-7xl']
        },
        {
            variant: 'h4',
            display: true,
            className: ['text-3xl', 'md:text-4xl', 'lg:text-5xl', 'xl:text-6xl']
        },
        {
            variant: 'h5',
            display: true,
            className: ['text-2xl', 'md:text-3xl', 'lg:text-4xl', 'xl:text-5xl']
        },
        {
            variant: 'h6',
            display: true,
            className: ['text-xl', 'md:text-2xl', 'lg:text-3xl', 'xl:text-4xl']
        }
    ],
    defaultVariants: {
        variant: 'p',
        muted: false,
        display: false
    }
})

type VariantPropType = VariantProps<typeof typographyVariants>

const variantElementMap: Record<
    NonNullable<VariantPropType['variant']>,
    string
> = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
    link: 'a',
    p: 'p',
    span: 'span',
    lead: 'p',
    blockquote: 'blockquote',
    ul: 'ul',
    ol: 'ol',
    li: 'li',
    em: 'em',
    strong: 'strong',
    small: 'small',
    address: 'address',
    del: 'del'
}

export interface TypographyProps
    extends React.HTMLAttributes<HTMLElement>,
        VariantProps<typeof typographyVariants> {
    asChild?: boolean
    as?: string
    disableSelect?: boolean
}

const Typography = ({
    className,
    variant = 'p',
    muted,
    size,
    weight,
    display,
    as,
    asChild,
    disableSelect,
    ...props
}: TypographyProps) => {
    const Component = asChild
        ? Slot
        : (as ?? (variant ? variantElementMap[variant] : undefined) ?? 'div')
    return (
        <Component
            className={cn(
                typographyVariants({
                    variant,
                    className,
                    muted,
                    size,
                    weight,
                    display
                }),
                disableSelect && 'select-none'
            )}
            {...props}
        />
    )
}

Typography.displayName = 'Typography'

export { Typography, typographyVariants }
