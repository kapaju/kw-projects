import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
 
import Navigation from './components/Navigation'
import Home from './components/Home'
import MouseData from './components/MouseData'
import BinaryConverter from './components/BinaryConverter'
import Anecdotes from './components/Anecdotes'
import Colors from './components/Colors'
import Unicafe from './components/Unicafe'
import ColorSlider from './components/ColorSlider'
import Dates from './components/Dates'
import PersonForm from './components/PersonForm'
import DragDrop from './components/DragDrop'
import UndoRedo from './components/UndoRedo'
import CanvasHouse from './components/CanvasHouse'
 
const App = () => {

    return (      
       <BrowserRouter>
        <div>
            <Switch>
             <Route path="/" component={Home} exact />
             <Route path="/binaryconverter" component={BinaryConverter} />
             <Route path="/mousedata" component={MouseData} />
             <Route path="/anecdotes" component={Anecdotes} />
             <Route path="/colors" component={Colors} />
             <Route path="/unicafe" component={Unicafe} />
             <Route path="/colorslider" component={ColorSlider} />
             <Route path="/dates" component={Dates} />
             <Route path="/personform" component={PersonForm} />
             <Route path="/dragdrop" component={DragDrop} />
             <Route path="/undoredo" component={UndoRedo} />
             <Route path="/canvashouse" component={CanvasHouse} />
            </Switch>
           <Navigation />
        </div> 
      </BrowserRouter>
    )
}
 
export default App;
