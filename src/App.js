import logo from './logo.svg';
import './App.css';
import Cards from './components/cards';
import Nav from './components/navs';
import Image from './components/image';
import Para from './components/para';
import Footer from './components/footer';
import Main from './components/main';


function App() {
  return (
    <div>
      <div>
        <Nav />
      </div>
        
      <div className="cards">
        <Main/>
        <Cards
          image= "https://threadcurve.com/wp-content/uploads/2021/04/ankara-style-apr202021-1.jpg.webp"
          name= "Native Apparel"
          gender= "Elegance"
        />
        <Cards
          image="https://i0.wp.com/ae01.alicdn.com/kf/Hfbcfa685e60d4e18828d846cc711a261I/Women-Bodycon-Dresses-Slim-Ruffles-Elegant-Office-Ladies-Work-Wear-Autumn-Fashion-African-Female-Elastic-Sheath.jpg?resize=350%2C350&ssl=1"
          name="Ladies dress"
          gender="Casual and Corporate"
        />
        <Cards
                image="https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/16/093638/1.jpg?7225"
                name="Children dress"
                gender="casual and Corporate"
        />
        <Cards
                image="https://www.mywedding.co.ug/wp-content/uploads/2022/01/gowns.jpg"
                name="Bridal wears"
                gender=" Registary and tradition"
        />
      </div>
      <div className="aboutus">
        <Image
        image="https://thumbs.dreamstime.com/z/portrait-young-pretty-african-american-female-fashion-designer-sitting-hand-hip-design-studio-casual-152823421.jpg" 
        />
        <Para
        para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed at cumque molestias ratione amet eum. Consectetur consequatur, culpa cupiditate iusto cumque inventore sapiente perspiciatis officia facilis ducimus minus eius dolorum sequi veniam quod quisquam natus dolorem dolor hic doloribus facere tempora laborum reiciendis eos! Eos sequi hic cupiditate asperiores mollitia!"
        />
      </div>
      <div className="aboutus">
      <Para
        para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed at cumque molestias ratione amet eum. Consectetur consequatur, culpa cupiditate iusto cumque inventore sapiente perspiciatis officia facilis ducimus minus eius dolorum sequi veniam quod quisquam natus dolorem dolor hic doloribus facere tempora laborum reiciendis eos! Eos sequi hic cupiditate asperiores mollitia!"
        />
        <Image
        image="https://www.shutterstock.com/shutterstock/photos/1031742880/display_1500/stock-photo-shot-of-a-sunny-fashion-design-studio-we-see-working-personal-computer-hanging-clothes-sewing-1031742880.jpg"
        />
      </div>
      <Footer/>
    </div>
    
  );
};
export default App;
