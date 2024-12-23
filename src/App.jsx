import './App.css'
import CardComponent from './component/cards/card-component'
import Header from './component/Header/header'
import HeroSection from './component/Herosection/herosection'

const CardsDetails = [
  {
    img: 'https://cdn.dribbble.com/userupload/18100413/file/original-81bb483df8d5088679e93ae215710900.png?resize=752x&vertical=center', 
    profileImg: 'https://cdn.dribbble.com/users/1057940/avatars/small/f068710cc8e5fcebcbcd8f1f75d1b4ef.gif',
    name: 'Nixto',
    status: 'Team',
    likes: 118,
    views: 200,
  },

  {
    img: 'https://cdn.dribbble.com/userupload/18050787/file/original-b5c2edaa83df22b604ebb3e38f6fc89e.jpg?resize=752x&vertical=center', 
    profileImg: 'https://cdn.dribbble.com/users/11502486/avatars/small/a8456497e26e27118763af6fc5b5fbcc.png?1650726363',
    name: 'Emoto',
    status: 'Pro',
    likes: 128,
    views: 290,
  },

  {
    img: 'https://cdn.dribbble.com/userupload/18099824/file/original-678d5409cb58997fecafd9395691ed41.jpg?resize=1200x900&vertical=center', 
    profileImg: 'https://cdn.dribbble.com/users/2554837/avatars/small/90522438af4feba5ef21fe54cc40fec4.png?1559397767',
    name: 'Orizon ui/ux Des..',
    status: 'Team',
    likes: 98,
    views: 2100,
  },

  {
    img: 'https://cdn.dribbble.com/userupload/17895569/file/original-5535e7adc9a80be5a93710dbaaa54c85.png?resize=1200x900&vertical=center', 
    profileImg: 'https://cdn.dribbble.com/users/18863886/avatars/small/7766e147ce2e1100b620c1d15da11f53.jpeg?1708338820',
    name: 'Victoria vinc..',
    status: 'pro',
    likes: 118,
    views: 200,
  },


  {
    img: 'https://cdn.dribbble.com/userupload/18100116/file/original-76445aeaa54156392d7f2906dde012dd.png?resize=1200x900&vertical=center', 
    profileImg: 'https://cdn.dribbble.com/users/3536022/avatars/small/8bc8459bb3fe2e38b7121a7fd552f74f.jpg?1590768327',
    name: 'Dan team',
    status: 'Team',
    likes: 118,
    views: 200,
  },
  
  {
    img: 'https://cdn.dribbble.com/userupload/18089701/file/original-3122f84d3fceada4c8420c3191410fa5.png?resize=1200x900&vertical=center', 
    profileImg: 'https://cdn.dribbble.com/users/1057940/avatars/small/f068710cc8e5fcebcbcd8f1f75d1b4ef.gif',
    name: 'james ui/ux ..',
    status: 'Team',
    likes: 118,
    views: 200,
  },
  
  {
    img: 'https://cdn.dribbble.com/userupload/18097943/file/original-43a201dcff8ce052d216d1f93231c3d7.png?resize=1024x768&vertical=center', 
    profileImg: 'https://cdn.dribbble.com/users/107759/avatars/small/b718a83234554558bf21578364cc03ea.png?1676050868',
    name: 'Braid shekkinah ui/ux ..',
    status: 'Team',
    likes: 118,
    views: 200,
  },
  
  {
    img: 'https://cdn.dribbble.com/userupload/18102643/file/original-b9c3e163d9fd8e30668b6544c66c4809.png?resize=1200x900&vertical=center', 
    profileImg: 'https://cdn.dribbble.com/users/3536022/avatars/small/8bc8459bb3fe2e38b7121a7fd552f74f.jpg?1590768327',
    name: 'siki ui/ux',
    status: 'pro',
    likes: 118,
    views: 200,
  },
  {
    img: 'https://cdn.dribbble.com/userupload/18100647/file/original-865fc0dec471ff6727523432c79643d7.jpg?resize=1200x900&vertical=center', 
    profileImg: 'https://cdn.dribbble.com/users/2620263/avatars/small/d4145b38e6e5a6325c0748dcc1c264a2.jpg?1685294316',
    name: 'misham ',
    status: 'Team',
    likes: 118,
    views: 200,
  },
  
  {
    img: 'https://cdn.dribbble.com/userupload/18099635/file/original-c3f6ab52229d46af3ff87aff58893407.png?resize=1200x900&vertical=center', 
    profileImg: 'https://cdn.dribbble.com/users/1700393/avatars/small/4321e40fb501ef264d3c9d9d996ad652.png?1698337873',
    name: 'Preshy ui/ux',
    status: 'pro',
    likes: 118,
    views: 200,
  },
  
  {
    img: 'https://cdn.dribbble.com/userupload/18100413/file/original-81bb483df8d5088679e93ae215710900.png?resize=752x&vertical=center', 
    profileImg: 'https://cdn.dribbble.com/users/1057940/avatars/small/f068710cc8e5fcebcbcd8f1f75d1b4ef.gif',
    name: 'Nixto',
    status: 'Team',
    likes: 118,
    views: 200,
  },
  
  {
    img: 'https://cdn.dribbble.com/userupload/18100100/file/original-a3416b3c8df9239fc4b09b9c38a82c92.jpg?resize=1200x900&vertical=center', 
    profileImg: 'https://cdn.dribbble.com/users/10552961/avatars/small/02bd8d6ede3e9470e08d69b6dd5550cb.png?1643271260',
    name: 'Tiolu dv',
    status: 'pro',
    likes: 118,
    views: 200,
  },
  
  {
    img: 'https://cdn.dribbble.com/userupload/18097919/file/original-cfaf20062144946aa716a0ae3a537e57.jpg?resize=1200x938&vertical=center', 
    profileImg: 'https://cdn.dribbble.com/users/10167927/avatars/small/be1b3d9dc3085d158f8008795b421176.jpg?1718399990',
    name: 'Bee ui/ux',
    status: 'Team',
    likes: 118,
    views: 200,
  },
  
  {
    img: 'https://cdn.dribbble.com/userupload/18103427/file/original-b351cfe2ac3a15e3f058bad838e68faa.jpg?resize=1200x900&vertical=center', 
    profileImg: 'https://cdn.dribbble.com/users/1057940/avatars/small/f068710cc8e5fcebcbcd8f1f75d1b4ef.gif',
    name: 'Nixto',
    status: 'Team',
    likes: 118,
    views: 200,
  },
  
  {
    img: 'https://cdn.dribbble.com/userupload/18100413/file/original-81bb483df8d5088679e93ae215710900.png?resize=752x&vertical=center', 
    profileImg: 'https://cdn.dribbble.com/users/13488679/avatars/small/c0725fcd3d468381087a0993104e80f3.jpg?1733031937',
    name: 'Khabib',
    status: 'pro',
    likes: 118,
    views: 200,
  },
  
  {
    img: 'https://cdn.dribbble.com/userupload/18098319/file/original-5144cfb0157602d0052d76bbd6b5e9f9.jpg?resize=1200x938&vertical=center', 
    profileImg: 'https://cdn.dribbble.com/users/21034452/avatars/small/d69a2891f655013a25873d5b782c1a82.jpg?1716283782',
    name: 'Rimi Biswas',
    status: 'pro',
    likes: 118,
    views: 200,
  },
  
  {
    img: 'https://cdn.dribbble.com/userupload/18035120/file/original-ac8e904cb3446ee314c10e5f89aba81f.png?resize=1200x900&vertical=center', 
    profileImg: 'https://cdn.dribbble.com/users/941250/avatars/small/c3acc81cbae9aa8760d6e25fe49ea9f7.png?1709376597',
    name: 'Saju Raj',
    status: 'Team',
    likes: 118,
    views: 200,
  },
  
  {
    img: 'https://cdn.dribbble.com/userupload/18097789/file/original-df3da217b7de069eb7b4d9f430c6b104.jpg?resize=1200x900&vertical=center', 
    profileImg: 'https://cdn.dribbble.com/users/1057940/avatars/small/f068710cc8e5fcebcbcd8f1f75d1b4ef.gif',
    name: 'TRacy Aberage',
    status: 'pro',
    likes: 118,
    views: 200,
  },
  
  {
    img: 'https://cdn.dribbble.com/userupload/18087008/file/original-0d1d3269f041996b2cd938bf62027169.jpg?resize=1200x900&vertical=center', 
    profileImg: 'https://cdn.dribbble.com/users/5172731/avatars/small/e8fc8022be4799b63868fa0ea5d0b09b.jpg?1589294978',
    name: 'Junior Keys',
    status: 'Team',
    likes: 118,
    views: 200,
  },
  
  {
    img: 'https://cdn.dribbble.com/userupload/18102400/file/original-8487fd23fb903043f864076ec61dd651.jpg?resize=1024x768&vertical=center', 
    profileImg: 'https://cdn.dribbble.com/users/844076/avatars/small/602209d8ab8085aa60432ee2ccd623da.jpg?1657792001',
    name: 'Nixto',
    status: 'Team',
    likes: 118,
    views: 200,
  },
  
  {
    img: 'https://cdn.dribbble.com/userupload/18100413/file/original-81bb483df8d5088679e93ae215710900.png?resize=752x&vertical=center', 
    profileImg: 'https://cdn.dribbble.com/users/1057940/avatars/small/f068710cc8e5fcebcbcd8f1f75d1b4ef.gif',
    name: 'Nixto',
    status: 'Team',
    likes: 118,
    views: 200,
  },
];



function App() {
  
  return(
    <main>
        <Header/> 
        <HeroSection/>
        <CardComponent CardsDetails={CardsDetails} />
    </main>
  

  )





}

export default App
