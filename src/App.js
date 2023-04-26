import Header from './components/Header';
import Navigation from './components/Navigation';
import Main from './components/Main';
import SubContents from './components/SubContents'
import Advertisement from './components/Advertisement';

const AppStyle = {
  width: '100vw',
  height: '100vh',
  backgroundColor: '#dddddd',
  display: 'flex',
  flexDirection: 'column',
};

const ContentFlexer = {
  display: 'flex',
  flexDirection: 'row',
  gap: '2%',
  height: '80%'
}

const ContentFlexerTwo = {
  display: 'flex',
  flexDirection: 'row',
  gap: '1%',
  height: '80%'
}

function App() {
  return (
    <div style={AppStyle}>
      <Header />
      <div style={ContentFlexer}>
          <Navigation />
          <Main>
            <div style={ContentFlexerTwo}>
              <SubContents />
              <SubContents />
              <SubContents />
            </div>  
            <Advertisement />
          </Main>
      </div>
    </div>
  );
}

export default App;
