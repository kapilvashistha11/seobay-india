/**
 * Safe, semantic Markdown-to-HTML renderer for SeoBay India.
 * Ensures:
 * 1. Code blocks and inline code escape HTML tags (e.g. `<h1>` -> <code>&lt;h1&gt;</code>) so they do NOT register as DOM elements.
 * 2. Level 1 markdown headings (`#`) inside article/service bodies are demoted to `<h2>` to guarantee strictly ONE `<h1>` per page.
 * 3. Proper semantic tags: <h2>, <h3>, <h4>, <ul>, <li>, <p>, <blockquote>, <code>, <pre>, <a>.
 */

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export function renderMarkdownToHtml(markdown: string): string {
  if (!markdown) return '';

  const lines = markdown.split('\n');
  const result: string[] = [];
  let inCodeBlock = false;
  let codeBlockLang = '';
  let codeBlockContent: string[] = [];
  let inList = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Handle code fences ```
    if (line.trim().startsWith('```')) {
      if (inCodeBlock) {
        // End code block
        inCodeBlock = false;
        const codeText = escapeHtml(codeBlockContent.join('\n'));
        result.push(
          `<pre class="bg-slate-900 text-slate-100 p-4 rounded-xl text-xs sm:text-sm font-mono overflow-x-auto my-6 border border-slate-800"><code>${codeText}</code></pre>`
        );
        codeBlockContent = [];
      } else {
        // Start code block
        if (inList) {
          result.push('</ul>');
          inList = false;
        }
        inCodeBlock = true;
        codeBlockLang = line.trim().slice(3);
      }
      continue;
    }

    if (inCodeBlock) {
      codeBlockContent.push(line);
      continue;
    }

    // Close list if current line is not a list item
    const isListItem = /^\s*[\*\-\+]\s+(.*)/.test(line) || /^\s*\d+\.\s+(.*)/.test(line);
    if (inList && !isListItem && line.trim() !== '') {
      result.push('</ul>');
      inList = false;
    }

    // Empty lines
    if (line.trim() === '') {
      continue;
    }

    // Headings (Demote H1 to H2 to guarantee unique H1 on page)
    if (/^#\s+(.*)/.test(line)) {
      const text = line.replace(/^#\s+/, '');
      result.push(`<h2 class="text-2xl sm:text-3xl font-extrabold text-slate-950 mt-10 mb-4 tracking-tight">${parseInline(text)}</h2>`);
      continue;
    }
    if (/^##\s+(.*)/.test(line)) {
      const text = line.replace(/^##\s+/, '');
      result.push(`<h2 class="text-2xl font-bold text-slate-950 mt-10 mb-4 tracking-tight">${parseInline(text)}</h2>`);
      continue;
    }
    if (/^###\s+(.*)/.test(line)) {
      const text = line.replace(/^###\s+/, '');
      result.push(`<h3 class="text-xl font-bold text-slate-900 mt-8 mb-3 tracking-tight">${parseInline(text)}</h3>`);
      continue;
    }
    if (/^####\s+(.*)/.test(line)) {
      const text = line.replace(/^####\s+/, '');
      result.push(`<h4 class="text-lg font-semibold text-slate-900 mt-6 mb-2">${parseInline(text)}</h4>`);
      continue;
    }

    // Horizontal Rule
    if (/^---$/.test(line.trim())) {
      result.push('<hr class="my-8 border-slate-200" />');
      continue;
    }

    // Blockquote
    if (/^>\s*(.*)/.test(line)) {
      const quoteText = line.replace(/^>\s*/, '');
      result.push(`<blockquote class="border-l-4 border-blue-600 pl-4 py-2 italic text-slate-700 bg-slate-50 rounded-r-lg my-4">${parseInline(quoteText)}</blockquote>`);
      continue;
    }

    // List item (bullet or numbered)
    const bulletMatch = line.match(/^\s*[\*\-\+]\s+(.*)/);
    if (bulletMatch) {
      if (!inList) {
        result.push('<ul class="space-y-2 my-4 list-disc list-inside">');
        inList = true;
      }
      result.push(`<li class="text-slate-700 text-sm leading-relaxed">${parseInline(bulletMatch[1])}</li>`);
      continue;
    }

    const numMatch = line.match(/^\s*\d+\.\s+(.*)/);
    if (numMatch) {
      if (!inList) {
        result.push('<ol class="space-y-2 my-4 list-decimal list-inside">');
        inList = true;
      }
      result.push(`<li class="text-slate-700 text-sm leading-relaxed">${parseInline(numMatch[1])}</li>`);
      continue;
    }

    // Standard paragraph
    result.push(`<p class="text-sm sm:text-base text-slate-700 leading-relaxed my-4">${parseInline(line)}</p>`);
  }

  if (inList) {
    result.push('</ul>');
  }

  return result.join('\n');
}

/**
 * Parses inline formatting:
 * - inline code `code` (with HTML escaping)
 * - bold **text**
 * - italic *text*
 * - links [text](url)
 */
function parseInline(text: string): string {
  // First, extract inline code snippets and escape them
  let formatted = text.replace(/`([^`]+)`/g, (_match, codeContent) => {
    return `<code class="bg-slate-100 text-slate-800 px-1.5 py-0.5 rounded text-xs font-mono border border-slate-200">${escapeHtml(codeContent)}</code>`;
  });

  // Links: [text](url)
  formatted = formatted.replace(
    /\[([^\]]+)\]\(([^)]+)\)/g,
    '<a href="$2" class="text-blue-600 font-semibold hover:underline">$1</a>'
  );

  // Bold: **text**
  formatted = formatted.replace(/\*\*([^*]+)\*\*/g, '<strong class="text-slate-950 font-bold">$1</strong>');

  // Italic: *text* (excluding already formatted)
  formatted = formatted.replace(/(?<!\*)\*([^*]+)\*(?!\*)/g, '<em>$1</em>');

  return formatted;
}
