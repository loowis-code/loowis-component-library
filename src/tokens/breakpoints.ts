export const breakpoints = {
    lg: 1500,
    md: 1200,
    sm: 450,
} as const;

export type Breakpoint = keyof typeof breakpoints;
