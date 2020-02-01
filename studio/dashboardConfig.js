export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e35fefb1b94849b9baebc3a',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-qgi57no1',
                  apiId: 'c5ada2c5-a586-409f-960b-b5da599d0a96'
                },
                {
                  buildHookId: '5e35fefb019e4fca8f870105',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-dwobo7wm',
                  apiId: '306cca71-d7f9-4bc4-8d50-d35b3fe8c10e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sportyfred/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-dwobo7wm.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
