import Chair from "../../../assets/images/chair.png";
// for react day picker
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";


const AppoinmentBanner = ({date, setDate}) => {

  
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={Chair}
          className="max-w-sm rounded-lg shadow-2xl"
          alt="chair"
        />
        <div>
          <DayPicker
            mode="single"
            selected={date}
            onSelect={setDate}
          ></DayPicker>
        </div>
      </div>
      
    </div>
    
  );
};

export default AppoinmentBanner;
