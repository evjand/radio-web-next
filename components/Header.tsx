import { css } from '@/styled-system/css'
import {
    NrkHardwareRadio,
    NrkHome,
    NrkMediaDirekte,
    NrkSearch,
} from '@nrk/core-icons/jsx'
import { NrkLogoNrkRadio } from '@nrk/core-icons/jsx/logo'
import { Url } from 'next/dist/shared/lib/router/router'
import Link from 'next/link'

import { ReactNode } from 'react'

function HeaderLink({ href, children }: { href: Url; children: ReactNode }) {
    return (
        <Link
            href={href}
            className={css({
                display: 'inline-flex',
                flexDirection: { base: 'column', tablet: 'row' },
                alignItems: 'center',
                textStyle: 'subheadBold',
                maxHeight: { base: 'initial', tablet: '28px' },
                overflow: 'hidden',
                borderRadius: '3',
                '& > :first-child': {
                    marginRight: { base: '0px', tablet: '8px' },
                    marginBottom: { base: '8px', tablet: '0px' },
                },
                _hover: {
                    color: 'base.light',
                },
                _focusVisible: {
                    outline: 'none',
                    outlineColor: 'base.light',
                    color: 'base.light',
                },
            })}
        >
            {children}
        </Link>
    )
}

const Header = () => {
    return (
        <header
            className={css({
                position: 'absolute',
                top: 0,
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            })}
        >
            <div
                className={css({
                    width: '100%',
                    paddingLeft: { base: '8px', tablet: '44px' },
                    paddingTop: { base: '8px', tablet: '20px' },
                    paddingBottom: { base: '0px', tablet: '12px' },
                    textStyle: 'caption2',
                    color: 'base.contrastLight',
                    opacity: 0.3,
                })}
            >
                <a href="https://nrk.no" target="_blank">
                    NRK.no
                </a>
            </div>

            <NrkLogoNrkRadio
                className={css({
                    height: '48px',
                    width: 'auto',
                    hideFrom: 'bigTablet',
                    marginBottom: '16px',
                })}
            />
            <nav
                className={css({
                    display: 'flex',
                    width: '100%',
                    justifyContent: {
                        base: 'space-around',
                        bigTablet: 'flex-start',
                    },
                    padding: {
                        base: '0 0px',
                        tablet: '0 84px',
                        bigTablet: '0 104px',
                        desktop: '0 186px',
                    },
                    '& > *': {
                        marginRight: { base: '0px', bigTablet: '48px' },
                    },
                })}
            >
                <div
                    className={css({
                        hideBelow: 'bigTablet',
                    })}
                >
                    <HeaderLink href="/">
                        <NrkLogoNrkRadio
                            className={css({ height: '48px', width: 'auto' })}
                        />
                    </HeaderLink>
                </div>
                <div
                    className={css({
                        hideFrom: 'bigTablet',
                    })}
                >
                    <HeaderLink href="/">
                        <NrkHome />
                        Forsiden
                    </HeaderLink>
                </div>
                <HeaderLink href="/sok">
                    <NrkSearch />
                    Utforsk
                </HeaderLink>
                <HeaderLink href="/direkte">
                    <NrkHardwareRadio />
                    Direkte
                </HeaderLink>
                <HeaderLink href="/profil">
                    <span
                        className={css({
                            fontWeight: '890',
                            fontSize: '30px',
                            lineHeight: '36px',
                            fontVariationSettings: `'wdth' 69`,
                            width: '24px',
                            height: '24px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        })}
                    >
                        A
                    </span>
                    Anders
                </HeaderLink>
            </nav>
        </header>
    )
}

export default Header
