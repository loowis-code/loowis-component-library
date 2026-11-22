import type { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonLink } from './Button/Button';
import { PolaroidCard } from './PolaroidCard/PolaroidCard';
import { SearchField } from './SearchField/SearchField';
import { Surface } from './Surface/Surface';
import { Wordmark } from './Wordmark/Wordmark';
import '../styles/tokens.css';
import '../styles/theme.css';
import '../styles/reset.css';
import '../styles/fonts.css';

const meta = {
    title: 'Design System/Overview',
    parameters: { layout: 'padded' },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Overview: Story = {
    render: () => (
        <main style={{ display: 'grid', gap: '2rem', maxWidth: '48rem' }}>
            <Wordmark />
            <Surface style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', padding: '1.5rem' }}>
                <Button>Outline</Button>
                <Button variant="filled">Filled</Button>
                <Button disabled>Disabled</Button>
                <Button loading>Loading</Button>
                <ButtonLink href="#card">Link</ButtonLink>
            </Surface>
            <SearchField onSearch={() => undefined} />
            <div id="card" style={{ maxWidth: '24rem' }}>
                <PolaroidCard
                    image={{ src: '/landscape.webp', alt: 'Example landscape' }}
                    title="Polaroid card"
                    description="Shared presentation with application-owned content."
                    actions={<ButtonLink href="#">View project</ButtonLink>}
                />
            </div>
        </main>
    ),
};
