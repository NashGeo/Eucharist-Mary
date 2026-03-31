import React, { useState, useCallback } from 'react';
import Header from './components/Header.jsx';
import HintBar from './components/HintBar.jsx';
import Canvas from './components/Canvas.jsx';
import SidePanel from './components/SidePanel.jsx';

export default function App() {
  const [activeTab, setActiveTab] = useState('eucharist');
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState('en');
  const [langTrayOpen, setLangTrayOpen] = useState(false);
  const [selectedNode, setSelectedNode] = useState(null);
  const [panelOpen, setPanelOpen] = useState(false);

  const handleNodeSelect = useCallback((node) => {
    setSelectedNode(node);
    setPanelOpen(true);
  }, []);

  const handleClosePanel = useCallback(() => {
    setPanelOpen(false);
    setTimeout(() => setSelectedNode(null), 350);
  }, []);

  const handleTabChange = useCallback((tab) => {
    if (tab === activeTab) return;
    setPanelOpen(false);
    setTimeout(() => {
      setSelectedNode(null);
      setActiveTab(tab);
    }, 300);
  }, [activeTab]);

  return (
    <div data-theme={darkMode ? 'dark' : 'light'} style={{ display: 'flex', flexDirection: 'column', height: '100vh', width: '100vw', overflow: 'hidden', background: 'var(--bg)' }}>
      <Header
        activeTab={activeTab}
        onTabChange={handleTabChange}
        darkMode={darkMode}
        onToggleDark={() => setDarkMode(d => !d)}
        language={language}
        onLanguageChange={setLanguage}
        langTrayOpen={langTrayOpen}
        onToggleLangTray={() => setLangTrayOpen(o => !o)}
      />
      <HintBar />
      <div style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
        <Canvas
          activeTab={activeTab}
          onNodeSelect={handleNodeSelect}
          panelOpen={panelOpen}
        />
        <SidePanel
          open={panelOpen}
          node={selectedNode}
          onClose={handleClosePanel}
        />
      </div>
    </div>
  );
}
