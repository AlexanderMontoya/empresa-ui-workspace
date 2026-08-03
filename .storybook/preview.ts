import type { Preview } from '@storybook/angular';

import { setCompodocJson } from '@storybook/addon-docs/angular';
import docJson from '../documentation.json';

import { EMPRESA_THEMES } from '../projects/empresa-ui/src/lib/themes/registry';
import { addons } from 'storybook/internal/preview-api';
import { FORCE_RE_RENDER, FORCE_REMOUNT } from 'storybook/internal/core-events';

setCompodocJson(docJson);

let previousTheme: string | undefined;

const preview: Preview = {
  globalTypes: {
    theme: {
      name: 'Tema',
      description: 'Tema de Empresa UI',
      defaultValue: 'hamburguesa',
      toolbar: {
        icon: 'paintbrush',
        items: Object.keys(EMPRESA_THEMES)
      }
    }
  },

  decorators: [
    (story, context) => {
      const theme = context.globals['theme'] as string;

      if (previousTheme && previousTheme !== theme) {

        //sessionStorage.setItem('__storybook_theme_reload__', '1');

        requestAnimationFrame(() => {
          addons.getChannel().emit(FORCE_REMOUNT, {
            storyId: context.id
          });
        });
        console.log(previousTheme)
      }
      
      previousTheme = theme;

      return story();

    }
  ],

  parameters: {
    options: {
      storySort: {
        order: [
          'Introduction',
          'Installation',
          'Theming',
          'Components'
        ]
      }
    }
  }
};

if (sessionStorage.getItem('__storybook_theme_reload__')) {
  sessionStorage.removeItem('__storybook_theme_reload__');
}

export default preview;