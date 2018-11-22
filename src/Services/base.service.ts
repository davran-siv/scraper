import { request } from '../utils/request'

const htmlparser = require('htmlparser2')

export class DefaultBaseService {
  static async main(): Promise<string> {
    const gitHubPage = await request.get('/search', {
      params: {
        q: 'location:Russia repos:>1 language:TypeScript',
        type: 'Users'
      }
    })
    const parsedGitHubPage = htmlparser.parseDOM(gitHubPage)
    const htmlTagsClassList = [
      'logged-in env-production false page-responsive min-width-0 intent-mouse',
      'application-main '
    ]
    let currentHtmlTag = parsedGitHubPage.find((it: any) => it.name === 'html')
    htmlTagsClassList.forEach((htmlTag: string) => {
      console.log(currentHtmlTag)
      currentHtmlTag = currentHtmlTag.children.find((it: any) => it.attribs.class === htmlTag)
      console.log(currentHtmlTag)
    })
    console.log(currentHtmlTag)


    return 'awdawd'
  }
}
