import type { Meta, StoryObj } from "@storybook/react";
import Header from "./Header";

const meta: Meta<typeof Header> = {
  title: "Components/Header",
  component: Header,
};

export default meta;

type Story = StoryObj<typeof Header>;

export const photographyWebsite: Story = {
    args: {
        navTabs: ['ALL IMAGES', 'COLLECTIONS', 'IMAGE MAP'],
        navLinks: ['/all-images', '/collections', '/image-map'],
        handleSearch: (query: string) => {
            console.log(`Searching for: ${query}`);
        }
    }
};

export const portfolioWebsite: Story = {
    args: {
        navTabs: ['HOME', 'ABOUT ME', 'PROJECTS'],
        navLinks: ['/', '#about-me', '#image-map'],
    }
    
};
