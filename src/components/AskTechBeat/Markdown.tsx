import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface MarkdownProps {
  children: string;
}

export function Markdown({ children }: MarkdownProps) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        h1: ({ children }) => <h1 className="text-xl font-bold mb-4">{children}</h1>,
        h2: ({ children }) => <h2 className="text-lg font-bold mb-3">{children}</h2>,
        h3: ({ children }) => <h3 className="text-md font-bold mb-2">{children}</h3>,
        p: ({ children }) => <p className="mb-4">{children}</p>,
        ul: ({ children }) => <ul className="list-disc pl-6 mb-4">{children}</ul>,
        ol: ({ children }) => <ol className="list-decimal pl-6 mb-4">{children}</ol>,
        li: ({ children }) => <li className="mb-1">{children}</li>,
        code: ({ children }) => (
          <code className="bg-muted px-1.5 py-0.5 rounded text-sm">{children}</code>
        ),
        pre: ({ children }) => (
          <pre className="bg-muted p-4 rounded-lg mb-4 overflow-x-auto">{children}</pre>
        ),
      }}
    >
      {children}
    </ReactMarkdown>
  );
}