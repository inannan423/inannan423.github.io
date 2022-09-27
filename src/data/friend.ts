// import { shuffle } from '../utils/jsUtils'

export type Friend = {
  title: string;
  description?: string;
  website: string;
  avatar?: any;
};

export const Friends: Friend[] = [
  {
    title: "北林计协",
    description: "北京林业大学计算机与网络协会",
    website: "https://bljx2022project.github.io/bljx_blog/",
    avatar: "https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/bljx.png",
  },
  {
    title: "NikoのBlog",
    description: "Niko只会实用的技术",
    website: "https://weixiabing.github.io/",
    avatar:
      "https://weixiabing.github.io/assets/images/13848491-99eb759a4c6f146b59d09849bb181c7e.jpg",
  },
  {
    title: "愧怍",
    description: "愧怍的小站。",
    avatar: "https://kuizuo.cn/img/logo.webp",
    website: "https://kuizuo.cn/",
  },
  {
    title: "OYY Blog",
    description: "Me the man handsome so much(?)",
    avatar:
      "https://tva4.sinaimg.cn/large/b447be47ly1h4uqtlstu7j20ht0hcwgh.jpg",
    website: "https://anticounter.netlify.app/",
  },
  {
    title: "派兹的小站",
    description: "Just Some Memories",
    avatar: "https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/zdtxi.svg",
    website: "https://pizzel.me/",
  },
  {
    title: "CYwal",
    description: "swfoodt's blog",
    avatar: "https://swfoodt.netlify.app/img/Cylogo.png",
    website: "https://swfoodt.netlify.app/",
  },
  {
    title: "XBan",
    description: "Just an ordinary BLEACH FAN",
    avatar: "https://s2.loli.net/2022/07/30/ENgfwdO1VpoWjKJ.png",
    website: "https://my-docu-xban12.vercel.app/",
  },
];

export function sortFriend() {
  let result = Friends;

  // shuffle(result)
  return result;
}
