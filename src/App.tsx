import Alert from "./components/ui/Alert/Alert";
import { Ban } from 'lucide-react';

const App = () => {
  return (
    <div>
      <Alert type={"alert-danger"} icon ={<Ban />}  title={"Something Went Wrong!!"} description="Lorem Impresum Lorem ImpresumLorem ImpresumLorem ImpresumLorem ImpresumLorem ImpresumLorem ImpresumLorem ImpresumLorem ImpresumLorem ImpresumLorem ImpresumLorem ImpresumLorem ImpresumLorem ImpresumLorem ImpresumLorem Impresum"/>
    </div>
  );
};

export default App;