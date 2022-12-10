import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/Routes/Routes';

function App() {
  return (
    <div className=" bg-neutral ">
      <RouterProvider router={router}></RouterProvider>
      {/* <Toaster
        position="top-center"
        reverseOrder={false}
      /> */}
    </div>
  );
}

export default App;
