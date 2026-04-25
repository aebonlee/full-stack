import React, { useState } from 'react';
import { FiCopy, FiCheck } from 'react-icons/fi';

interface CodeBlockProps { code: string; language?: string; title?: string; }

function highlightCode(code: string, language: string): React.ReactNode[] {
  return code.split('\n').map((line, i) => {
    const trimmed = line.trimStart();

    if (language === 'bash' || language === 'shell') {
      if (trimmed.startsWith('#')) {
        return <span key={i} style={{ color: '#64748B' }}>{line}{'\n'}</span>;
      }
      if (trimmed.startsWith('$') || trimmed.startsWith('npm ') || trimmed.startsWith('npx ') || trimmed.startsWith('git ') || trimmed.startsWith('claude ') || trimmed.startsWith('cd ')) {
        return <span key={i} style={{ color: '#7DD3FC' }}>{line}{'\n'}</span>;
      }
    }

    if (language === 'javascript' || language === 'typescript' || language === 'tsx' || language === 'jsx') {
      if (trimmed.startsWith('//')) {
        return <span key={i} style={{ color: '#64748B' }}>{line}{'\n'}</span>;
      }
      if (trimmed.startsWith('import ') || trimmed.startsWith('export ') || trimmed.startsWith('const ') || trimmed.startsWith('function ') || trimmed.startsWith('return ')) {
        return <span key={i} style={{ color: '#C4B5FD' }}>{line}{'\n'}</span>;
      }
    }

    if (language === 'json') {
      if (trimmed.startsWith('"')) {
        return <span key={i} style={{ color: '#86EFAC' }}>{line}{'\n'}</span>;
      }
    }

    return <span key={i}>{line}{'\n'}</span>;
  });
}

export default function CodeBlock({ code, language = 'javascript', title }: CodeBlockProps): React.ReactElement {
  const [copied, setCopied] = useState<boolean>(false);

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
      <pre><code>{highlightCode(code, language)}</code></pre>
    </div>
  );
}
