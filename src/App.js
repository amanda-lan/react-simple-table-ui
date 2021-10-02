
import './App.css';
import React from 'react';
import BasicTable from "./BasicTable";
import DetailedTable from "./DetailedTable";
import Typography from '@mui/material/Typography';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

function App() {
  return (
      <Router>
        <div className="App">
            <Switch>
                <Route exact path="/">
                    <Typography variant="h4" component="h2">
                        Invoice Summary
                    </Typography>
                    <BasicTable />
                </Route>
                <Route path="/:invoice_no">
                    <Typography variant="h4" component="h2">
                        Invoice Detail
                    </Typography>
                    <DetailedTable />
                </Route>
            </Switch>
        </div>
      </Router>
  );
}

export default App;
