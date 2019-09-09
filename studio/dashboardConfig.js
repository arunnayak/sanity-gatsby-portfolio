export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5d75e9c46500f1c4d581750c',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-qnz8iddx',
                  apiId: 'b6f77689-863c-45f9-8c5e-33d3a450d096'
                },
                {
                  buildHookId: '5d75e9c480b661049752fcd7',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-rpa3sjaq',
                  apiId: 'b825f45d-40d5-42b1-8339-9823e4cb0d2e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/arunnayak/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-rpa3sjaq.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
