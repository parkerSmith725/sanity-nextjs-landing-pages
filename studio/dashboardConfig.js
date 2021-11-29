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
                  buildHookId: '61a51a91076a7655e928e69d',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-czkwkdfd',
                  apiId: '7afb6958-d176-432f-8a9d-8f917a9b06be'
                },
                {
                  buildHookId: '61a51a91632f704f21386f83',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-nxy9cmnv',
                  apiId: '1318ef1f-e15e-4dc6-8ae0-f4b2cc0c0086'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/parkerSmith725/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-nxy9cmnv.netlify.app', category: 'apps'}
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
