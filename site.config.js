function Category(image, descript) {
  this.image = image
  this.descript = descript
}
module.exports = {
  SiteMeta: {
    title: 'Gunlog',
    profileImage: 'https://avatars.githubusercontent.com/u/45007556?v=4',
    info: {
      author: 'Gunkim',
      descript: '안녕하세요. Gunkim입니다. 공부한 내용들을 정제하기 위해서 블로그를 시작했습니다.',
      github: 'https://github.com/gunkims',
      email: 'gunkim.dev@gmail.com',
    },
    gitalk: {
      clientID: '950a9f1473b04652cbc0',
      clientSecret: '6b42fe4d369ba3a4918c0b629b35115111fb33ac',
      repo: 'blog-gitalk',
      owner: 'kanpann',
      admin: ['kanpann'],
    },
  },
  Category: {
    개발환경: {
      isSub: false,
    },
    Java: {
      isSub: true,
      sub: ['Spring'],
    },
    JavaScript: { isSub: true, sub: ['React', 'Vue'] },
  },
  CategoryInfo: {
    Spring: new Category(
      'https://user-images.githubusercontent.com/45007556/103328175-0e958b80-4a9b-11eb-9db7-66230e0f057c.png',
      '스프링에 대한 글들을 모아놓은 카테고리입니다.',
    ),
    JavaScript: new Category(
      'https://user-images.githubusercontent.com/45007556/99826279-7c48c080-2b9b-11eb-8cce-3c92f971c803.png',
      '자바스크립트에 대한 글들을 모아놓은 카테고리입니다.',
    ),
    React: new Category('', ''),
    Vue: new Category('', ''),
    Java: new Category('', ''),
  },
}
