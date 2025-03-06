import logo from './logo.svg';
import './App.css';
import {NewsProvider} from './componentes/NewsProvider'
import NewsList from './componentes/NewsList'
import NewsDetail from './componentes/NewsDetail'
import NoticiasLayout from './componentes/NoticiasLayout'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavigationBar from './componentes/NavigationBar';

function App() {
  return (
      <NewsProvider>
      <BrowserRouter>
        <NavigationBar></NavigationBar>
       <Routes>
        <Route path="/" element={<NewsList />}> </Route>
        <Route path="news/:id" element={<NewsDetail />}> </Route>
     </Routes>
    </BrowserRouter> 
    </NewsProvider>
  
  );
}

export default App;


