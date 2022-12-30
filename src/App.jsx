import './App.css'
import Navbar from './components/Navbar'
import Breadcrumb from './components/Breadcrumb'
import Content from './components/Content'
import Footer from './components/Footer'
import Logo from './assets/icon-logo.png'
import LogoIbisnis from './assets/logo-ibisnis.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  const Menu = [
    {
        'href' : '#home',
        'name' : 'Home',
        'icon' : 'faHome'
    },
    {
        'href' : '#about',
        'name' : 'About',
        'icon' : 'faAddressCard'
    },
    {
        'href' : '#productions',
        'name' : 'Productions',
        'icon' : 'faGears'
    },
    {
        'href' : '#contact',
        'name' : 'Contacts',
        'icon' : 'faMessage'
    },
  ]
  
  const DataContent = [
    {
      'title' : 'REAL BUSINESS REAL PEOPLE',
      'subtitle' : 'Start your business here',
      'description' : 'Hadir menjadi solusi terbaik dan terpercaya bagi bisnis Anda. Menawarkan beragam produk dan jasa sekaligus menjadi portal bisnis UKM di Indonesia.',
      'about' : {
        'title' : 'About Company',
        'subtitle' : 'Karena untuk bisa mendapatkan lebih banyak keuntungan, organisasi harus bisa menjual lebih banyak produk atau jasa kepada pelanggan, agar pelanggan mau membeli produk dan jasa lebih banyak, pelanggan harus bisa melihat keunggulan produk kita dibandingkan dengan kompetitor, dengan kata lain produk kita memenuhi ekspektasinya.',
        'description' : 'iBisnis.com hadir menjadi solusi terbaik dan terpercaya bagi bisnis Anda. Menawarkan beragam produk dan jasa sekaligus menjadi portal bisnis UKM di Indonesia. Jadi tunggu apa lagi? Daftar perusahaan Anda sekarang juga hanya di iBisnis.com.',
        'thumbnail' : 'image-ex.png',
        'data' : [
          {
            'title' : 'SEO',
            'thumbnail' : 'seo 1.png',
            'description' : ''
          },
          {
            'title' : 'Dukungan Pelanggan',
            'thumbnail' : 'adwords 1.png',
            'description' : 'Memudahkan pencari menemukan sumber informasi sesuai dengan kata kunci'
          },
          
          {
            'title' : 'Google Adwords',
            'thumbnail' : 'adwords 1.png',
            'description' : 'Memudahkan pencari menemukan sumber informasi sesuai dengan kata kunci'
          },
        ]
      },
      'service' : [
        {
          'name' : 'CRM',
          'slug' : 'https://www.ibisnis.com/customer-relationship-management',
          'thumbnail' : 'customer-service 1.png',
          'description' : 'Provides a complete suite of social collaboration, communication and management tools for your team, including files sharing, project management, calendars, and more.'
        },
        {
          'name' : 'VIP Member',
          'slug' : 'https://www.ibisnis.com/vip-member',
          'thumbnail' : 'customer-service 1.png',
          'description' : 'Tingkatkan bisnis Anda lebih maksimal dan dapatkan lebih banyak pengunjung dengan berlangganan keanggotaan VIP Member.'
        },
        {
          'name' : 'Website',
          'slug' : 'https://www.ibisnis.com/website',
          'thumbnail' : 'customer-service 1.png',
          'description' : 'Dengan membuat website di iBisnis, Anda memiliki peluang lebih besar untuk mendapatkan jutaan pengunjung dan tampil di halaman utama mesin pencari (search engine).'
        },
      ],
      'benefits' : {
        'title' : 'Benefits Of Product',
        'description' : 'Karena untuk bisa mendapatkan lebih banyak keuntungan, organisasi harus bisa menjual lebih banyak produk atau jasa kepada pelanggan, agar pelanggan mau membeli produk dan jasa lebih banyak, pelanggan harus bisa melihat keunggulan produk kita dibandingkan dengan kompetitor, dengan kata lain produk kita memenuhi ekspektasinya.',
        'image' : '',
        'data' : [
          {
            'image' : '',
            'name' : 'Search Engine Optimization',
            'description' : 'Meningkatkan peringkat bisnis Anda pada halaman utama Google dan ditemukan calon customer'
          },
          {
            'image' : '',
            'name' : 'Search Engine Optimization',
            'description' : 'Meningkatkan peringkat bisnis Anda pada halaman utama Google dan ditemukan calon customer'
          }
        ]
      }
    }
  ]

  return (
    <div className="App">
      <Navbar Menu={Menu} Logo={Logo} LogoIbisnis={LogoIbisnis} />
      <Breadcrumb title={DataContent[0].title} subtitle={DataContent[0].subtitle} description={DataContent[0].description} />
      <Content DataContent={DataContent} />
      <Footer DataContent={DataContent} Menu={Menu} Logo={Logo} LogoIbisnis={LogoIbisnis} />
    </div>
  )
}

export default App
