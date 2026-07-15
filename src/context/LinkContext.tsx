'use client';

import { createContext, useContext, type ComponentType, type ReactNode } from 'react';

export type LinkComponentProps = {
    href: string;
    className?: string;
    children?: ReactNode;
    [key: string]: unknown;
};

export type LinkComponent = ComponentType<LinkComponentProps>;

const DefaultLink: LinkComponent = ({ href, children, ...rest }) => (
    <a href={href} {...rest}>{children}</a>
);

const LinkContext = createContext<LinkComponent>(DefaultLink);

type LinkProviderProps = {
    component: LinkComponent;
    children: ReactNode;
};

export function LinkProvider({ component, children }: LinkProviderProps) {
    return <LinkContext.Provider value={component}>{children}</LinkContext.Provider>;
}

export function useLinkComponent(): LinkComponent {
    return useContext(LinkContext);
}
