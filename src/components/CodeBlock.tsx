import React, { useState } from 'react';
import { FiCopy, FiCheck } from 'react-icons/fi';

interface CodeBlockProps { code: string; language?: string; title?: string; }

function highlightLine(line: string, language: string): React.ReactNode {
  const trimmed = line.trimStart();

  if (language === 'bash' || language === 'shell') {
    if (trimmed.startsWith('#')) {
      return <span className="hl-comment">{line}</span>;
    }
    if (trimmed.startsWith('$') || trimmed.startsWith('npm ') || trimmed.startsWith('npx ') || trimmed.startsWith('git ') || trimmed.startsWith('claude ') || trimmed.startsWith('cd ') || trimmed.startsWith('node ') || trimmed.startsWith('mkdir ') || trimmed.startsWith('touch ') || trimmed.startsWith('code ')) {
      return <span className="hl-command">{line}</span>;
    }
  }

  if (language === 'javascript' || language === 'typescript' || language === 'tsx' || language === 'jsx') {
    if (trimmed.startsWith('//')) {
      return <span className="hl-comment">{line}</span>;
    }
    if (trimmed.startsWith('import ') || trimmed.startsWith('export ')) {
      return <span className="hl-keyword">{line}</span>;
    }
    if (trimmed.startsWith('const ') || trimmed.startsWith('let ') || trimmed.startsWith('var ') || trimmed.startsWith('function ') || trimmed.startsWith('return ') || trimmed.startsWith('async ') || trimmed.startsWith('await ')) {
      return <span className="hl-declaration">{line}</span>;
    }
    if (trimmed.startsWith('if ') || trimmed.startsWith('else') || trimmed.startsWith('for ') || trimmed.startsWith('while ') || trimmed.startsWith('switch ') || trimmed.startsWith('case ') || trimmed.startsWith('try') || trimmed.startsWith('catch')) {
      return <span className="hl-control">{line}</span>;
    }
  }

  if (language === 'json') {
    if (trimmed.startsWith('"')) {
      return <span className="hl-string">{line}</span>;
    }
  }

  if (language === 'sql') {
    const upper = trimmed.toUpperCase();
    if (trimmed.startsWith('--')) {
      return <span className="hl-comment">{line}</span>;
    }
    if (upper.startsWith('SELECT') || upper.startsWith('CREATE') || upper.startsWith('INSERT') || upper.startsWith('ALTER') || upper.startsWith('DROP') || upper.startsWith('UPDATE') || upper.startsWith('DELETE') || upper.startsWith('FROM') || upper.startsWith('WHERE') || upper.startsWith('BEGIN') || upper.startsWith('END')) {
      return <span className="hl-keyword">{line}</span>;
    }
  }

  return <>{line}</>;
}

export default function CodeBlock({ code, language = 'javascript', title }: CodeBlockProps): React.ReactElement {
  const [copied, setCopied] = useState<boolean>(false);
  const lines = code.split('\n');

  const handleCopy = async (): Promise<void> => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = code;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="code-block">
      <div className="code-block-header">
        <span className="code-block-lang">{title || language}</span>
        <button className="code-block-copy" onClick={handleCopy}>
          {copied ? <><FiCheck size={12} /> 복사됨</> : <><FiCopy size={12} /> 복사</>}
        </button>
      </div>
      <div className="code-block-body">
        <div className="code-block-gutter" aria-hidden="true">
          {lines.map((_, i) => (
            <div key={i} className="code-line-number">{i + 1}</div>
          ))}
        </div>
        <pre><code>{lines.map((line, i) => (
          <div key={i} className="code-line">{highlightLine(line, language)}</div>
        ))}</code></pre>
      </div>
    </div>
  );
}
