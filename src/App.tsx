import React, { FormEvent, FormEventHandler, useState } from 'react';
import './App.css';
import mermaid from 'mermaid';
import { useAntlr4 } from './hooks/useAntlr4';

function App() {
  // const [code, setCode] = useState("");
  const ref = React.useRef<HTMLDivElement>(null);
  const { mermaidString, drawMermaid } = useAntlr4();
  React.useEffect(() => {
    mermaid.mermaidAPI.initialize({
      startOnLoad: true,
      securityLevel: "loose",
      theme: "forest",
      logLevel: 5
    });
  }, []);

  const renderMermaid = async () => {

    if (ref.current && mermaidString !== "") {

      const { svg } = await mermaid.mermaidAPI.render("preview", mermaidString);
      ref.current.innerHTML = svg;
    }
  }
  React.useEffect(() => {
    renderMermaid();
  }, [mermaidString]);
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.target as HTMLFormElement);
    const data = formData.get('inputMermaid');
    console.log("data", data)
    drawMermaid(data as string);
  }
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <textarea name="inputMermaid" id="" cols={30} rows={10}></textarea>
        <button type='submit'>Enviar</button>
      </form>
      <h1>React Mermaid Example</h1>
      <div ref={ref} key="preview">
      </div>
    </div>

  );
}

export default App;
