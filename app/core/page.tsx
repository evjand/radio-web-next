import Button from '@/components/core/buttons/Button'
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerTrigger,
} from '@/components/core/Drawer'
import { css } from '@/styled-system/css'
import { Nrk360, NrkStar } from '@nrk/core-icons/jsx'
import Link from 'next/link'

export default function Core() {
    return (
        <main
            className={css({
                display: 'grid',
                gridGap: '8px',
                justifyItems: 'center',
                width: '400px',
                background: 'rgba(0,0,0,0.1)',
            })}
        >
            <Button asChild iconLeft={<Nrk360 />}>
                <Link href="/">Internallink</Link>
            </Button>
            <Button iconRight={<NrkStar />}>Button</Button>
            <Button variant="secondary">Button</Button>
            <Button variant="selected">Button</Button>
            <Button rounded="full">Button</Button>
            <Button size="small" iconRight={<NrkStar />}>
                Button
            </Button>
            <Button
                css={{ width: '100%' }}
                size="small"
                iconRight={<NrkStar />}
            >
                Button
            </Button>
            <Button rounded="full" size="small">
                Button
            </Button>
            <h1 className={css({ textStyle: 'label' })}>Label</h1>
            <Drawer>
                <DrawerTrigger>Open</DrawerTrigger>
                <DrawerContent>
                    <DrawerClose asChild>
                        <Button variant="primary">Cancel</Button>
                    </DrawerClose>
                </DrawerContent>
            </Drawer>
        </main>
    )
}
