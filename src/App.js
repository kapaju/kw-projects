import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
 
import Navigation from './components/Navigation'
import Home from './components/Home'
import BinaryConverter from './components/BinaryConverter'
import Anecdotes from './components/Anecdotes'
import Unicafe from './components/Unicafe'
import ColorSlider from './components/ColorSlider'
import Dates from './components/Dates'
import PersonForm from './components/PersonForm'
import DragDrop from './components/DragDrop'
import UndoRedo from './components/UndoRedo'
import CanvasHouse from './components/CanvasHouse'
import CurrencyConverter from './components/CurrencyConverter'
import Translations from './components/Translations'
import ContextMenu from './components/ContextMenu'
import Dashboard from './components/Dashboard'
 
const App = () => {

    return (      
       <BrowserRouter>
        <div>
            <Switch>
             <Route relative path="/kw-projects" component={Home} />
             <Route relative path="/binaryconverter" component={BinaryConverter} />
             <Route relative path="/anecdotes" component={Anecdotes} />
             <Route relative path="/unicafe" component={Unicafe} />
             <Route relative path="/colorslider" component={ColorSlider} />
             <Route relative path="/dates" component={Dates} />
             <Route relative path="/personform" component={PersonForm} />
             <Route relative path="/dragdrop" component={DragDrop} />
             <Route relative path="/undoredo" component={UndoRedo} />
             <Route relative path="/canvashouse" component={CanvasHouse} />
             <Route relative path="/currencyconverter" component={CurrencyConverter} />
             <Route relative path="/translation" component={Translations} />
             <Route relative path="/contextmenu" component={ContextMenu} />
             <Route relative path="/dashboard" component={Dashboard} />
            </Switch>
           <Navigation />
        </div> 
      </BrowserRouter>
    )
}
 
export default App;
