import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
// External Css
import './App.css'


function App() {
  return (
    <>
      <Header />

      <Content color="blue" text="This is my first React Application!" />
      <Content color="red" text="Wish me luck..." />
      <Content color="green" text="I think I've got it!" />
      <Content color="yellow" text="This is a sample text in yellow color" />
      
      <Footer />
    </>
  )
}

export default App



