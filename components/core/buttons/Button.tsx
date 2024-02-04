import { RecipeVariantProps, css, sva } from '@/styled-system/css'
import { SystemStyleObject } from '@/styled-system/types'
import React from 'react'
import { Slot, Slottable } from '../Slot'

const button = sva({
    slots: ['root', 'text', 'icon'],
    base: {
        root: {
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
        },
    },
    variants: {
        variant: {
            primary: {
                root: {
                    backgroundColor: 'base.mediumLight10',
                    color: 'base.contrastLight',
                    _hover: { backgroundColor: 'base.mediumLight20' },
                    _active: {
                        backgroundColor: 'base.mediumLight40',
                        color: 'base.light',
                    },
                    _focusVisible: {
                        outline: 'none',
                        outlineOffset: '0px',
                        outlineColor: 'base.light',
                        color: 'base.light',
                        backgroundColor: 'base.mediumLight10',
                    },
                },
            },
            secondary: {
                root: {
                    backgroundColor: 'base.dark',
                    color: 'base.contrastLight',
                    _hover: {
                        backgroundColor: 'base.mediumLight20',
                        color: 'base.contrastLight',
                    },
                    _active: {
                        backgroundColor: 'base.mediumLight40',
                        color: 'base.light',
                    },
                    _focusVisible: {
                        outline: 'none',
                        outlineOffset: '0px',
                        outlineColor: 'base.light',
                        color: 'base.light',
                        backgroundColor: 'base.mediumLight10',
                    },
                },
            },
            selected: {
                root: {
                    backgroundColor: 'base.light',
                    color: 'base.dark',
                    _hover: {
                        backgroundColor: 'base.mediumLight20',
                        color: 'base.contrastLight',
                    },
                    _active: {
                        backgroundColor: 'base.mediumLight40',
                        color: 'base.light',
                    },
                    _focusVisible: {
                        outline: 'none',
                        outlineOffset: '0px',
                        outlineColor: 'base.light',
                        color: 'base.light',
                        backgroundColor: 'base.mediumLight10',
                    },
                },
            },
        },
        size: {
            small: {
                root: { padding: '8px 10px', textStyle: 'caption1' },
                text: {
                    display: 'inline-flex',
                    alignItems: 'center',
                    minHeight: '16px',
                    padding: '0px 2px',
                },
                icon: { width: '16px', height: '16px' },
            },
            large: {
                root: { padding: '8px 10px', textStyle: 'subheadBold' },
                text: {
                    display: 'inline-flex',
                    alignItems: 'center',
                    minHeight: '24px',
                    padding: '0px 8px',
                },
                icon: { width: '24px', height: '24px' },
            },
        },
        rounded: {
            default: { root: { borderRadius: '3' } },
            full: { root: { borderRadius: '9999px' } },
        },
    },
})

export type ButtonVariants = RecipeVariantProps<typeof button>

const Button = React.forwardRef<
    React.ElementRef<'button'>,
    React.ComponentProps<'button'> & {
        asChild?: boolean
        iconLeft?: React.ReactNode
        iconRight?: React.ReactNode
        css?: SystemStyleObject
    } & ButtonVariants
>(
    (
        {
            children,
            asChild = false,
            iconLeft,
            iconRight,
            variant = 'primary',
            rounded = 'default',
            size = 'large',
            css: cssProp,
            ...props
        },
        forwardedRef
    ) => {
        const classes = button({
            variant,
            size,
            rounded,
        })
        const raw = button.raw({ variant, size, rounded })
        const Component = asChild ? Slot : 'button'
        const IconSlot = Slot
        return (
            <Component
                className={css(raw.root, cssProp)}
                {...props}
                ref={forwardedRef}
            >
                <Slottable child={children}>
                    {(child) => (
                        <>
                            <IconSlot
                                className={classes.icon}
                                style={{
                                    marginLeft: size == 'large' ? '4px' : '0px',
                                }}
                            >
                                {iconLeft}
                            </IconSlot>
                            <span className={classes.text}>{child}</span>
                            <IconSlot
                                className={classes.icon}
                                style={{
                                    marginRight:
                                        size == 'large' ? '4px' : '0px',
                                }}
                            >
                                {iconRight}
                            </IconSlot>
                        </>
                    )}
                </Slottable>
            </Component>
        )
    }
)
Button.displayName = 'Button'
export default Button
