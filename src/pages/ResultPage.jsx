import {useState, useEffect} from 'react';
import HeaderCategories from '../components/HeaderCategories';
import Main from '../components/Main';
import './resultPageCss.css';


const ResultPage = () => {
  
//   const [category, setCategory] = useState([ '지원 정보', '특기 정보', '나의 특기 알아보기' ]);
  const [recommendResultJob, setRecommendResultJob] = useState('IT정보관리병');
  const [resultScore, setResultScore] = useState(80);

  useEffect(() => {
    }, [])

  return (
    <div className="result-page">
      <header>
        <img src="logo.png" alt="Logo" className="logo" />
        <nav className="nav-menu">   
         {/* {category.map((value, idx) => (
      <HeaderCategories key={value + idx} list={value}/>
      ))} */}
      <HeaderCategories />
        </nav>
      </header>
      <Main Rrj={recommendResultJob} Rs={resultScore} />
      <footer>
        <p>Copyright©2024 국방부. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ResultPage;
