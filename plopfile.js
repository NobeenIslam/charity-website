module.exports = function (plop) {
    // Component generator
    plop.setGenerator('component', {
      description: 'Generate a React component with storybook and mock',
      prompts: [
        {
          type: 'input',
          name: 'name',
          message: 'Component name (in PascalCase)?',
        },
      ],
      actions: [
        // Create index.ts
        {
          type: 'add',
          path: 'app/components/blocks/{{pascalCase name}}/index.ts',
          templateFile: 'plop-templates/index.ts.hbs',
        },
        // Create Component.tsx
        {
          type: 'add',
          path: 'app/components/blocks/{{pascalCase name}}/{{pascalCase name}}.tsx',
          templateFile: 'plop-templates/Component.tsx.hbs',
        },
        // Create Component.stories.tsx
        {
          type: 'add',
          path: 'app/components/blocks/{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
          templateFile: 'plop-templates/Component.stories.tsx.hbs',
        },
        // Create ComponentMock.ts
        {
          type: 'add',
          path: 'app/components/blocks/{{pascalCase name}}/{{pascalCase name}}Mock.ts',
          templateFile: 'plop-templates/ComponentMock.ts.hbs',
        },
      ],
    });
  };
  