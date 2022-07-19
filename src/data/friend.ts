// import { shuffle } from '../utils/jsUtils'

export type Friend = {
  title: string
  description?: string
  website: string
  avatar?: any
}

export const Friends: Friend[] = [
  {
    title: '北林计协',
    description: '北京林业大学计算机与网络协会',
    website: 'https://bljx2022project.github.io/bljx_blog/',
    avatar: 'https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/bljx.png',
  },
  {
    title: '我的旧站',
    description: '基于Vuepress的旧站，已经迁移到这里了。',
    website: 'https://jetzihan.netlify.app',
    avatar: 'https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/jetold.png',
  },
  {
    title: 'NikoのBlog',
    description: 'Niko只会实用的技术',
    website: 'https://weixiabing.github.io/',
    avatar: 'https://weixiabing.github.io/assets/images/13848491-99eb759a4c6f146b59d09849bb181c7e.jpg',
  },
]

export function sortFriend() {
  let result = Friends

  // shuffle(result)
  return result
}
