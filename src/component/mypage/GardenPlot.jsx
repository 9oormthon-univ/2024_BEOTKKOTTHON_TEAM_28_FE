import clock from '../../assets/clock.png';
import loader from '../../assets/loader.png';

const GardenPlot = () => {
  return (
    <div>
      잔디심기
      <div>라이브러리</div>
      <div>
        <img src={loader} alt='프로젝트 참여일' />
        <div>프로젝트 참여일</div>
      </div>
      <div>
        <img src={clock} alt='프로젝트 참여일' />
        <div>총 참여 시간</div>
      </div>
    </div>
  );
};

export default GardenPlot;
