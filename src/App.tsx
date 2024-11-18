import Alert from "./components/ui/Alert/Alert";
import { Ban, LaptopMinimalCheck  } from 'lucide-react';

const App = () => {
  return (
    <div>
      <Alert type={"alert-danger"} icon ={<Ban />}  title={"Something Went Wrong!!"}>
        <p>Children Children Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ipsa corrupti ab architecto maxime esse obcaecati quasi cum libero voluptatibus molestias soluta, neque quam aspernatur a ipsam sequi, eligendi dicta?</p>
      </Alert>
      <Alert type={"alert-successs"} icon ={<LaptopMinimalCheck />}  title={"Congrate Hello"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ipsa corrupti ab architecto maxime esse obcaecati quasi cum libero voluptatibus molestias soluta, neque quam aspernatur a ipsam sequi, eligendi dicta?"}/>
    </div>
  );
};

export default App;