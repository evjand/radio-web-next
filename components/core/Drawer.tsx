'use client'

import { css } from '@/styled-system/css'
import * as React from 'react'
import { Drawer as DrawerPrimitive } from 'vaul'

const Drawer = ({
    shouldScaleBackground = true,
    ...props
}: React.ComponentProps<typeof DrawerPrimitive.Root>) => (
    <DrawerPrimitive.Root
        shouldScaleBackground={shouldScaleBackground}
        {...props}
    />
)
Drawer.displayName = 'Drawer'

const DrawerTrigger = DrawerPrimitive.Trigger

const DrawerPortal = DrawerPrimitive.Portal

const DrawerClose = DrawerPrimitive.Close

const DrawerOverlay = React.forwardRef<
    React.ElementRef<typeof DrawerPrimitive.Overlay>,
    React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay>
>(({ className, ...props }, ref) => (
    <DrawerPrimitive.Overlay
        ref={ref}
        className={css({
            position: 'fixed',
            inset: 0,
            zIndex: 50,
            background: 'rgba(0,0,0,0.8)',
        })}
        {...props}
    />
))
DrawerOverlay.displayName = DrawerPrimitive.Overlay.displayName

const DrawerContent = React.forwardRef<
    React.ElementRef<typeof DrawerPrimitive.Content>,
    React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content>
>(({ className, children, ...props }, ref) => (
    <DrawerPortal>
        <DrawerOverlay />
        <DrawerPrimitive.Content
            ref={ref}
            className={css({
                position: 'fixed',
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: 50,
                display: 'flex',
                height: 'calc(100% - 64px)',
                flexDirection: 'column',
                borderRadius: '6px 6px 0 0',
                background: 'base.medium',
            })}
            {...props}
        >
            {children}
        </DrawerPrimitive.Content>
    </DrawerPortal>
))
DrawerContent.displayName = 'DrawerContent'

export {
    Drawer,
    DrawerPortal,
    DrawerOverlay,
    DrawerTrigger,
    DrawerClose,
    DrawerContent,
}
