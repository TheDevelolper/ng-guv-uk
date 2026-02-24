import type { Meta, StoryObj } from '@storybook/angular';
import { Header } from '../app/components/molecules/header/header';


const meta: Meta<Header> = {
  title: 'Example/Header',
  component: Header,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  args: {
  },
};

export default meta;
type Story = StoryObj<Header>;

export const Default: Story = {
  args: {
    
  },
  render: (args) => ({
    template: `
      <gov-header>
        <a href="#" class="govuk-header__homepage-link"> 
        
        <img src="assets/images/govuk-crest.png" alt="GOV.UK" class="govuk-header__logo">

        Kiran Randhawa 
        </a>
      </gov-header>`,
    props: args
  })
};

