import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, select, number } from '@storybook/addon-knobs';

import Button from '../Button';
import View from '../View';

const optionsTemplate = {
  default: 'default',
  outlined: 'outlined',
  link: 'link',
  dynamic: 'dynamic'
};
const optionsBorder = {
  night: 'night',
  sashimi: 'sashimi',
  positive: 'positive',
  temporary: 'temporary',
  negative: 'negative'
};

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('default', () => {
    const defaultTeamplate = 'default';
    const defaultborderColor = 'black';

    const label = 'Theme';
    const label2 = 'Border Color';

    const template = select(label, optionsTemplate, defaultTeamplate);
    const borderColor = select(label2, optionsBorder, defaultborderColor);

    return (
      <View
        style={{ width: '100vw', height: '100vh' }}
        container
        align="center"
        justify="center"
        direction="column"
      >
        <Button
          border={boolean('Border', true)}
          color={borderColor}
          bordercolor={borderColor}
          bold={boolean('Bold', true)}
          disabled={boolean('Disabled', false)}
          uppercase={boolean('Uppercase', true)}
          template={template}
          noanim={boolean('No Animation', false)}
        >
          {text('text 1', 'Button')}
        </Button>
      </View>
    );
  })
  .add('with icon', () => {
    const defaultTeamplate = 'default';
    const defaultborderColor = 'black';

    const label = 'Theme';
    const label2 = 'Border Color';

    const template = select(label, optionsTemplate, defaultTeamplate);
    const borderColor = select(label2, optionsBorder, defaultborderColor);

    return (
      <View
        style={{ width: '100vw', height: '100vh' }}
        container
        align="center"
        justify="center"
        direction="column"
      >
        <Button
          iFont={text('Icon Font', 'fa')}
          icon={text('Icon name', 'bomb')}
          iconSize={number('Icon fontSize', 22)}
          iconWidth={number('Icon width (for paddings)', 40)}
          border={boolean('Border', true)}
          color={borderColor}
          bordercolor={borderColor}
          bold={boolean('Bold', true)}
          disabled={boolean('Disabled', false)}
          uppercase={boolean('Uppercase', true)}
          template={template}
          noanim={boolean('No Animation', false)}
        >
          {text('text 1', 'Button')}
        </Button>
      </View>
    );
  })
  .add('with icon only', () => {
    const defaultTeamplate = 'default';
    const defaultborderColor = 'black';

    const label = 'Theme';
    const label2 = 'Border Color';

    const template = select(label, optionsTemplate, defaultTeamplate);
    const borderColor = select(label2, optionsBorder, defaultborderColor);

    return (
      <View
        style={{ width: '100vw', height: '100vh' }}
        container
        align="center"
        justify="center"
        direction="column"
      >
        <Button
          padding={text('Padding', '0')}
          iFont={text('Icon Font', 'fa')}
          icon={text('Icon name (FA)', 'comment')}
          iconSize={number('Icon fontSize', 20)}
          border={boolean('Border', true)}
          shape="round"
          color={borderColor}
          bordercolor={borderColor}
          bold={boolean('Bold', true)}
          disabled={boolean('Disabled', false)}
          uppercase={boolean('Uppercase', true)}
          template={template}
          noanim={boolean('No Animation', false)}
        />
      </View>
    );
  });
