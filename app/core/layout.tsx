import { css } from '@/styled-system/css'

export default function CoreLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <div
            className={css({
                minHeight: '100vh',
                display: 'flex',
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'base.medium',
            })}
        >
            {children}
        </div>
    )
}
