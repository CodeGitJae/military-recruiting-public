const Main = ({ Rrj, Rs }) => {
    return (
       <main>
         <div className="content-container">
           <div className="recommendation">
             <h2>추천 특기는 <span>{Rrj}</span> 입니다.</h2>
           </div>
           <div className="score">
             <p>예상 점수: <span>{Rs}점</span></p>
           </div>
           <div className="details">
               <iframe 
               id="recruitIframe"
               src="https://www.mma.go.kr/conscription/recruit_service/procedure/air_force/G_board_text.do?mc=mma0000468&gun_gbcd=3&mojip_gbcd=1" />
           </div>
         </div>
       </main>
    ); 
 };
 
 export default Main;