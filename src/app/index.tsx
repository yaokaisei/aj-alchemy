import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { ShareGotem, Top } from '@src/pages';
import '@src/app/style/index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/aj-alchemy" element={<Top />} />
          <Route path="/aj-alchemy/share" element={<ShareGotem />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  </React.StrictMode>,
);
