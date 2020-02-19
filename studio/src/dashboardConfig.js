export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5e4c998452f14d106219dde7',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-jc9gnt8w',
                  apiId: '6539cb72-24d3-48ff-900a-12a548284a8f'
                },
                {
                  buildHookId: '5e4c998424850511e36c4add',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-8z6hbie4',
                  apiId: '96e6acff-6acf-4c61-a7f2-6c59c86ccc95'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/petercr/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-8z6hbie4.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
