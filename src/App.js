import React from 'react';
import './App.css';
import {parent} from './new/parent'
import {Header} from './Componants/Header';
import {Balance} from './Componants/Balance'
import {Incomeexpense} from './Componants/Incomeexpense'
import {TransactionList} from './Componants/TransactionList'
import { AddTransaction } from './Componants/AddTransaction';
import {moh}   from './Componants/moh';
function App()
{ return(
  <div>
    <Header/>
    <div className="container">
      <Balance/>
      <parent/>
      <Incomeexpense/>
      <TransactionList/>
      <AddTransaction/>
       <moh/>
    </div>
  </div>
);

}
export default App;
